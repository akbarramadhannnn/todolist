import React, { memo } from "react";
import { Icon } from "components/atoms";
import moment from "lib/moment";

const CardActivity = ({
  data = [],
  onClickCard = () => {},
  onClickDelete = () => {},
}) => {
  return (
    <ul
      data-cy="activity-item"
      className="grid grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {data.map((d, i) => {
        return (
          <li
            key={i}
            className="h-[150px] lg:h-[234px] py-[13px] px-[17px] lg:py-[22px] lg:px-[27px] rounded-[12px] flex flex-col justify-between"
            style={{
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className="h-full cursor-pointer"
              onClick={() => onClickCard(d)}
            >
              <h2 data-cy="activity-item-title" className="font-bold text-[#111111] text-[14px] lg:text-[18px]">
                {d.title}
              </h2>
            </div>

            <div className="flex justify-between items-center">
              <p
                data-cy="activity-item-date"
                className="font-regular text-[#888888] text-[10px] lg:text-[14px]"
              >
                {moment(d.created_at).format("D MMMM YYYY")}
              </p>

              <div className="relative">
                <button
                  data-cy="activity-item-delete-button"
                  onClick={() => onClickDelete(d)}
                >
                  <Icon
                    name="trash-grey"
                    className="w-[8px] h-[9px] lg:w-full lg:h-full"
                  />
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(CardActivity);
