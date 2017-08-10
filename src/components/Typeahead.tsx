import React, {Component} from 'react';
import './typeahead.scss';

export interface Props {
  options: any[];
  captionProperty: string;
  keyProperty?: string;
}

interface State {
  suggestionsShown: boolean;
  suggestions?: any[];
  inputValue?: string;
}

export default class Typeahead extends Component<Props, State> {

  state: State = {
    suggestionsShown: false
  };

  private handleKeyUp = e => {
    const text = e.target.value.trim();
    this.setState(prevState => ({...prevState, inputValue: text}));
  };

  private toggleSuggestions = () => {
    this.setState(prevState => ({...prevState, suggestionsShown: !prevState.suggestionsShown}));
  };

  render() {

    const {options, keyProperty, captionProperty} = this.props;
    const {suggestionsShown, inputValue} = this.state;

    const suggestions = options.filter((opt) => {
      return opt[captionProperty].indexOf(inputValue) > -1;
    });

    return (
      <div className="typeahead">
        <input type="text" onKeyUp={this.handleKeyUp}/>
        <a className="toggler" onClick={this.toggleSuggestions}>▼</a>
        {suggestionsShown &&
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