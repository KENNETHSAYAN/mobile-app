import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./Authentication/reducer/authSlicer";
export default configureStore({
  reducer: {
    auth: authSlicer,
  },
});
