import { PrismaService } from '@trevor/server/services';
import { ResourceWithOptions } from 'adminjs';
import { Components } from '../components';
import { getDmmf } from './config';

export const CreateUserResource = (
  prisma: PrismaService
): ResourceWithOptions => ({
  resource: { model: getDmmf(prisma).modelMap.User, client: prisma },
  options: {
    navigation: { name: null },
    listProperties: ['fullName', 'status', 'email'],
    editProperties: ['email', 'fullName', 'status'],
    actions: {
      new: { isAccessible: false },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin ? currentAdmin.role === 'admin' : false,
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin ? currentAdmin.role === 'admin' : false,
      },
      bulkDelete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin ? currentAdmin.role === 'admin' : false,
      },
    },
    properties: {
      fullName: {
        type: 'textarea',
      },
      status: {
        type: 'string',
      },
      email: {
        type: 'textarea',
        components: {
          show: Components.Textarea,
        },
      },
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
});
