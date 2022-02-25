import { NextPage } from "next";
import type { ReactElement } from "react";
import CustomerLayout from "./Customer";
import AdminLayout from "./Admin";
interface ILayoutProps {
  children: React.ReactNode;
}
export type CustomerLayout = NextPage & { layout: typeof CustomerLayout };
export type AdminLayout = NextPage & { layout: typeof AdminLayout };

export type PageWithLayoutType = CustomerLayout | AdminLayout;
export type LayoutProps = ({ children }: ILayoutProps) => ReactElement;

export default PageWithLayoutType;
