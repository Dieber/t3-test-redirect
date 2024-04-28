import { z } from "zod";

import { createTRPCRouter, publicProcedure, userProcedure } from "~/server/api/trpc";


export const postRouter = createTRPCRouter({
  hello: userProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

});
