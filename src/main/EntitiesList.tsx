import * as React from 'react';
import {MetaClassInfo} from "@cuba-platform/rest/dist-node/model";

interface Props {
  metaClasses: MetaClassInfo[];
  onEntitySelect: (entity: MetaClassInfo) => void;
}

export default class EntitiesList extends React.Component<Props> {

  selectEntity = (e: React.MouseEvent<HTMLAnchorElement>, metaClass: MetaClassInfo) => {
    e.preventDefault();
    this.props.onEntitySelect(metaClass);
  };

  render() {
    const {metaClasses} = this.props;
    return (
      <ul>
        {metaClasses.map(metaClass =>
          <li key={metaClass.entityName}>
            <a href="#" onClick={(e) => this.selectEntity(e, metaClass)}>
              {metaClass.entityName}
            </a>
          </li>
        )}
      </ul>
    );
  }

}