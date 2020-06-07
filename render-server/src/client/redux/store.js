import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "./root-reducer";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const middlewares = [thunk.withExtraArgument(axiosInstance), logger];
const INITIAL_STATE = window.INITIAL_STATE || {};
const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middlewares));

export default store;
