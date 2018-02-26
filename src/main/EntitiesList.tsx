import * as React from 'react';
import {MetaClassInfo} from "@cuba-platform/rest/dist-node/model";

interface Props {
  metaClasses: MetaClassInfo[];
  onEntitySelect: (entity: MetaClassInfo) => void;
}

interface State {
  showSystemEntities: boolean;
  filterVal?: string;
}

export default class EntitiesList extends React.Component<Props, State> {

  state: State = {
    showSystemEntities: false
  };

  render() {
    const {showSystemEntities, filterVal} = this.state;
    const {metaClasses} = this.props;

    return (
      <div>
        <input type="text" placeholder="Filter" value={filterVal} onChange={this.changeFilterVal}/>
        <label>
          <input type="checkbox" checked={showSystemEntities} onChange={this.toggleShowSystemEntities}/>
          Show system entities
        </label>
        <ul>
          {filterMetaClasses(metaClasses, {showSystemEntities, filterVal}).map(metaClass =>
            <li key={metaClass.entityName}>
              <a href="#" onClick={(e) => this.selectEntity(e, metaClass)}>
                {metaClass.entityName}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  private selectEntity = (e: React.MouseEvent<HTMLAnchorElement>, metaClass: MetaClassInfo) => {
    e.preventDefault();
    this.props.onEntitySelect(metaClass);
  };

  private toggleShowSystemEntities = (e: React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({showSystemEntities: e.target.checked});
  };

  private changeFilterVal = (e: React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({filterVal: e.target.value});
  }
}

function filterMetaClasses(metaClasses: MetaClassInfo[],
                           {showSystemEntities = false, filterVal}: Partial<State>): MetaClassInfo[] {
  return metaClasses.filter(metaClass => {
    if (!showSystemEntities && isSystemClass(metaClass.entityName)) {
      return false;
    }
    if (filterVal && metaClass.entityName.toLowerCase().indexOf(filterVal.toLowerCase()) < 0) {
      return false;
    }
    return true;
  });
}

function isSystemClass(className: string): boolean {
  return className.startsWith('sys$') || className.startsWith('sec$');
}