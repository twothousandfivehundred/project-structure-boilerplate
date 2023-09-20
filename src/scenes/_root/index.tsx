import { memo } from 'react';
import ModalRoot from '~/components/ModalRoot';
import Outlet from '~/components/Outlet';

const Root = () => (
  <>
    <Outlet />
    <ModalRoot />
  </>
);

export default memo(Root);
