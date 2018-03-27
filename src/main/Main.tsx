import * as React from 'react';
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";
import EntitiesList from "./EntitiesList";
import ViewSelect from "./ViewSelect";
import './main.css';
import {connect} from "react-redux";
import {AppState} from "../redux/store";
import {Actions, selectEntity, selectView} from "../redux/actions";
import {Dispatch} from "redux";

interface Props {
  metadata: MetaClassInfo[];
  entity?: MetaClassInfo;
  entityViews?: View[];

  onEntitySelect(entity: MetaClassInfo): void;
  onViewSelect(view: View): void;
}

class Main extends React.Component<Props> {

  render() {
    const {metadata, entity, entityViews, onEntitySelect, onViewSelect} = this.props;
    return (
      <div className={'main'}>
        <div className="drawer">
          <EntitiesList metaClasses={metadata} onEntitySelect={onEntitySelect}/>
        </div>
        <div>
          <ViewSelect views={entityViews} entity={entity} metadata={metadata} onViewSelect={onViewSelect}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({metadata, entity, entityViews}: AppState): Partial<Props> => {
  return {metadata, entity, entityViews};
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => {
  return {
    onEntitySelect: (entity: MetaClassInfo) => dispatch(selectEntity(entity)),
    onViewSelect: (view: View) => dispatch(selectView(view))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);