import * as React from 'react';
import {connect} from "react-redux";
import {GenerationGraph} from "../../generation";
import {AppState} from "../../redux/store";

interface Props {
  fieldsGraph: GenerationGraph;
}

class EntityForm extends React.Component<Props> {
  render() {
    return(<div>wip</div>);
  }
}

const mapStateToProps = ({generation}: AppState) => {
  return {fieldsGraph: generation.graph};
};

export default connect(mapStateToProps)(EntityForm);