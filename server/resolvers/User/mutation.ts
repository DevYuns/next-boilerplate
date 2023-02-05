import {inputObjectType, mutationField, nonNull, stringArg} from 'nexus';

import invariant from 'tiny-invariant';

export const UserUpdateInputType = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('email');
    t.string('name');
    t.string('imageUrl');
    t.gender('gender');
  },
});

export const updateUser = mutationField('updateUser', {
  type: 'User',
  args: {
    userId: stringArg(),
    user: nonNull(UserUpdateInputType),
  },
  description: 'update the user fields',
  resolve: async (_parent, {userId, user}, ctx) => {
    invariant(userId, 'Can not found userId');

    const updated = await ctx.prisma.user.update({
      where: {id: userId},
      data: {
        ...user,
      },
    });

    return updated;
  },
});
