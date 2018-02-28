import {AnyAction, createStore, Store} from "redux";
import {MetaClassInfo} from "@cuba-platform/rest/dist-node/model";
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";

export interface AppState {
  loggedIn: boolean;
  appUrl?: string;
  cubaApp?: CubaApp;
  metadata?: MetaClassInfo[];
}

const initialState: AppState = {
  loggedIn: false,
  appUrl: 'http://localhost:8080/app/rest/'
};

export function initStore(): Store<AppState> {
  return createStore<AppState>(mainReducer, initialState);
}

function mainReducer(state: AppState, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}