import * as React from 'react';
import './App.css';
import Login from './login/Login';
import AppUrlForm from "./login/AppUrlForm";
import Main from "./main/Main";
import {connect} from "react-redux";
import {AppState} from "../redux/store";
import {Dispatch} from "redux";
import {Actions, setAppUrl} from "../redux/actions";

interface Props {
  loggedIn: boolean;
  appUrl?: string;
  handleAppUrlSet: (apiUrl: string) => void;
}

class App extends React.Component<Props> {
  render() {
    const {loggedIn, appUrl, handleAppUrlSet} = this.props;
    return (
      <div className="App">
        {!appUrl
          ? <AppUrlForm appUrl={appUrl} onProceed={handleAppUrlSet}/>
          : loggedIn
            ? <Main/>
            : <Login/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): Partial<Props> => {
  return {
    appUrl: state.appUrl,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>): Partial<Props> => {
  return {
    handleAppUrlSet: (url: string) => dispatch(setAppUrl(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
