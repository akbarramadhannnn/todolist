import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TopContentArea,
  ModalForm,
  CardTodoList,
  ModalDialog,
} from "components/molecules";
import { EmptyState, LoadingSpinner } from "components/atoms";
import {
  ApiGetActivityGroupById,
  ApiUpdateTitleActivityGroupById,
  ApiCreateNewTodo,
  ApiUpdateTodo,
  ApiDeleteTodo,
  ApiCheckListTodo,
} from "api";
import {
  sortAscendingByTitle,
  sortDescendingByTitle,
  sortByUnfinished,
  sortByOldest,
  sortByLatest,
} from "utils/sort";
import DataPriority from "data/priority";

const ListItem = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isEdit, setIsEdit] = useState(true);
  const [title, setTitle] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [todosId, setTodosId] = useState("");
  const [todosActive, setTodosActive] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [form, setForm] = useState({
    disabled: true,
    itemName: {
      value: "",
    },
    priority: {
      value: "very-high",
    },
  });
  const [modalDialog, setModalDialog] = useState({
    isOpen: false,
    title: "",
    desc: "",
    disabledButton: false,
  });
  const [valueSort, setValueSort] = useState("latest");

  useEffect(() => {
    ApiGetActivityGroupById(params.id).then((response) => {
      if (!response.response?.status) {
        setTitle(response.title);
        setTodoItems(response.todo_items);
      }

      setIsLoading(false);
    });
  }, [params.id]);

  useEffect(() => {
    if (form.itemName.value !== "" && form.priority.value !== "") {
      setForm((oldState) => ({
        ...oldState,
        disabled: false,
      }));
    } else {
      setForm((oldState) => ({
        ...oldState,
        disabled: true,
      }));
    }
  }, [form.itemName.value, form.priority.value]);

  const handleAddTodoList = useCallback(() => {
    setIsModal(true);
  }, []);

  const handleEditTitle = useCallback(() => {
    ApiUpdateTitleActivityGroupById(params.id, title).then((response) => {
      setTitle(response.title);
    });
    setIsEdit(!isEdit);
  }, [isEdit, params.id, title]);

  const handleChangeEditTitle = useCallback((e) => {
    const { value } = e.target;
    setTitle(value);
  }, []);

  const handleCloseModal = useCallback(() => {
    setForm((oldState) => ({
      ...oldState,
      itemName: {
        ...oldState.itemName,
        value: "",
      },
      priority: {
        ...oldState.priority,
        value: "very-high",
      },
      disabled: true,
    }));
    setIsModal(false);
    setTodosId("");
    setTodosActive("");
  }, []);

  const handleChangeItemName = useCallback((e) => {
    const { value } = e.target;
    setForm((oldState) => ({
      ...oldState,
      itemName: {
        ...oldState.itemName,
        value: value,
      },
    }));
  }, []);

  const handleSubmitActivity = useCallback(() => {
    const { itemName, priority } = form;
    setForm((oldState) => ({
      ...oldState,
      disabled: true,
    }));

    if (todosId !== "") {
      ApiUpdateTodo(todosId, todosActive, itemName.value, priority.value).then(
        (response) => {
          const state = [...todoItems];
          const index = state.map((d) => d.id).indexOf(todosId);
          state[index] = {
            activity_group_id: response.activity_group_id,
            id: response.id,
            is_active: response.is_active,
            priority: response.priority,
            title: response.title,
          };
          setTodoItems(state);
          handleCloseModal();
          setValueSort("latest");
        }
      );
    } else {
      ApiCreateNewTodo(params.id, itemName.value, priority.value).then(
        (response) => {
          ApiGetActivityGroupById(params.id).then((response) => {
            setTodoItems(response.todo_items);
            handleCloseModal();
            setValueSort("latest");
          });
        }
      );
    }
  }, [form, params.id, handleCloseModal, todosId, todosActive, todoItems]);

  const handleChangePriority = useCallback((value) => {
    setForm((oldState) => ({
      ...oldState,
      priority: {
        ...oldState.priority,
        value: value,
      },
    }));
  }, []);

  const handleBackBtn = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  const handleEditTodo = useCallback((data) => {
    setIsModal(true);
    setForm((oldState) => ({
      ...oldState,
      itemName: {
        ...oldState.itemName,
        value: data.title,
      },
      priority: {
        ...oldState.priority,
        value: data.priority,
      },
    }));
    setTodosId(data.id);
    setTodosActive(data.is_active);
  }, []);

  const handleCloseModalDialog = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: false,
      title: "",
      desc: "",
      disabledButton: false,
    }));
    setTodosId("");
  }, []);

  const handleDeleteTodo = useCallback((data) => {
    setTodosId(data.id);
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: true,
      title: data.title,
      desc: "Apakah anda yakin menghapus List Item",
    }));
  }, []);

  const handleSubmitDeleteTodo = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      disabledButton: true,
    }));
    ApiDeleteTodo(todosId).then((response) => {
      const state = [...todoItems];
      const index = state.map((d) => d.id).indexOf(todosId);
      state.splice(index, 1);
      setTodoItems(state);
      handleCloseModalDialog();
    });
  }, [todosId, handleCloseModalDialog, todoItems]);

  const handleCheklistTodo = useCallback(
    (data) => {
      const isActive = data.is_active === 1 ? 0 : 1;
      ApiCheckListTodo(data.id, isActive, data.priority).then((response) => {
        const state = [...todoItems];
        const index = state.map((d) => d.id).indexOf(data.id);
        state[index].is_active = isActive;
        setTodoItems(state);
      });
    },
    [todoItems]
  );

  const handleSortData = useCallback((value) => {
    setValueSort(value);
  }, []);

  const listDataTodod = useMemo(() => {
    const newObj = {
      latest: (data) => {
        return sortByLatest(data);
      },
      oldest: (data) => {
        return sortByOldest(data);
      },
      az: (data) => {
        return sortAscendingByTitle(data);
      },
      za: (data) => {
        return sortDescendingByTitle(data);
      },
      unfinished: (data) => {
        return sortByUnfinished(data);
      },
    };
    return newObj[valueSort](todoItems);
  }, [valueSort, todoItems]);

  return (
    <div className="pb-[60px]">
      {isLoading ? <LoadingSpinner /> : null}

      {!isLoading ? (
        <TopContentArea
          title={title}
          labelButtonRight="Tambah"
          iconNameButtonRight="plus-white"
          isShowBackButton={true}
          isShowEditButton={true}
          onClickEditButton={handleEditTitle}
          onClickBackButton={handleBackBtn}
          onClickButtonRight={handleAddTodoList}
          disabledEdit={isEdit}
          onChangeEdit={handleChangeEditTitle}
          isShowSortButton={!todoItems.length > 0 ? false : true}
          valueSort={valueSort}
          onClickSortButton={(value) => handleSortData(value)}
          dataCyTitle="todo-title"
          dataCyBackButton="todo-back-button"
          dataCyEditButton="todo-title-edit-button"
          dataCyButtonRight="todo-add-button"
          dataCyButtonSort="todo-sort-button"
        />
      ) : null}

      {!isLoading && !todoItems.length > 0 ? (
        <EmptyState type={2} dataCy="todo-empty-state" />
      ) : null}

      {!isLoading && todoItems.length > 0 ? (
        <ul>
          {todoItems.map((d, i) => {
            const dataPriority = DataPriority.find(
              (f) => f.value === d.priority
            );
            return (
              <CardTodoList
                key={i}
                data={listDataTodod}
                isActive={d.is_active}
                title={d.title}
                color={dataPriority.color}
                lastIndex={todoItems.length - 1 === i}
                onClickEdit={() => handleEditTodo(d)}
                onClickDelete={() => handleDeleteTodo(d)}
                onClickCheckList={() => handleCheklistTodo(d)}
              />
            );
          })}
        </ul>
      ) : null}

      <ModalForm
        open={isModal}
        onClose={handleCloseModal}
        valueItemName={form.itemName.value}
        onChangeItemName={handleChangeItemName}
        disabledButton={form.disabled}
        onSubmit={handleSubmitActivity}
        valuePriority={form.priority.value}
        onClickPriority={(value) => handleChangePriority(value)}
      />

      <ModalDialog
        open={modalDialog.isOpen}
        desc={modalDialog.desc}
        title={modalDialog.title}
        onSubmitCancel={handleCloseModalDialog}
        onSubmitDelete={handleSubmitDeleteTodo}
        disabledButton={modalDialog.disabledButton}
      />

      <div data-cy="modal-add"></div>
      <div data-cy="modal-information"></div>
      <div data-cy="modal-delete"></div>
    </div>
  );
};

export default ListItem;
