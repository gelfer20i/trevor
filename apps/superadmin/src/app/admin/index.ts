import { Components, componentLoader } from './components';
import { Database, Resource } from '@adminjs/prisma';
import AdminJS, { AdminJSOptions } from 'adminjs';
import { CreateChatResource, CreateUserResource } from './resources';
import { AdminModuleOptions } from '@adminjs/nestjs';
import { PrismaService } from '@trevor/server/services';
import { auth } from './auth';

AdminJS.registerAdapter({ Database, Resource });

const generateAdminJSConfig = (prisma: PrismaService): AdminJSOptions => ({
  rootPath: '/admin',
  componentLoader,
  branding: {
    companyName: '20i',
  },
  dashboard: {
    component: Components.Dashboard,
  },
  pages: {
    customPage: {
      icon: 'User',
      component: Components.Profile,
      handler: async (request, response, context) => {
        return {
          text: 'I am profile.',
        };
      },
    },
  },
  resources: [CreateUserResource(prisma), CreateChatResource(prisma)],
});

export const generateAdminModuleOptions = (
  prisma: PrismaService
): AdminModuleOptions => ({
  adminJsOptions: generateAdminJSConfig(prisma),
  auth,
});
