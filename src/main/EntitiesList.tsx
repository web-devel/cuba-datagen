import * as React from 'react';
import {MetaClassInfo} from "@cuba-platform/rest/dist-node/model";

interface Props {
  metaClasses: MetaClassInfo[];
}

export default class EntitiesList extends React.Component<Props> {

  render() {
    const {metaClasses} = this.props;
    return (
      <ul>
        {metaClasses.map(metaClass =>
          <li key={metaClass.entityName}>
            <a href="#">{metaClass.entityName}</a>
          </li>
        )}
      </ul>
    );
  }

}