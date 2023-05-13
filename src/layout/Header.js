import React, { memo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "components/atoms";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackBtn = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  return (
    <header
      data-cy="header"
      className="bg-[#16ABF8] w-full h-[64px] px-[20px] lg:h-[105px] lg:px-[202px] flex items-center"
    >
      {location.pathname !== "/" ? (
        <button className="block lg:hidden mr-[22px]" onClick={handleBackBtn}>
          <Icon name="chevron-left-white" />
        </button>
      ) : null}

      <h1 className="text-white font-bold text-[18px] lg:text-[24px] uppercase">
        To Do List App
      </h1>
    </header>
  );
};

export default memo(Header);
