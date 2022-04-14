import { Switch } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';

import { Login, Register, Home, MyPets, PetProfile, PetRegister, Page404 } from '../pages';

export function Routes() {
  return (
    <Switch>
        <PrivateRoutes exact path="/login" component={Login} isClosed={false} />
        <PrivateRoutes exact path="/register" component={Register} isClosed={false} />
        <PrivateRoutes exact path="/" component={Home} isClosed />
        <PrivateRoutes exact path="/meus-pets" component={MyPets} isClosed />
        <PrivateRoutes exact path="/pet/:id" component={PetProfile} isClosed />
        <PrivateRoutes exact path="/pet" component={PetRegister} isClosed />
        <PrivateRoutes exact path="/pet/:id/edit" component={PetRegister} isClosed />
        <PrivateRoutes path="*" component={Page404} isClosed />
    </Switch>
  );
}
