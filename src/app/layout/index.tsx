import { Layout } from "antd";
import { ReactNode } from "react";
import { AppContent } from "./Content";
import { AppHeader } from "./Header";
import {AppFooter} from "@/app/layout/Footer";

interface AppLayoutProps {
  children: ReactNode | ReactNode[];
}

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;
  return (
    <Layout>
      <AppHeader />
      <AppContent>{children}</AppContent>
        <AppFooter />
    </Layout>
  );
};
export default AppLayout;
