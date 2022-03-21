import { useContext } from 'react';
import { Context } from '../context/authContext';

export function useAuth() {
    const value = useContext(Context);

    return value;
}
