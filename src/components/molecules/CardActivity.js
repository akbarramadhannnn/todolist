import React, { memo } from "react";
import { Icon } from "components/atoms";
import moment from "lib/moment";

const CardActivity = ({
  title,
  createdAt,
  onClickCard = () => {},
  onClickDelete = () => {},
}) => {
  return (
    <li
      className="h-[150px] lg:h-[234px] py-[13px] px-[17px] lg:py-[22px] lg:px-[27px] rounded-[12px]"
      style={{
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        data-cy="activity-item"
        className="h-full flex flex-col justify-between"
      >
        <div className="h-full cursor-pointer" onClick={onClickCard}>
          <h2
            data-cy="activity-item-title"
            className="font-bold text-[#111111] text-[14px] lg:text-[18px]"
          >
            {title}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <p
            data-cy="activity-item-date"
            className="font-regular text-[#888888] text-[10px] lg:text-[14px]"
          >
            {moment(createdAt).format("D MMMM YYYY")}
          </p>

          <div className="relative">
            <button onClick={onClickDelete}>
              <Icon
                dataCy="activity-item-delete-button"
                name="trash-grey"
                className="w-[8px] h-[9px] lg:w-full lg:h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default memo(CardActivity);
