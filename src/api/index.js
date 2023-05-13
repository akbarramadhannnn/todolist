import axios from "lib/axios";

export const ApiGetActivityGroup = async () => {
  const response = await axios.get(
    `/activity-groups?email=${process.env.REACT_APP_EMAIL}`
  );
  return response;
};

export const ApiCreateActivityGroup = async () => {
  const response = await axios.post(`/activity-groups`, {
    title: "New Activity",
    email: process.env.REACT_APP_EMAIL,
  });
  return response;
};

export const ApiGetActivityGroupById = async (id) => {
  const response = await axios.get(`/activity-groups/${id}`);
  return response;
};

export const ApiUpdateTitleActivityGroupById = async (id, title) => {
  const response = await axios.patch(`/activity-groups/${id}`, {
    title,
  });
  return response;
};

export const ApiDeleteActivityGroupById = async (id) => {
  const response = await axios.delete(`/activity-groups/${id}`);
  return response;
};

export const ApiCreateNewTodo = async (id, title, priority) => {
  const response = await axios.post(`/todo-items`, {
    activity_group_id: id,
    title: title,
    priority: priority,
  });
  return response;
};

export const ApiUpdateTodo = async (id, isActive, title, priority) => {
  const response = await axios.patch(`/todo-items/${id}`, {
    is_active: isActive,
    title: title,
    priority: priority,
  });
  return response;
};

export const ApiDeleteTodo = async (id) => {
  const response = await axios.delete(`/todo-items/${id}`);
  return response;
};

export const ApiCheckListTodo = async (id, isActive, priority) => {
  const response = await axios.patch(`/todo-items/${id}`, {
    is_active: isActive,
    priority: priority,
  });
  return response;
};
