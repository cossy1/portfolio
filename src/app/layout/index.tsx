import { Layout } from 'antd';
import { ReactNode, useState } from 'react';
import { AppContent } from './Content';
import { AppHeader } from './Header';

interface AppLayoutProps {
    children: ReactNode | ReactNode[];
}
const AppLayout = (props: AppLayoutProps) => {
    const { children } = props;
    const [menuCollapse, setMenuCollapse] = useState<boolean>(false);
    const onCollapse = () => {
        setMenuCollapse((prev) => !prev);
    };
    return (
        <Layout>
            <Layout>
                <AppHeader />
                <AppContent>{children}</AppContent>
            </Layout>
        </Layout>
    );
};
export default AppLayout;