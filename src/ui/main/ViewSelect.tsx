import * as React from 'react';
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";

interface Props {
  views?: View[];
  entity?: MetaClassInfo;
  metadata: MetaClassInfo[];
  onViewSelect: (view: View) => void;
}

class ViewSelect extends React.Component<Props> {

  selectView = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedView = e.target.value;
    const view = this.props.views!.find( v => v.name === selectedView);
    if (view) {
      this.props.onViewSelect(view);
    }
  };

  render() {
    const {entity, views} = this.props;

    if (!entity || !views) {
      return (
        <div>Please choose entity</div>
      );
    }

    const {entityName} = entity;

    return (
      <div>
        <p>{entityName}</p>
        <select onChange={this.selectView}>{views.map(view =>
          <option key={entityName + ':' + view.name} value={view.name}>{view.name}</option>)}
        </select>
      </div>
    );
  }
}

export default ViewSelect;