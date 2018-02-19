import * as React from 'react';
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";

interface Props {
  views?: View[];
  entity?: MetaClassInfo;
}

class EntityForm extends React.Component<Props> {

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
        <select>{views.map(view =>
          <option key={view.name}>{view.name}</option>)}
        </select>
      </div>
    );
  }
}

export default EntityForm;