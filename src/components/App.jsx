import { BrowserRouter } from 'react-router-dom';

import ClientRoutes from './ClientRouters/ClientRouters';
import Header from './Header';

export function App() {
  return (
    <>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <Header />
        <ClientRoutes />
      </BrowserRouter>
    </>
  );
}
