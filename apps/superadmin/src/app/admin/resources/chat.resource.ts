import { PrismaService } from '@trevor/server/services';
import { ResourceWithOptions } from 'adminjs';
import { Components } from '../components';
import { getDmmf } from './config';

export const CreateChatResource = (
  prisma: PrismaService
): ResourceWithOptions => ({
  resource: { model: getDmmf(prisma).modelMap.Chat, client: prisma },
  options: {
    navigation: { name: null },
    listProperties: ['id', 'title', 'createdAt'],
    editProperties: ['title'],
    actions: {
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin ? currentAdmin.role === 'admin' : false,
      },
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
      title: {
        type: 'textarea',
      },
      // user: {
      //   components: {
      //     list: Components.UserList,
      //     //     show: Components.UserList,
      //   },
      // },
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
});
