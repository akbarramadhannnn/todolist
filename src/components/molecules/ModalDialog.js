import React, { memo, useEffect } from "react";
import { Button, Icon } from "components/atoms";

const ModalForm = ({
  open = false,
  desc,
  title,
  onSubmitCancel = () => {},
  onSubmitDelete = () => {},
  disabledButton = false,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div
      data-cy="modal-dialog"
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center ${
        open ? "block" : "hidden"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="relative bg-white rounded-[12px] shadow w-[490px] h-[355px] flex flex-col justify-between items-center pt-[50px] pb-[43px] px-[20px] lg:px-[58px]">
        <div>
          <Icon name="danger-red" />
        </div>

        <div>
          <p className="text-center text-[#111111] font-medium text-[14px] lg:text-[18px]">
            {desc}
          </p>
          <p className="font-bold text-center text-[#111111] text-[14px] lg:text-[18px]">
            “{title}”?
          </p>
        </div>

        <div className="flex justify-between w-full px-[70px] lg:px-[45px]">
          <Button
            onClick={onSubmitCancel}
            variant="default"
            disabled={disabledButton}
          >
            Batal
          </Button>

          <Button
            onClick={onSubmitDelete}
            variant="danger"
            disabled={disabledButton}
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalForm);
