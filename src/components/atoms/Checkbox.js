import React, { memo } from "react";
import { Icon } from "components/atoms";

const Checkbox = ({ active, onClick }) => {
  return (
    <button
      data-cy="todo-item-checkbox"
      className={`w-[12px] h-[12px] lg:w-[20px] lg:h-[20px] flex items-center justify-center  ${
        active ? "bg-[#FFFFFF] border border-[#C7C7C7]" : "bg-[#16ABF8]"
      }`}
      onClick={onClick}
    >
      <Icon name="check-white" className="w-[15px] h-[15px]" />
    </button>
  );
};

export default memo(Checkbox);
