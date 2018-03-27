import {Action, Dispatch} from "redux";
import {store} from "../index";
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";

export const enum ActionType {
  SET_APP_URL = 'SET_APP_URL',

  LOGIN_SUBMIT = 'LOGIN_SUBMIT',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',

  METADATA_REQUESTED = 'METADATA_REQUESTED',
  METADATA_LOADED = 'METADATA_LOADED',

  ENTITY_SELECTED = 'ENTITY_SELECTED',
  ENTITY_VIEWS_LOADED = 'ENTITY_VIEWS_LOADED',
  VIEW_SELECTED = 'VIEW_SELECTED'
}

export interface AppAction extends Action {
  readonly type: ActionType;
}


export interface SetAppUrlAction extends AppAction {
  appUrl: string;
}

export const setAppUrl = (appUrl: string): SetAppUrlAction => ({
  type: ActionType.SET_APP_URL,
  appUrl: appUrl
});


export const loadMetadata = () => (dispatch: Dispatch<Actions>) => {
  dispatch({type: ActionType.METADATA_REQUESTED});
  return store.getState().cubaApp!.loadMetadata().then((entities: MetaClassInfo[]) => {
    const metadata = entities.sort((a, b) => {
      if (a.entityName.toLowerCase() > b.entityName.toLowerCase()) {
        return 1;
      }
      if (a.entityName.toLowerCase() < b.entityName.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    return dispatch({
      metadata,
      type: ActionType.METADATA_LOADED
    });
  });
};

export interface MetadataLoadedAction extends AppAction {
  metadata: MetaClassInfo[];
}


export interface LoginAction extends AppAction {
  login: string;
  password: string;
}

export const login = (username: string, password: string) => (dispatch: Dispatch<Actions>) => {
  dispatch({type: ActionType.LOGIN_SUBMIT});
  return store.getState().cubaApp!.login(username, password)
    .then(() => {
      dispatch(loadMetadata());
      dispatch({type: ActionType.LOGIN_SUCCESS});
    })
    .catch(() => dispatch({type: ActionType.LOGIN_FAILURE}));
};

export const selectEntity = (metaClassInfo: MetaClassInfo) => (dispatch: Dispatch<Actions>) => {
  dispatch<EntitySelectedAction>({
    type: ActionType.ENTITY_SELECTED,
    entity: metaClassInfo
  });
  return store.getState().cubaApp!.loadEntityViews(metaClassInfo.entityName).then((loadedViews) => {
    dispatch<EntityViewsLoadedAction>({
      loadedViews,
      metaClassInfo,
      type: ActionType.ENTITY_VIEWS_LOADED,
    });
  });
};

export const selectView = (view: View): ViewSelectedAction => {
  return {
    type: ActionType.VIEW_SELECTED,
    view: view
  };
};

export interface EntitySelectedAction extends AppAction {
  entity: MetaClassInfo;
}

export interface ViewSelectedAction extends AppAction {
  view: View;
}

export interface EntityViewsLoadedAction extends AppAction {
  loadedViews: View[];
  metaClassInfo: MetaClassInfo;
}

export type Actions = SetAppUrlAction | LoginAction | MetadataLoadedAction | EntitySelectedAction
  | EntityViewsLoadedAction;