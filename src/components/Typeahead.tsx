import React, {Component} from 'react';
import './typeahead.css';


interface Props {
  options: any[];
  captionProperty: string;
  keyProperty?: string;
}

interface State {
  suggestions?: any[]
}

export default class Typeahead extends Component<Props, State> {

  state: State = {};

  handleKeyUp = e => {
    const text = e.target.value.trim();
    this.setState(function (prevState: State, props: Props) {
      return {
        suggestions: props.options.filter((opt) => {
          return opt[props.captionProperty].indexOf(text) > -1;
        })
      }
    });
  };

  render() {

    const {keyProperty, captionProperty} = this.props;
    const {suggestions} = this.state;

    return (
      <div className="typeahead">
        <input type="text" onKeyUp={this.handleKeyUp}/>
        {(suggestions && suggestions.length > 0) &&
        <div className="suggestions">
          {suggestions.map((suggestion) =>
            <div key={suggestion[keyProperty ? keyProperty : captionProperty]}
                 className="suggestion">
              {suggestion[captionProperty]}
            </div>
          )}
        </div>
        }
      </div>
    )

  }

}