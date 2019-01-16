import MainNavigation from "./Navigation/MainNavigation";
import Footer from "./Footer/Footer";

export default props =>
  props.noNav ? (
    <>{props.children}</>
  ) : (
    <>
      <MainNavigation />
      {props.children}
      <Footer />
    </>
  );
