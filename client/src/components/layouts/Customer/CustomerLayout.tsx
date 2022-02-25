import Footer from "../Footer";
import NavBar from "../Navbar";
import type { LayoutProps } from "../PageWithLayouts";
const CustomerLayout: LayoutProps = ({ children }) => {
  console.log("CustomerLayout render");
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
export default CustomerLayout;
