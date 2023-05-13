import React, { memo, useMemo } from "react";
import EmptyState1 from "assets/images/empty-state-1.png";
import EmptyState2 from "assets/images/empty-state-2.png";

const EmptyState = ({ type = 1, dataCy }) => {
  const generateImage = useMemo(() => {
    let img;
    if (type === 1) {
      img = EmptyState1;
    } else {
      img = EmptyState2;
    }

    return img;
  }, [type]);

  return (
    <div
      data-cy={dataCy}
      className="flex justify-center items-center h-[400px] lg:h-full"
    >
      <img
        className="lg:w-[767px] lg:h-[490px]"
        src={generateImage}
        alt="empty-state"
      />
    </div>
  );
};

export default memo(EmptyState);
