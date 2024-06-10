import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ElementKeys = "a" | "button";
type ButtonProps<T extends ElementKeys> = {
  children: ReactNode;
  as: T;
  className?: string;
  props?: ComponentPropsWithoutRef<T>;
} & (
  | {
      as: "a";
      href: string;
      onClick?: undefined;
    }
  | {
      as: "button";
      href?: undefined;
      onClick: () => void;
    }
);

function Button<T extends ElementKeys>({
  children,
  as,
  onClick = undefined,
  href = undefined,
  className,
  ...props
}: ButtonProps<T>) {
  const asString = as || href ? "a" : "button";
  const Element = asString;

  const classes = clsx(
    "flex bg-yellow-500 whitespace-nowrap text-yellow-700 px-4 py-2.5 rounded-xl",
    className,
  );

  return (
    <Element
      data-component-name="Button"
      href={href}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </Element>
  );
}
export default Button;
