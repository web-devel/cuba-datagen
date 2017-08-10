import React, {Component} from 'react';
import Typeahead from "./components/Typeahead";

interface Props {
  entityInfos: any[];
}

export default class ModelSettings extends Component<Props, any> {

  render() {
    const {entityInfos} = this.props;

    return (
      <div>
        <Typeahead options={entityInfos} captionProperty="entityName"/>
      </div>
    );
  }

}