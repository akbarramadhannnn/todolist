import Header from "./Header";
import { Fragment } from "react";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <div className="px-[20px] mt-[28px] lg:px-[202px] lg:mt-[43px]">{children}</div>
    </Fragment>
  );
};

export default Index;
