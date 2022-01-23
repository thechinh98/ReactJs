export const addUser = user => {
  return {
    type: "/addUser",
    payload: user
  };
};

export const deleteUser = id => {
  return {
    type: "/deleteUser",
    payload: id
  };
};

export const editUser = user => {
  return {
    type: "/editUser",
    payload: user
  };
};

export const searchUser = str => {
  return {
    type: "/searchUser",
    payload: str
  };
};
