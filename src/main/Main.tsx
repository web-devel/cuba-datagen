import * as React from 'react';
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";
import EntitiesList from "./EntitiesList";
import EntityForm from "./EntityForm";

interface Props {
  cubaApp: CubaApp;
}

interface State {
  metadata: Array<MetaClassInfo>;
  entity?: MetaClassInfo;
  entityViews?: View[];
}

export default class Main extends React.Component<Props, State> {

  state: State = {metadata: []};

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.cubaApp.loadMetadata()
      .then(metadata => this.setState({metadata}))
      .catch(() => alert('Failed to load metadata'));
  }

  render() {
    const {metadata, entity, entityViews} = this.state;
    return (
      <div>
        <EntitiesList metaClasses={metadata}/>
        <EntityForm views={entityViews} entity={entity}/>
      </div>
    );
  }

}