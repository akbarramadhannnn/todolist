// import React, { memo, useEffect } from "react";
import { Button } from "components/atoms";
import { DropdownPriority } from "components/molecules";

// const ModalForm = ({
//   open = false,
//   onClose = () => {},
//   disabledButton = true,
//   valueItemName = "",
//   onChangeItemName = () => {},
//   onSubmit,
//   valuePriority = "",
//   onClickPriority = () => {},
// }) => {
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [open]);

//   return (
//     <div
//       data-cy="modal-add"
//       className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center ${
//         open ? "block" : "hidden"
//       }`}
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="relative w-full max-w-2xl max-h-full">
//         <div className="relative bg-white rounded-[12px] shadow">
//           <div className="flex items-center justify-between py-[24px] px-[30px] border-b rounded-t-[12px] border-[#E5E5E5]">
//             <div data-cy="modal-add-title">
//               <h3 className="text-[14px] lg:text-[18px] font-semibold text-[#111111]">
//                 Tambah List Item
//               </h3>
//             </div>

//             <div data-cy="modal-add-close-button">
//               <button
//                 className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
//                 onClick={onClose}
//               >
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>
//             </div>
//           </div>

//           <div className="py-[38px] px-[30px]">
//             <div className="mb-[26px] flex flex-col">
//               <label
//                 data-cy="modal-add-name-title"
//                 className="text-[#111111] font-semibold text-[12px] uppercase"
//               >
//                 nama list item
//               </label>

//               <div data-cy="modal-add-name-input" className="w-full">
//                 <input
//                   value={valueItemName}
//                   onChange={onChangeItemName}
//                   className="w-full mt-[9px] border border-[#E5E5E5] p-[14px] rounded-[6px] placeholder:text-[#A4A4A4] placeholder:text-[16px] font-regular outline-none focus:border-[#16ABF8]"
//                   placeholder="Tambahkan nama list item"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 data-cy="modal-add-priority-title"
//                 className="text-[#111111] font-semibold text-[12px] uppercase"
//               >
//                 priority
//               </label>

//               <div className="mt-[9px] lg:w-[205px]">
//                 <DropdownPriority
//                   label="Pilih Priority"
//                   value={valuePriority}
//                   onSelect={(value) => onClickPriority(value)}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-end p-6 space-x-2 border-t border-[#E5E5E5] rounded-b border-[#E5E5E5]">
//             <Button
//               dataCy="modal-add-save-button"
//               onClick={onSubmit}
//               disabled={disabledButton}
//             >
//               Simpan
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(ModalForm);

import { createPortal } from "react-dom";
import { memo, useCallback, useEffect } from "react";
const ModalForm = ({
  open,
  onClose,
  disabledButton = true,
  valueItemName = "",
  onChangeItemName = () => {},
  onSubmit,
  valuePriority = "",
  onClickPriority = () => {},
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const escHandler = useCallback(
    ({ key }) => {
      if (key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", escHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", escHandler);
      }
    };
  }, [escHandler]);

  if (typeof document !== "undefined") {
    return createPortal(
      <div
        data-cy="modal-add"
        className={`fixed inset-0 flex justify-center items-center ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black ${
            open ? "opacity-50" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
          onClick={onClose}
        />

        <div
          className={`fixed shadow-lg ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        >
          <div className="relative w-[320px] md:w-[620px] lg:w-[830px]">
            <div className="relative bg-white rounded-[12px] shadow">
              <div className="flex items-center justify-between py-[24px] px-[30px] border-b rounded-t-[12px] border-[#E5E5E5]">
                <div data-cy="modal-add-title">
                  <h3 className="text-[14px] lg:text-[18px] font-semibold text-[#111111]">
                    Tambah List Item
                  </h3>
                </div>

                <div data-cy="modal-add-close-button">
                  <button
                    className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={onClose}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>

              <div className="py-[38px] px-[30px]">
                <div className="mb-[26px] flex flex-col">
                  <label
                    data-cy="modal-add-name-title"
                    className="text-[#111111] font-semibold text-[12px] uppercase"
                  >
                    nama list item
                  </label>

                  <div data-cy="modal-add-name-input" className="w-full">
                    <input
                      value={valueItemName}
                      onChange={onChangeItemName}
                      className="w-full mt-[9px] border border-[#E5E5E5] p-[14px] rounded-[6px] placeholder:text-[#A4A4A4] placeholder:text-[16px] font-regular outline-none focus:border-[#16ABF8]"
                      placeholder="Tambahkan nama list item"
                    />
                  </div>
                </div>

                <div>
                  <label
                    data-cy="modal-add-priority-title"
                    className="text-[#111111] font-semibold text-[12px] uppercase"
                  >
                    priority
                  </label>

                  <div className="mt-[9px] lg:w-[205px]">
                    <DropdownPriority
                      label="Pilih Priority"
                      value={valuePriority}
                      onSelect={(value) => onClickPriority(value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end p-6 space-x-2 border-t border-[#E5E5E5] rounded-b border-[#E5E5E5]">
                <Button
                  dataCy="modal-add-save-button"
                  onClick={onSubmit}
                  disabled={disabledButton}
                >
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  } else {
    return null;
  }
};

export default memo(ModalForm);
