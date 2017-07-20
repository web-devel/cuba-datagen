import React, {Component} from 'react';
import Typeahead from "./components/Typeahead";

export default class ModelSettings extends Component {

  renderEntityOption(entityInfo) {
    const {entityName} = entityInfo;
    return (
      <option>{entityName}</option>
    );
  }

  render() {
    const {entityInfos} = this.props;

    return (
      <div>
        <Typeahead options={entityInfos}/>
      </div>
    );
  }

}