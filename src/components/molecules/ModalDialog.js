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
      data-cy="modal-delete"
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={onSubmitCancel}
    >
      <div
        data-cy="todo-modal-delete"
        className="relative bg-white rounded-[12px] shadow w-[490px] h-[355px] flex flex-col justify-between items-center pt-[50px] pb-[43px] px-[20px] lg:px-[58px]"
      >
        <div>
          <Icon name="danger-red" dataCy="modal-delete-icon" />
          <h4 className="font-bold" data-cy="modal-delete-title">
            {""}
          </h4>
        </div>

        <div>
          <p className="text-center text-[#111111] font-medium text-[14px] lg:text-[18px]">
            {desc}
          </p>
          <p
            data-cy=""
            className="font-bold text-center text-[#111111] text-[14px] lg:text-[18px]"
          >
            “{title}”?
          </p>
        </div>

        <div className="flex justify-between w-full px-[70px] lg:px-[45px]">
          <Button
            onClick={onSubmitCancel}
            variant="default"
            disabled={disabledButton}
            dataCy="modal-delete-cancel-button"
          >
            Batal
          </Button>

          <Button
            onClick={onSubmitDelete}
            variant="danger"
            disabled={disabledButton}
            dataCy="modal-delete-confirm-button"
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalForm);
