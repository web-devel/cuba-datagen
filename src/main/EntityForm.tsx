import * as React from 'react';
import {MetaClassInfo, View} from "@cuba-platform/rest/dist-node/model";

interface Props {
  views?: View[];
  entity?: MetaClassInfo;
}

class EntityForm extends React.Component<Props> {

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default EntityForm;