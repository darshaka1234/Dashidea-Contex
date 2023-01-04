import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "darsha", email: "darshaka@gmail.com" },
  { id: 2, name: "banuka", email: "banuka@gmail.com" },
  { id: 3, name: "taraka", email: "taraka@gmail.com" },
];

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const curUser = state.find((user) => user.id === id);
      if (curUser) {
        curUser.name = name;
        curUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const curUser = state.find((user) => user.id === id);
      if (curUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
