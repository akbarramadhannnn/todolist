import React, { memo, useCallback, useEffect, useRef } from "react";
import { Title, Button, Icon } from "components/atoms";
import { DropdownSort } from "components/molecules";

const TopContentArea = ({
  title,
  labelButtonRight,
  iconNameButtonRight,
  onClickButtonRight = () => {},
  isShowBackButton = false,
  onClickBackButton = () => {},
  isShowEditButton = false,
  onClickEditButton = () => {},
  onChangeEdit = () => {},
  disabledEdit = true,
  isShowSortButton = false,
  valueSort = "",
  onClickSortButton = () => {},
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabledEdit]);

  const onBlur = useCallback(() => {
    onClickEditButton();
    inputRef.current.blur();
  }, [onClickEditButton]);

  return (
    <div
      data-cy="top-content-area"
      className={`mb-[37px] lg:mb-[55px]
    ${
      isShowEditButton
        ? "lg:flex lg:justify-between lg:items-center"
        : "flex justify-between items-center"
    }
    `}
    >
      <div className="flex items-center">
        {isShowBackButton ? (
          <button
            className="hidden lg:block mr-[30px]"
            onClick={onClickBackButton}
          >
            <Icon name="chevron-left-black" />
          </button>
        ) : null}

        <div
          className={`flex justify-between w-full  lg:mb-[0px] ${
            isShowEditButton ? "mb-[24px]" : "mb-0"
          }`}
        >
          {!disabledEdit ? (
            <input
              ref={inputRef}
              className="w-full h-full border-b border-[#111] text-[#111] font-bold text-[16px] lg:text-[36px] outline-none"
              value={title}
              onChange={onChangeEdit}
              onBlur={onBlur}
            />
          ) : (
            <Title>{title}</Title>
          )}

          {title && isShowEditButton ? (
            <button className="ml-[30px]" onClick={onClickEditButton}>
              <Icon name="pencil-grey" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-end">
        {isShowSortButton ? (
          <DropdownSort
            value={valueSort}
            onSelect={(value) => onClickSortButton(value)}
          />
        ) : null}

        <Button iconName={iconNameButtonRight} onClick={onClickButtonRight}>
          {labelButtonRight}
        </Button>
      </div>
    </div>
  );
};

export default memo(TopContentArea);
