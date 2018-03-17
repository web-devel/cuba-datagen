import * as React from 'react';
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";
import EntitiesList from "./EntitiesList";
import EntityForm from "./EntityForm";
import './main.css';
import {connect} from "react-redux";
import {AppState} from "../redux/store";
import {Actions, selectEntity} from "../redux/actions";
import {Dispatch} from "redux";

interface Props {
  metadata: MetaClassInfo[];
  entity?: MetaClassInfo;
  entityViews?: View[];

  onEntitySelect(entity: MetaClassInfo): void;
}

class Main extends React.Component<Props> {

  render() {
    const {metadata, entity, entityViews, onEntitySelect} = this.props;
    return (
      <div className={'main'}>
        <EntitiesList metaClasses={metadata} onEntitySelect={onEntitySelect}/>
        <EntityForm views={entityViews} entity={entity} metadata={metadata}/>
      </div>
    );
  }
}

const mapStateToProps = ({metadata, entity, entityViews}: AppState): Partial<Props> => {
  return {metadata, entity, entityViews};
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => {
  return {
    onEntitySelect: (entity: MetaClassInfo): void => {
      dispatch(selectEntity(entity));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);