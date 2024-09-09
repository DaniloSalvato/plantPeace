import { z } from "zod";

export const schema = z.object({
  title: z
    .string()
    .min(
      3,
      "It must contain more than 3 characters and only allow letters, spaces, and accented characters."
    )
    .max(
      30,
      " It must contain less than 30 characters and only allow letters, spaces, and accented characters."
    ),
  subtitle: z
    .string()
    .min(
      3,
      "It must contain more than 3 characters and only allow letters, spaces, and accented characters."
    )
    .max(
      70,
      "It must contain less than 70 characters and only allow letters, spaces, and accented characters."
    ),
  type: z
    .string()
    .min(
      3,
      "It must contain more than 3 characters and only allow letters, spaces, and accented characters."
    )
    .max(
      50,
      "It must contain less than 50 characters and only allow letters, spaces, and accented characters."
    ),
  price: z.coerce.number(),
  discount: z.coerce.number(),
  label: z.enum(["Indoor","Outdoor"]),
  features: z
    .string()
    .min(
      3,
      " It must contain less more 3 characters and only allow letters, spaces, and accented characters."
    )
    .max(
      500,
      " It must contain less then 500 characters and only allow letters, spaces, and accented characters."
    ),
  description: z
    .string()
    .min(
      3,
      " It must contain less more 3 characters and only allow letters, spaces, and accented characters."
    )
    .max(
      500,
      " It must contain less then 500 characters and only allow letters, spaces, and accented characters."
    ),
});

export type DataProps = z.infer<typeof schema>;