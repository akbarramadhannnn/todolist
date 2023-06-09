import React, { useCallback, useEffect, useState, Suspense } from "react";
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

  const handleGetAllACtivity = useCallback(() => {
    ApiGetActivityGroup().then((response) => {
      setListActivity(response);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading) {
      handleGetAllACtivity();
    }
  }, [isLoading, handleGetAllACtivity]);

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
      setIsLoading(true);

      handleCloseModalDialog();
      setModalAlert((oldState) => ({
        ...oldState,
        isOpen: true,
        desc: "Activity berhasil dihapus",
      }));
    });
  }, [activityId, handleCloseModalDialog]);

  return (
    <div className="pb-[60px]">
      <Suspense>
        <TopContentArea
          title="Activity"
          labelButtonRight="Tambah"
          dataCyButtonRight="activity-add-button"
          iconNameButtonRight="plus-white"
          onClickButtonRight={handleAddActivity}
          dataCyTitle="activity-title"
        />
      </Suspense>

      {isLoading ? <LoadingSpinner /> : null}

      {!isLoading && !listActivity.data.length > 0 ? (
        <Suspense>
          <EmptyState
            type={1}
            dataCy="activity-empty-state"
            onClick={handleAddActivity}
          />
        </Suspense>
      ) : null}

      {!isLoading && listActivity.data.length > 0 ? (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {listActivity.data.map((d, i) => {
            return (
              <Suspense key={i}>
                <CardActivity
                  title={d.title}
                  createdAt={d.created_at}
                  onClickCard={() => handleDetailCard(d)}
                  onClickDelete={() => handleDeleteCard(d)}
                />
              </Suspense>
            );
          })}
        </ul>
      ) : null}

      <Suspense>
        <ModalDialog
          open={modalDialog.isOpen}
          desc={modalDialog.desc}
          title={modalDialog.title}
          onSubmitCancel={handleCloseModalDialog}
          onSubmitDelete={handleSubmitDeleteActivity}
          disabledButton={modalDialog.disabledButton}
        />
      </Suspense>

      <Suspense>
        <ModalAlert
          open={modalAlert.isOpen}
          desc={modalAlert.desc}
          onClose={handleCloseModalAlert}
        />
      </Suspense>

      <div data-cy="modal-delete"></div>
      <div data-cy="modal-information"></div>
    </div>
  );
};

export default Dashboard;
