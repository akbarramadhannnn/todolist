import React, { memo } from "react";
import { Icon, Checkbox } from "components/atoms";
import DataPriority from "data/priority";

const CardTodoList = ({
  data,
  onClickEdit,
  onClickDelete,
  onClickCheckList,
}) => {
  return (
    <ul>
      {data.map((d, i) => {
        const dataPriority = DataPriority.find((f) => f.value === d.priority);
        return (
          <li
            data-cy="todo-item"
            key={i}
            className={`bg-[#fff] rounded-[12px] p-[26px] flex justify-between items-center ${
              data.length - 1 === i ? "mb-0" : "mb-[10px]"
            }`}
            style={{
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex items-center">
              <div className="mr-[14px] lg:mr-[20px]">
                <Checkbox
                  active={d.is_active}
                  onClick={() => onClickCheckList(d)}
                />
              </div>

              <div
                data-cy="todo-item-priority-indicator"
                className="w-[5px] h-[5px] lg:w-[9px] lg:h-[9px] mr-[14px] lg:mr-[16px] rounded-full"
                style={{
                  backgroundColor: dataPriority.color,
                }}
              />

              <p
                data-cy="todo-item-title"
                className={`${
                  d.is_active === 1
                    ? "text-[#111111] no-underline"
                    : "text-[#888888] line-through"
                } font-medium text-[14px] lg:text-[18px]`}
              >
                {d.title}
              </p>

              <button data-cy="todo-item-edit-button" className="ml-[19px]" onClick={() => onClickEdit(d)}>
                <Icon
                  name="pencil-grey"
                  className="w-[10px] h-[10px] lg:w-full lg:h-full"
                />
              </button>
            </div>

            <button data-cy="todo-item-delete-button" onClick={() => onClickDelete(d)}>
              <Icon
                name="trash-grey"
                className="w-[14px] h-[14px] lg:w-full lg:h-full"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(CardTodoList);
