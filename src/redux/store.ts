import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {appUrl, cubaApp, entity, entityViews, loggedIn, metadata} from "./reducers";
import thunk from "redux-thunk";
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";

export interface AppState {
  loggedIn: boolean;
  cubaApp?: CubaApp; // todo avoid
  appUrl?: string;
  metadata: MetaClassInfo[];
  entity?: MetaClassInfo;
  entityViews?: View[];
}

export function initStore(): Store<AppState> {
  return createStore<AppState>(
    combineReducers({
      appUrl,
      cubaApp,
      loggedIn,
      metadata,
      entity,
      entityViews
    }),
    applyMiddleware(thunk)
  );
}