import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../client/redux/root-reducer";
import axios from "axios";
const API_SERVER = "http://localhost:5000";

export default (req) =>{
  const axiosInstance = axios.create({
    baseURL : API_SERVER,
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  const middlewares = [thunk.withExtraArgument(axiosInstance)];

  return createStore(rootReducer, applyMiddleware(...middlewares));
}
