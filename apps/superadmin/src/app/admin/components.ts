import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

// took me hours to figure this out.
// I was so mad.
// adminjs can't detect the correct path to the component files
// it should be just... add("someName", "./components/dashboard")
// but for nx, that would fail

// const BASE =
//   '../../../../../../../../../../apps/superadmin/src/app/admin/components';
const BASE = './components';

const Components = {
  Dashboard: componentLoader.add('dashboard', `${BASE}/dashboard`),
  Textarea: componentLoader.add('textarea', `${BASE}/textarea`),
  Profile: componentLoader.add('profile', `${BASE}/profile`),
  // other custom components here
};

export { componentLoader, Components };
