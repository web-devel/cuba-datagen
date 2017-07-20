import React, {Component} from 'react';
import './typeahead.css';

interface Props {
  options: any[]
}

interface State {
  suggestions?: any[]
}

export default class Typeahead extends Component<Props, State> {

  state:State = {};
  private input: HTMLInputElement;

  handleKeyUp = () => {
    this.setState({
      ...this.state,
      suggestions: this.findSuggestions()
    });
  };

  findSuggestions = () => {
    return this.props.options.filter((option) => {
      return option.entityName.indexOf(this.input.value) > -1;
    })
  };

  render() {

    const {suggestions} = this.state;

    return (
      <div className="typeahead">
        <input ref={(node) => {this.input = node}} type="text" onKeyUp={this.handleKeyUp}/>
        {(suggestions && suggestions.length > 0) &&
          <div className="suggestions">
            {suggestions.map((suggestion) =>
              <div className="suggestion">{suggestion.entityName}</div>
            )}
          </div>
        }
      </div>
    )

  }

}