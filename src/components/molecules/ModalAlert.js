import React, { memo } from "react";
import { Icon } from "components/atoms";

const ModalAlert = ({ open, desc, onClose }) => {
  return (
    <div
      data-cy="modal-information-icon"
      className={`fixed w-full top-0 left-0 px-[20px] lg:h-[105px] lg:px-[202px] flex justify-center items-center mt-[20px] lg:mt-0
    ${open ? "block" : "hidden"}
    `}
    >
      <div
        className="relative bg-white w-[450px] h-[58px] rounded-[12px] flex items-center px-[20px]"
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          className="absolute right-0 top-0 mt-[12px] mr-[15px]"
          onClick={onClose}
        >
          <Icon name="close-grey" className="w-[11px] h-[11px]" />
        </button>

        <div className="mr-[13px]">
          <Icon name="information-green" />
        </div>
        <p className="text-[14px] text-[#111111] font-medium">{desc}</p>
      </div>
    </div>
  );
};

export default memo(ModalAlert);
