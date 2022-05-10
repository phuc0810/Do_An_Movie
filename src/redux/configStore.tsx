import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";

const rootReducer = combineReducers({
  CarouselReducer: CarouselReducer,
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

export type RootState = ReturnType<typeof rootReducer>
