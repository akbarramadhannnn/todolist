import React, { memo } from "react";

const Label = ({ children}) => {
  return <p className="text-[16px] text-[#111111] font-regular">{children}</p>;
};

export default memo(Label);
