import { lazy } from 'react'
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
