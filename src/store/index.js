import { configureStore } from "@reduxjs/toolkit";
import hotels from "./states/hotels_state";

export default configureStore({
  reducer: {
    hotels
  }
})

