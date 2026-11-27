import { memo } from "react";
import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";

// Constants
import { Variants, Sizes } from "@/constants";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: Variants;
  sizes?: Sizes;
  isDisabled?: boolean;
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  variants = Variants.Primary,
  sizes = Sizes.Medium,
  isDisabled = false,
  children,
  onClick,
}: IButtonProps) => {
  const btnVariants: Record<string, string> = {
    [Variants.default]: "bg-default text-primary",
    [Variants.Primary]: "bg-primary text-white",
    [Variants.Surface]: "bg-surface text-primary",
  };
  const className: string = `${btnVariants[variants]} ${sizes}`;

  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
