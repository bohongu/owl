import { createSlice } from '@reduxjs/toolkit';

const initialState = { showModal: false };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal(state) {
      state.showModal = true;
    },
    setHideModal(state) {
      state.showModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
