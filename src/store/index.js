import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
//const store = createStore(reducer, enhancer);
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};
const store = createStore(
    reducer, 
    persistedState,
    enhancer
  )
 store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

  
export default store;
