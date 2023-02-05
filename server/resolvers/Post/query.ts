import {idArg, nonNull, queryField} from 'nexus';

export const post = queryField('post', {
  type: 'Post',
  args: {id: nonNull(idArg())},
  description: 'Fetch the Post with given id',

  resolve: async (parent, args, ctx) => {
    const {id} = args;

    return await ctx.prisma.post.findUnique({where: {id}});
  },
});
