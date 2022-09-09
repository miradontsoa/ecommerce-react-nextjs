import React from "react";

export type MenuItem = {
  title?: string;
  href?: string;
  active?: boolean;
  color?: string;
  element?: React.ReactElement;
  icon?: React.ReactSVGElement | React.ReactElement;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  subMenuItems?: MenuItem[];
};

export type ThemeColor =
  | "primary"
  | "secondary"
  | "success"
  | "alert"
  | "info"
  | "warning"
  | "light"
  | "dark"
  | "currentColor"
  ;
