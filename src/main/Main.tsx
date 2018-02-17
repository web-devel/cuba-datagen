import * as React from 'react';
import {CubaApp} from "@cuba-platform/rest/dist-node/cuba";
import EntitiesList from "./EntitiesList";
import {MetaClassInfo} from "@cuba-platform/rest/dist-node/model";

interface Props {
  cubaApp: CubaApp;
}

interface State {
  metadata: Array<MetaClassInfo>;
}

export default class Main extends React.Component<Props, State> {

  componentWillMount() {
    this.props.cubaApp.loadMetadata()
      .then(metadata => this.setState({metadata}))
      .catch(() => alert('Failed to load metadata'));
  }

  render() {
    const {metadata} = this.state;
    return (
      <EntitiesList metaClasses={metadata}/>
    );
  }

}