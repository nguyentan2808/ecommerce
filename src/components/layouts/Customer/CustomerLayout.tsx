import CartSideBar from "components/modules/Customer/CartSideBar";
import type { LayoutProps } from "../PageWithLayouts";
import Footer from "./CustomerFooter";
import NavBar from "./CustomerNavbar";

const CustomerLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <CartSideBar />
      <Footer />
    </>
  );
};
export default CustomerLayout;
