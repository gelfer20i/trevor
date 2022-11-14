import { AdminModuleOptions } from '@adminjs/nestjs';

interface UserProp {
  email: string;
  password: string;
  role: string;
}

export const auth: AdminModuleOptions['auth'] = {
  authenticate: async (email: string, password: string) => {
    let admin: UserProp[];

    try {
      admin = JSON.parse(process.env.ADMIN_USERS ?? '');
    } catch (error) {
      return null;
    }

    const user = admin.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) return null;

    return Promise.resolve({ ...user, title: user.role });
  },
  cookieName: process.env.ADMIN_COOKIE_NAME ?? '',
  cookiePassword: process.env.ADMIN_COOKIE_PASSWORD ?? '',
};
