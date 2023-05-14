import React, { memo } from "react";
import { Icon, Checkbox } from "components/atoms";

const CardTodoList = ({
  isActive,
  title,
  color,
  lastIndex,
  onClickEdit,
  onClickDelete,
  onClickCheckList,
}) => {
  return (
    <li
      data-cy="todo-item"
      className={`bg-[#fff] rounded-[12px] p-[26px] flex justify-between items-center ${
        lastIndex ? "mb-0" : "mb-[10px]"
      }`}
      style={{
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex items-center">
        <div className="mr-[14px] lg:mr-[20px]">
          <Checkbox active={isActive} onClick={onClickCheckList} />
        </div>

        <div
          data-cy="todo-item-priority-indicator"
          className="w-[5px] h-[5px] lg:w-[9px] lg:h-[9px] mr-[14px] lg:mr-[16px] rounded-full"
          style={{
            backgroundColor: color,
          }}
        />

        <p
          data-cy="todo-item-title"
          className={`${
            isActive === 1
              ? "text-[#111111] no-underline"
              : "text-[#888888] line-through"
          } font-medium text-[14px] lg:text-[18px]`}
        >
          {title}
        </p>

        <button
          data-cy="todo-item-edit-button"
          className="ml-[19px]"
          onClick={onClickEdit}
        >
          <Icon
            name="pencil-grey"
            className="w-[10px] h-[10px] lg:w-full lg:h-full"
          />
        </button>
      </div>

      <button data-cy="todo-item-delete-button" onClick={onClickDelete}>
        <Icon
          name="trash-grey"
          className="w-[14px] h-[14px] lg:w-full lg:h-full"
        />
      </button>
    </li>
  );
};

export default memo(CardTodoList);
