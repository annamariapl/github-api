import "./componentRegistery.less";
import React, { forwardRef, Ref } from "react";
import classNames from "classnames";

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
  return <h3 className="title">{title}</h3>;
};

export const Container: React.FC = props => {
  return <div {...props} className="elementContainer"></div>;
};

export const SearchContainer: React.FC = props => {
  return <div {...props} className="searchContainer"></div>;
};

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
