import React, { memo, useState, useCallback } from "react";
import { Icon } from "components/atoms";
import DataSort from "data/sort";

const DropdownSort = ({ value, onSelect = () => {}, dataCyButton, isShow }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleShowDropdown = useCallback(() => {
    setIsShowDropdown(!isShowDropdown);
  }, [isShowDropdown]);

  const handleSelect = useCallback(
    (d) => {
      onSelect(d.value);
      handleShowDropdown();
    },
    [handleShowDropdown, onSelect]
  );

  return (
    <div className={`relative ${isShow ? "block" : "hidden"}`}>
      <button
        data-cy={dataCyButton}
        className="mr-[15px] lg:mr-[30px] w-[45px] h-[45px] lg:w-[54px] lg:h-[54px] border rounded-full flex items-center justify-center"
        onClick={handleShowDropdown}
      >
        <Icon
          name="arows-sort-grey"
          className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
        />
      </button>

      <ul
        className={`absolute w-[160px] lg:w-[235px] h-auto bg-white border border-[#E5E5E5] rounded-[6px] ${
          isShowDropdown ? "block" : "hidden"
        }`}
      >
        {DataSort.map((d, i) => {
          return (
            <li
              data-cy="sort-selection"
              key={i}
              className={`py-[10px] px-[14px] lg:py-[14px] lg:px-[22px] cursor-pointer ${
                DataSort.length - 1 === i ? "" : "border-b border-[#E5E5E5]"
              }`}
              onClick={() => handleSelect(d)}
            >
              <div
                className="flex justify-between items-center"
                data-cy={
                  value === d.value ? "sort-selection-selected" : "false"
                }
              >
                <div className="flex items-center">
                  <div className="mr-[13px] lg:mr-[19px]">
                    <Icon name={d.iconName} />
                  </div>

                  <p className="text-[#4A4A4A] text-[11px] lg:text-[16px] font-regular">
                    {d.label}
                  </p>
                </div>

                {value === d.value ? (
                  <div>
                    <Icon
                      name={"check-grey"}
                      className="w-[12px] h-[12px] lg:w-full lg:h-full"
                    />
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(DropdownSort);
