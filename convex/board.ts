import { v } from 'convex/values';
import { mutation } from './_generated/server';

const images = [
  '/placeholders-images/api-interface.svg',
  '/placeholders-images/bank.svg',
  '/placeholders-images/film-camera.svg',
  '/placeholders-images/gamepad.svg',
  '/placeholders-images/interface-control.svg',
  '/placeholders-images/machine-vision.svg',
  '/placeholders-images/plane.svg',
  '/placeholders-images/port-deduction.svg',
  '/placeholders-images/safe-and-stable.svg',
  '/placeholders-images/target.svg',
]

export const create = mutation ({
  args: {
    orgId: v.string(),
    title: v.string(),
    //: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity){
      throw new Error('Unauthorized!!! Get Outta Here');
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    console.log(randomImage, 'Convex Test Example')

    const board = await ctx.db.insert('boards', {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  }
})