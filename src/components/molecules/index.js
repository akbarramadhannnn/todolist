import { lazy } from 'react'
// import TopContentArea from "./TopContentArea";
// import CardActivity from "./CardActivity";
// import ModalForm from "./ModalForm";
// import ModalDialog from "./ModalDialog";
// import DropdownPriority from "./DropdownPriority";
// import CardTodoList from "./CardTodoList";
// import ModalAlert from "./ModalAlert";
// import DropdownSort from "./DropdownSort";

const TopContentArea = lazy(() => import('./TopContentArea'));
const CardActivity = lazy(() => import('./CardActivity'));
const ModalForm = lazy(() => import('./ModalForm'));
const ModalDialog = lazy(() => import('./ModalDialog'));
const DropdownPriority = lazy(() => import('./DropdownPriority'));
const CardTodoList = lazy(() => import('./CardTodoList'));
const ModalAlert = lazy(() => import('./ModalAlert'));
const DropdownSort = lazy(() => import('./DropdownSort'));

export {
  TopContentArea,
  CardActivity,
  ModalForm,
  DropdownPriority,
  CardTodoList,
  ModalDialog,
  ModalAlert,
  DropdownSort,
};
