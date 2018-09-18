import React from 'react';
import Profile from "./profile";
import OfferForm from "./offerForm";
import RequestTable from "./requestTable";
import PublishedOffers from "./publishedOffers";
import UsageStats from "./usageStats";


import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { Sidebar, Menu, Icon, Segment, Header } from 'semantic-ui-react'

class Master extends React.Component {

  render() {

    return (
    	<Sidebar.Pushable as={Segment}>

			<Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
		      <Menu.Item as={Link} to="/">
		        <Icon name='user' />
		        Profile
		      </Menu.Item>
		      <Menu.Item as={Link} to="/requestTable">
		        <Icon name='upload' />
		        Request table
		      </Menu.Item>
		      <Menu.Item as={Link} to="/publishedOffers">
		        <Icon name='tags' />
		        Published offers
		      </Menu.Item>
		      <Menu.Item as={Link} to="/usageStats">
		        <Icon name='disk' />
		        Usage statistics
		      </Menu.Item>
		    </Sidebar>

		    <Sidebar.Pusher >
		    
		    <Segment basic>
			  <Route exact path='/' component={Profile} />
			  <Route path='/requestTable' component={RequestTable} />
			  <Route path='/publishedOffers' component={PublishedOffers} />
			  <Route path='/usageStats' component={UsageStats} />
		    </Segment>

		    </Sidebar.Pusher>

  		</Sidebar.Pushable>
    );
  }
}
export default Master;
