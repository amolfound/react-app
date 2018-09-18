import React from 'react';
import Profile from "./profile";
import OfferForm from "./offerForm";
import RequestTable from "./requestTable";

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { Sidebar, Menu, Icon, Segment, Header } from 'semantic-ui-react'

class Publisher extends React.Component {

  render() {

    return (
    <BrowserRouter>	
    	<Sidebar.Pushable as={Segment}>

			<Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
		      <Menu.Item as={Link} to="/">
		        <Icon name='user' />
		        Profile
		      </Menu.Item>
		      <Menu.Item as={Link} to="/requestTable">
		        <Icon name='tags' />
		        Request table
		      </Menu.Item>
		      <Menu.Item as={Link} to="/offerForm">
		        <Icon name='wpforms' />
		        Offer form
			  </Menu.Item>
		    </Sidebar>

		    <Sidebar.Pusher >
		    
			<Segment basic>
			  <Route exact path='/' component={Profile} />
			  <Route path='/requestTable' component={RequestTable} />
			  <Route path='/offerForm' component={OfferForm} />
			</Segment>

		    </Sidebar.Pusher>

  		</Sidebar.Pushable>
  	</BrowserRouter>	
    );
  }
}
export default Publisher;
