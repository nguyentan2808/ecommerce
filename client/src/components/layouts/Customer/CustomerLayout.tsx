import CartSideBar from "components/modules/CartSideBar";
import Footer from "./CustomerFooter";
import NavBar from "./CustomerNavbar";
import type { LayoutProps } from "../PageWithLayouts";

const CustomerLayout: LayoutProps = ({ children }) => {
  console.log("CustomerLayout render");
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
