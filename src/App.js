import Profile from "./components/profile";
import OfferForm from "./components/offerForm";
import RequestTable from "./components/requestTable";
import UsageStats from "./components/usageStats";
import ExistingOffer from "./components/existingOffer";
import Publisher from "./components/publisher";
import Master from "./components/master";
import { BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        <BrowserRouter>
          <Publisher />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;