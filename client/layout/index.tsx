import Header from './Header';
import Footer from './Footer';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
