import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopContentArea, ModalDialog, ModalAlert } from "components/molecules";
import { EmptyState, LoadingSpinner } from "components/atoms";
import { CardActivity } from "components/molecules";
import {
  ApiGetActivityGroup,
  ApiCreateActivityGroup,
  ApiDeleteActivityGroupById,
} from "api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [listActivity, setListActivity] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activityId, setActivityId] = useState("");
  const [modalDialog, setModalDialog] = useState({
    isOpen: false,
    title: "",
    desc: "",
    disabledButton: false,
  });
  const [modalAlert, setModalAlert] = useState({
    isOpen: false,
    desc: "",
  });

  useEffect(() => {
    ApiGetActivityGroup().then((response) => {
      setListActivity(response);
      setIsLoading(false);
    });
  }, []);

  const handleDetailCard = useCallback(
    (data) => {
      navigate(`/list-activity/${data.id}`);
    },
    [navigate]
  );

  const handleDeleteCard = useCallback((data) => {
    setActivityId(data.id);
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: true,
      title: data.title,
      desc: "Apakah anda yakin menghapus activity",
    }));
  }, []);

  const handleAddActivity = useCallback(() => {
    ApiCreateActivityGroup().then((response) => {
      setIsLoading(true);
      ApiGetActivityGroup().then((response) => {
        setListActivity(response);
        setIsLoading(false);
      });
    });
  }, []);

  const handleCloseModalDialog = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: false,
      title: "",
      desc: "",
      disabledButton: false,
    }));
    setActivityId("");
  }, []);

  const handleCloseModalAlert = useCallback(() => {
    setModalAlert((oldState) => ({
      ...oldState,
      isOpen: false,
      desc: "",
    }));
  }, []);

  const handleSubmitDeleteActivity = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      disabledButton: true,
    }));
    ApiDeleteActivityGroupById(activityId).then((response) => {
      const state = [...listActivity.data];
      const index = state.map((d) => d.id).indexOf(activityId);
      state.splice(index, 1);
      setListActivity((oldSatte) => ({
        ...oldSatte,
        data: state,
      }));
      handleCloseModalDialog();
      setModalAlert((oldState) => ({
        ...oldState,
        isOpen: true,
        desc: "Activity berhasil dihapus",
      }));
    });
  }, [activityId, handleCloseModalDialog, listActivity]);

  return (
    <div className="pb-[60px]">
      <TopContentArea
        title="Activity"
        labelButtonRight="Tambah"
        dataCyButtonRight="activity-add-button"
        iconNameButtonRight="plus-white"
        onClickButtonRight={handleAddActivity}
        dataCyTitle="activity-title"
      />

      {isLoading ? <LoadingSpinner /> : null}

      {!isLoading && !listActivity.data.length > 0 ? (
        <EmptyState
          type={1}
          dataCy="activity-empty-state"
          onClick={handleAddActivity}
        />
      ) : null}

      {!isLoading && listActivity.data.length > 0 ? (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {listActivity.data.map((d, i) => {
            return (
              <CardActivity
                key={i}
                title={d.title}
                createdAt={d.created_at}
                onClickCard={() => handleDetailCard(d)}
                onClickDelete={() => handleDeleteCard(d)}
              />
            );
          })}
        </ul>
      ) : null}

      <ModalDialog
        open={modalDialog.isOpen}
        desc={modalDialog.desc}
        title={modalDialog.title}
        onSubmitCancel={handleCloseModalDialog}
        onSubmitDelete={handleSubmitDeleteActivity}
        disabledButton={modalDialog.disabledButton}
      />

      <ModalAlert
        open={modalAlert.isOpen}
        desc={modalAlert.desc}
        onClose={handleCloseModalAlert}
      />

      <div data-cy="modal-delete"></div>
      <div data-cy="modal-information"></div>
    </div>
  );
};

export default Dashboard;
