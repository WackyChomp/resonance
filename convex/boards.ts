import { v } from 'convex/values';

import { query } from './_generated/server';

{/* 
-API route to obtain all boards from board table (board.ts)
-querying multiple boards
*/}

export const get = query ({
  args: {
    orgId: v.string(),
  },

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity){
      throw new Error('Unauthorized');
    }

    const boards = await ctx.db
      .query('boards')
      .withIndex('by_org', (q) => q.eq('orgId', args.orgId))      // index used for faster querying , in board.ts
      .order('desc')
      .collect();

    return boards;
  }
});
