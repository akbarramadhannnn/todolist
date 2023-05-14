import React, { memo, useState, useCallback } from "react";
import { Icon } from "components/atoms";
import DataSort from "data/sort";

const Lists = memo(
  ({ isLast, onSelect = () => {}, value, listValue, label, iconName }) => {
    return (
      <li
        data-cy="sort-selection"
        className={`py-[10px] px-[14px] lg:py-[14px] lg:px-[22px] cursor-pointer ${
          isLast ? "" : "border-b border-[#E5E5E5]"
        }`}
        onClick={onSelect}
      >
        <div
          className="flex justify-between items-center"
          data-cy={value === listValue ? "sort-selection-selected" : "false"}
        >
          <div className="flex items-center">
            <div className="mr-[13px] lg:mr-[19px]">
              <Icon name={iconName} />
            </div>

            <p className="text-[#4A4A4A] text-[11px] lg:text-[16px] font-regular">
              {label}
            </p>
          </div>

          {value === listValue ? (
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
  }
);

const DropdownSort = ({ value, onSelect = () => {}, dataCyButton }) => {
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
    <div className={`relative`}>
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

      {isShowDropdown ? (
        <ul
          className={`absolute w-[160px] lg:w-[235px] h-auto bg-white border border-[#E5E5E5] rounded-[6px] `}
        >
          {DataSort.map((d, i) => {
            return (
              <Lists
                key={i}
                isLast={DataSort.length - 1 === i}
                onSelect={() => handleSelect(d)}
                value={value}
                listValue={d.value}
                label={d.label}
                iconName={d.iconName}
              />
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default memo(DropdownSort);
