import React, { memo, useState, useCallback, useMemo } from "react";
import { Icon } from "components/atoms";
import DataPriority from "data/priority";

const Select = ({ label, value, onSelect = () => {} }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleShowDropdown = useCallback(() => {
    setIsShowDropdown(!isShowDropdown);
  }, [isShowDropdown]);

  const handleSelectList = useCallback(
    (d) => {
      onSelect(d.value);
    },
    [onSelect]
  );

  const values = useMemo(() => {
    const findData = DataPriority.find((d) => d.value === value);
    return findData;
  }, [value]);

  return (
    <div data-cy="dropdownd-priority" className="relative">
      <button
        data-cy="modal-add-priority-dropdown"
        className={`flex items-center justify-between w-full h-full h-3xl py-[14px] px-[17px] border border-[#E5E5E5] ${
          isShowDropdown
            ? "bg-[#F4F4F4] rounded-tl-[6px] rounded-tr-[6px]"
            : "rounded-[6px] bg-[#fff]"
        }`}
        onClick={handleShowDropdown}
        onBlur={() => {
          setTimeout(() => {
            handleShowDropdown();
          }, 100);
        }}
      >
        {values ? (
          <div className="flex items-center">
            <div
              data-cy="modal-add-priority-item"
              className={`w-[14px] h-[14px] rounded-full mr-[9px]`}
              style={{
                backgroundColor: values.color,
              }}
            />

            <p className="text-[16px] text-[#111111] font-regular">
              {values.label}
            </p>
          </div>
        ) : (
          <p className="text-[16px] text-[#111111] font-regular">{label}</p>
        )}

        <Icon
          name={`chevron-${isShowDropdown ? "up" : "down"}-black`}
          className="h-3"
        />
      </button>

      {isShowDropdown ? (
        <ul className="w-full absolute left-0 h-[200px] overflow-y-auto rounded-bl-[6px] rounded-br-[6px]">
          {DataPriority.map((d, i) => {
            return (
              <li
                key={i}
                className={`bg-[#fff] border-b-[1px] border-l-[1px] border-r-[1px] border-[#E5E5E5] py-[19px] px-[17px] flex items-center justify-between cursor-pointer`}
                onClick={() => handleSelectList(d)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-[14px] h-[14px] rounded-full mr-[9px]`}
                    style={{
                      backgroundColor: d.color,
                    }}
                  />
                  <p className="text-[16px] text-[#111111] font-regular">
                    {d.label}
                  </p>
                </div>

                {value === d.value ? (
                  <Icon name="check-grey" className="w-[20px] h-[20px]" />
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default memo(Select);
