import React, { memo, useMemo } from "react";
import ChevronLeftBlackIcon from "assets/svg/chevron-left-black.svg";
import PencilGreyIcon from "assets/svg/pencil-grey.svg";
import PlusWhiteIcon from "assets/svg/plus-whites.svg";
import TrashGreyIcon from "assets/svg/trash-grey.svg";
import ArrowsSortGreyIcon from "assets/svg/arows-sort-grey.svg";
import CheckGreyIcon from "assets/svg/check-grey.svg";
import CheckWhiteIcon from "assets/svg/check-white.svg";
import ChevronDownBlackIcon from "assets/svg/chevron-down-black.svg";
import ChevronUpBlackIcon from "assets/svg/chevron-up-black.svg";
import DangerRedIcon from "assets/svg/danger-red.svg";
import ChevronLeftWhiteIcon from "assets/svg/chevron-left-white.svg";
import InformationGreenIcon from "assets/svg/information-green.svg";
import CloseGreyIcon from "assets/svg/close-grey.svg";
import SortLatestIcon from "assets/svg/sort-latest.svg";
import SortOldestIcon from "assets/svg/sort-oldest.svg";
import SortAzIcon from "assets/svg/sort-az.svg";
import SortZaIcon from "assets/svg/sort-za.svg";
import SortUnfinishedIcon from "assets/svg/sort-unfinished.svg";

const Icon = ({ name, className = "w-full h-full", dataCy }) => {
  const generateIcon = useMemo(() => {
    let icon;
    if (name === "chevron-left-black") {
      icon = ChevronLeftBlackIcon;
    } else if (name === "pencil-grey") {
      icon = PencilGreyIcon;
    } else if (name === "trash-grey") {
      icon = TrashGreyIcon;
    } else if (name === "plus-white") {
      icon = PlusWhiteIcon;
    } else if (name === "arows-sort-grey") {
      icon = ArrowsSortGreyIcon;
    } else if (name === "check-grey") {
      icon = CheckGreyIcon;
    } else if (name === "check-white") {
      icon = CheckWhiteIcon;
    } else if (name === "chevron-down-black") {
      icon = ChevronDownBlackIcon;
    } else if (name === "chevron-up-black") {
      icon = ChevronUpBlackIcon;
    } else if (name === "danger-red") {
      icon = DangerRedIcon;
    } else if (name === "chevron-left-white") {
      icon = ChevronLeftWhiteIcon;
    } else if (name === "information-green") {
      icon = InformationGreenIcon;
    } else if (name === "close-grey") {
      icon = CloseGreyIcon;
    } else if (name === "sort-latest") {
      icon = SortLatestIcon;
    } else if (name === "sort-oldest") {
      icon = SortOldestIcon;
    } else if (name === "sort-az") {
      icon = SortAzIcon;
    } else if (name === "sort-za") {
      icon = SortZaIcon;
    } else if (name === "sort-unfinished") {
      icon = SortUnfinishedIcon;
    }

    return icon;
  }, [name]);

  return <img data-cy={dataCy} src={generateIcon} alt={name} className={className} />;
};

export default memo(Icon);
