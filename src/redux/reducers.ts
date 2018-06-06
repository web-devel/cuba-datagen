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
import {APP_NAME} from "../index";
import {GenerationState} from "./store";

export const appUrl = (urlState: string | null = null, action: Actions): string | null => {
  if (action.type === ActionType.SET_APP_URL) {
    return (action as SetAppUrlAction).appUrl;
  }
  return urlState;
};

export const cubaApp = (app: CubaApp | null = null, action: Actions): CubaApp | null => {
  if (action.type === ActionType.SET_APP_URL) {
    return new CubaApp(APP_NAME, (action as SetAppUrlAction).appUrl);
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
    const {metaClassInfo, loadedViews} = (action as EntityViewsLoadedAction);
    return [...composeBuiltInViews(metaClassInfo), ...loadedViews];
  }
  return entityViewsState;
};

export const generation = (generationState: GenerationState = {}, action: Actions) => {
  return generationState;
};


/**
 * TODO not enough info to compose _minimal and _base views
 */
function composeBuiltInViews(metaClassInfo: MetaClassInfo): View[] {
  return [{
    name: '_local',
    entity: metaClassInfo.entityName,
    properties: metaClassInfo.properties
      .filter(({attributeType}) => attributeType === "DATATYPE" || attributeType === "ENUM")
      .map(({name}) => name)
  }];
}