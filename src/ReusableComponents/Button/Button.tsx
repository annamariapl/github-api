import React, { forwardRef, Ref } from "react";
import classNames from "classnames";
import "./button.less";


type ButtonProps = {
  kind?: ButtonKind;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonKind = keyof typeof BUTTON_KIND;


const BUTTON_KIND = {
    NORMAL: "normalButton",
    DELETE: "deleteButton"
  };
  
  const Button = forwardRef(
    (
      { kind = "NORMAL", className, ...passedProps }: ButtonProps,
      ref?: Ref<HTMLButtonElement>
    ) => {
      const cN = classNames(BUTTON_KIND[kind], className);
      return <button {...passedProps} className={cN} ref={ref} />;
    }
  );
  
  export default Button;