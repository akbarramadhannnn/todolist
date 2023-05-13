import React, { memo } from "react";

const Title = ({ children, dataCy }) => {
  return (
    <h1
      data-cy={dataCy}
      className="text-[#111111] font-bold text-[16px] lg:text-[36px]"
    >
      {children}
    </h1>
  );
};

export default memo(Title);
