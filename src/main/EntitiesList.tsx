import * as React from 'react';
import {MetaClassInfo} from "@cuba-platform/rest/dist-node/model";

interface Props {
  metaClasses: MetaClassInfo[];
}

export default class EntitiesList extends React.Component<Props> {

  render() {
    const {metaClasses} = this.props;
    return (
      <div>
        {metaClasses.map(metaClass =>
          <a href="#" key={metaClass.entityName}>{metaClass.entityName}</a>
        )}
      </div>
    );
  }

}