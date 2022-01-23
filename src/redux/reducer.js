const initState = {
  textSearch: "",
  userList: []
};

const rootReducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "/addUser":
      console.log('addUser');
      return {
        ...state,
        userList: [action.payload, ...state.userList]
      };

    case "/deleteUser":
      console.log(action.payload);
      let newList = state.userList.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        userList: newList
      };

    case "/editUser":
      let newListUpdate = state.userList.map(
        emp =>
          emp.id === action.payload.id
            ? {
              ...emp,
              userID: action.payload.userID,
              name: action.payload.name,
              age: action.payload.age,
              hometown: action.payload.hometown,
              occupation: action.payload.occupation
            }
            : emp
      );
      return {
        ...state,
        userList: newListUpdate
      };

    case "/searchUser":
      return {
        ...state,
        textSearch: action.payload.str
      };

    default:
      return state;
  }
};

export default rootReducer;
