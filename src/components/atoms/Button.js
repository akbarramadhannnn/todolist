import React, { memo, useMemo } from "react";
import { Icon } from "components/atoms";

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick = () => {},
  iconName,
}) => {
  
  const generateStyles = useMemo(() => {
    let className = "";
    if (variant === "primary") {
      className = "bg-[#16ABF8] text-white";
    } else if (variant === "default") {
      className = "bg-[#F4F4F4] text-[#4A4A4A]";
    } else if (variant === "danger") {
      className = "bg-[#ED4C5C] text-white";
    }

    return className;
  }, [variant]);

  return (
    <button
      data-cy="button"
      disabled={disabled}
      onClick={onClick}
      className={`${generateStyles} disabled:opacity-[0.2] disabled:cursor-not-allowed py-[12px] px-[20px] lg:py-[13px] lg:px-[39px] rounded-full font-semibold text-[12px] lg:text-[18px] flex items-center`}
    >
      {iconName ? (
        <div className="mr-[8px] lg:mr-[11px]">
          <Icon name={iconName} className="w-[10px] h-[10px] lg:w-full lg:h-full" />
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default memo(Button);
