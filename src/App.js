import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router';

import { ContextProvider } from './context/authContext';

import { LoginPage, Home, MyPets, PetProfile } from './pages';
import { Header } from './components';

import GlobalStyle from './globalStyles.js';

const WithNavbar = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const WithoutNavbar = () => <Outlet />;

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
          <Routes>
            <Route element={<WithoutNavbar />}>
              <Route path="/" element={<LoginPage />} />
            </Route>
            <Route element={<WithNavbar />}>
              <Route path="/home" element={<Home />} />
              <Route path="/meus-pets" element={<MyPets />} />
              <Route path="pet/:id" element={<PetProfile />} />
            </Route>
          </Routes>
          <GlobalStyle />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
