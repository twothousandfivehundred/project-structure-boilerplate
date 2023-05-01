import { RouterProvider } from 'react-router-dom';

import router from './constants/routes/router';
import GlobalStyles from './components/GlobalStyles';
import ModalRoot from './components/ModalRoot';
import { ModalProvider } from './contexts/ModalContext';

const App = () => (
  <>
    <GlobalStyles />
    <ModalProvider>
      <RouterProvider router={router} />
      <ModalRoot />
    </ModalProvider>
  </>
);

export default App;
