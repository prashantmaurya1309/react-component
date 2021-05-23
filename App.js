import React from 'react';
import './App.css';
import theme from '../src/utils/theme';
import { makeStyles } from '@material-ui/core';
import CollectorDashboard from '../src/views/CollectorDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLL_NUMBER } from '../src/utils/constants';
import Header from '../src/components/Header';
import { Component } from 'react';

// commented the original code of app.js

/*
const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));
const App = () => {
  console.log('theme', theme);
  const classes = useStyles();
  return (
    <div className={classes.mainBackground}>
      <Router basename={`/${ROLL_NUMBER}`}>
        <Route exact path="/" component={CollectorDashboard} />
      </Router>
    </div>
  );
};

export default App;
*/

// minmized code above
// making new app from tutorial

import {Greet} from './components/GreetFunctional';
import Welcome from './components/GreetClass';
import Message from './components/Message';
import Counter from './components/Counter';
import {GreetDestruct} from './components/DestructGreet';
import FunctionalClick from './components/FunctionalClick'
import { Class, Error } from '@material-ui/icons';
import ClassClick from './components/ClassClick';
import BindEvent from './components/BindEvent';
import ParentComponent from './components/ParentComponent';
import GreetUser from './components/GreetUser';
import NameList from './components/NameList';
import IndexAsKey from './components/IndexAsKey';
import StyleSheet from './components/StyleSheet'
import Forms from './components/Forms'
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary'
import HOC1 from './components/HOC1';
import Hovwer from './components/Hovwer';
import FetchData from './components/FetchData';
import AxiosGet from './components/AxiosGet';
import { FetchInvoice } from './components/FetchInvoice';
import SimpleInfinite from './components/SimpleInfinite';
import DataTable from './imp_comp/DataTable';
import HeaderTemp from './imp_comp/HeaderTemp';
import Body from './imp_comp/Body';

class App extends Component {
  render(){
    return(
      <div className="App">
        
        <HeaderTemp/>
        <Body/>
        {/* <DataTable/> */}
        {/* <SimpleInfinite/> */}
        {/* <FetchInvoice/> */}
        {/* <AxiosGet/> */}
        {/* <FetchData/> */}
        {/* <Hovwer/>
        <HOC1/> */}
        {/* <ErrorBoundary>
          <Hero heroName="BatMan"/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}
        {/* <Forms/> */}
        {/* <StyleSheet style={true}/> */}
        {/* <IndexAsKey/> */}
        {/* <NameList/> */}
        {/* <GreetUser/> */}
        {/* <ParentComponent/> */}
        {/* <BindEvent/> */}
        {/* <FunctionalClick/>
        <ClassClick/> */}
      {/* <GreetDestruct name="Prashant"  lName="Maurya"/> */}
        {/* <Counter addValue={11}/> */}
        {/* <Message/>
        <Greet name="Prashant" lName=" Maurya">
          <p>this is user name</p>
        </Greet>
        <Greet name="Batman"/>
        <Greet name="Flash">
          <button>action</button>
        </Greet>
        <Welcome name="class props"/> */}
      </div>
    );
  }
}
export default App;