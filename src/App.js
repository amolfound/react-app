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

const existingOfferProps = {
  claimed: "false",
  headerArray : ["namespace", "cid", "size", "time", "geo", "rate", "until"],
  tableData: [ {namespace: "1", cid: "192.168.1.1", time: "10", size: "10", geo: "asdfs", rate: "10", until: "yolo"},
    {namespace: "1", cid: "192.168.1.1", time: "20", size: "10", geo: "asdfs", rate: "10", until: "yolo"} ]
}

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        <BrowserRouter>
          <Master />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;