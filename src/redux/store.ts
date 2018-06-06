import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {appUrl, cubaApp, entity, entityViews, generation, loggedIn, metadata} from "./reducers";
import thunk from "redux-thunk";
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";
import {GenerationGraph} from "../generation";

export interface AppState {
  loggedIn: boolean;
  cubaApp?: CubaApp;
  appUrl?: string;
  metadata: MetaClassInfo[];
  entityViews?: View[];
  entity?: MetaClassInfo;
  view?: View;
  generation: GenerationState;
}

export interface GenerationState {
  graph?: GenerationGraph;
}

export function initStore(): Store<AppState> {
  return createStore<AppState>(
    combineReducers({
      appUrl,
      cubaApp,
      loggedIn,
      metadata,
      entity,
      entityViews,
      generation,
    }),
    applyMiddleware(thunk)
  );
}