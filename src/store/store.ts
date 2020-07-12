import { createStore, combineReducers } from "redux";
import portfolioReducer from "./reducers/portfolioReducer";
import * as Actions from '../store/constants/app';

const appReducer = combineReducers({ portfolio: portfolioReducer });

const rootReducer = (state: any, action: any) => {
    if (action.type === Actions.actions.CLEAR_APP_DATA) {   
        state = undefined
      }
    return appReducer(state, action)
}

export const store = createStore(rootReducer, undefined);
