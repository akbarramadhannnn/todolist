import React, { memo } from "react";
import { Icon } from "components/atoms";

const ModalAlert = ({ open, desc, onClose }) => {
  return (
    <div
      data-cy="modal-information"
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center ${
        open ? "block" : "hidden"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-[450px] h-[58px] rounded-[12px] flex items-center px-[20px]"
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mr-[13px]">
          <Icon name="information-green" dataCy="modal-information-icon" />
        </div>
        <p
          data-cy="modal-information-title"
          className="text-[14px] text-[#111111] font-medium"
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default memo(ModalAlert);
