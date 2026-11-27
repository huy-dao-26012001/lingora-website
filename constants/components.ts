export const Variants = {
  default: "default",
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Success: "success",
  Danger: "danger",
  Warning: "warning",
  Surface: "surface",
} as const;

export type Variants = (typeof Variants)[keyof typeof Variants];

export const Sizes = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
} as const;

export type Sizes = (typeof Sizes)[keyof typeof Sizes];
