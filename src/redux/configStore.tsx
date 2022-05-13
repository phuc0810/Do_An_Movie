import { useDispatch } from "react-redux";
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
  AnyAction,
} from "redux";
import thunk, {
  ThunkDispatch as ThunkDispatchM,
  ThunkAction as ThunkActionM,
} from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";

const rootReducer = combineReducers({
  CarouselReducer: CarouselReducer,
  QuanLyPhimReducer: QuanLyPhimReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Cấu hình thunk
const middleWare = applyMiddleware(thunk);

const customCompose = compose(
  middleWare,
  composeEnhancers(applyMiddleware(thunk))
);

export const store = createStore(rootReducer, customCompose);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type ThunkDispatch = ThunkDispatchM<RootState, unknown, AnyAction>;
export type ThunkAction = ThunkActionM<void, RootState, unknown, AnyAction>;

export const useDispatchThunk = () => useDispatch<ThunkDispatch>();
