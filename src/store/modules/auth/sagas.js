import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push('/');
  } catch (err) {
    console.error('Usuário ou senha inválidos.');
    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  const { nome, email, password } = payload;

  try {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      console.success('Conta criada com sucesso!');
            
      history.push('/login');
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', 0);

    if (status === 401) {
      yield put (actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => console.error(error));
    } else {
      console.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
