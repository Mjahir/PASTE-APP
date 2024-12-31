import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
    pastes: localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem("pastes"))
        : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      const existingPaste = state.pastes.find(
        p => p._id === paste._id
      );
      if (existingPaste) { 
        toast("Paste already exists");
      }
      else {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast ("Paste added successfully");
      }
   
      
      
    },
    updateToPastes: (state,action) => {

      const pastes = action.payload;
      const index = state.pastes.findIndex(paste => paste._id === pastes._id);

      if (index >= 0) { 
        state.pastes[index] = pastes;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste updated successfully");
      }
      
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      
      localStorage.removeItem("pastes");
      },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      console.log(pasteId);
      const index = state.pastes.findIndex(paste => paste._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast("Paste removed successfully");
      }
    },
  },
})


export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer