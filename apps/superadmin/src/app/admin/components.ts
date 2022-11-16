import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

// const BASE =
//   '../../../../../../../../../../apps/superadmin/src/app/admin/components';

const BASE = `${__dirname}/components`;

const Components = {
  Dashboard: componentLoader.add('dashboard', `${BASE}/dashboard`),
  Textarea: componentLoader.add('textarea', `${BASE}/textarea`),
  Profile: componentLoader.add('profile', `${BASE}/profile`),
  // other custom components here
};

export { componentLoader, Components };
