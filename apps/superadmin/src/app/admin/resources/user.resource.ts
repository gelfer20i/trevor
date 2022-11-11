import { PrismaService } from '@trevor/server/services';
import { ResourceWithOptions } from 'adminjs';
import { Components } from '../components';
import { getDmmf } from './config';

export const CreateUserResource = (
  prisma: PrismaService,
): ResourceWithOptions => ({
  resource: { model: getDmmf(prisma).modelMap.User, client: prisma },
  options: {
    navigation: { name: null },
    listProperties: ['id', 'fullName', 'status', 'email'],
    editProperties: ['fullName', 'status', 'email'],
    actions: {
      new: { isAccessible: false },
      delete: { isAccessible: true },
      edit: { isAccessible: true },
      bulkDelete: { isAccessible: true },
    },
    properties: {
      email: {
        type: "textarea",
        components: {
          show: Components.Textarea
        }
      },
    },
    sort: {
      sortBy: 'createdAt',
      direction: 'desc',
    },
  },
});
