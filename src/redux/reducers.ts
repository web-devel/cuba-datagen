import {
  Actions,
  ActionType,
  EntitySelectedAction,
  EntityViewsLoadedAction,
  MetadataLoadedAction,
  SetAppUrlAction
} from "./actions";
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";

export const appUrl = (urlState: string | null = null, action: Actions): string | null => {
  if (action.type === ActionType.SET_APP_URL) {
    return (action as SetAppUrlAction).appUrl;
  }
  return urlState;
};

export const cubaApp = (app: CubaApp | null = null, action: Actions): CubaApp | null => {
  if (action.type === ActionType.SET_APP_URL) {
    return new CubaApp("cuba-datagen", (action as SetAppUrlAction).appUrl);
  }
  return app;
};

export const loggedIn = (loggedInVal: boolean = false, action: Actions): boolean => {
  if (action.type === ActionType.LOGIN_SUCCESS) {
    return true;
  }
  return loggedInVal;
};

export const metadata = (metadataState: MetaClassInfo[] = [], action: Actions): MetaClassInfo[] => {
  if (action.type === ActionType.METADATA_LOADED) {
    return (action as MetadataLoadedAction).metadata;
  }
  return metadataState;
};

export const entity = (entityState: MetaClassInfo | null = null, action: Actions): MetaClassInfo | null => {
  if (action.type === ActionType.ENTITY_SELECTED) {
    return (action as EntitySelectedAction).entity;
  }
  return entityState;
};

export const entityViews = (entityViewsState: View[] | null = null, action: Actions): View[] | null => {
  if (action.type === ActionType.ENTITY_VIEWS_LOADED) {
    return (action as EntityViewsLoadedAction).entityViews;
  }
  return entityViewsState;
};