import * as React from 'react';
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";

interface Props {
  views?: View[];
  entity?: MetaClassInfo;
  metadata: MetaClassInfo[];
}

interface State {
  view?: View;
}

class EntityForm extends React.Component<Props, State> {

  selectView = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedView = e.target.value;
    const view = this.props.views!.find( v => v.name === selectedView);
    this.setState({view});
  };

  render() {
    const {entity, views} = this.props;

    if (!entity || !views) {
      return (
        <div>Please choose entity</div>
      );
    }

    return (
      <div>
        <p>{entity!.entityName}</p>
        <select onChange={this.selectView}>{views.map(view =>
          <option key={view.name} value={view.name}>{view.name}</option>)}
        </select>
      </div>
    );
  }
}

export default EntityForm;