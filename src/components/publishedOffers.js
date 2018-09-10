import React from 'react';
import Profile from "./profile";
import ExistingOffer from "./existingOffer";
import { Link } from 'react-router-dom';
import { Sidebar, Table, Icon, Segment, Header, Button, Checkbox } from 'semantic-ui-react'

class PublishedOffers extends React.Component {
	render() {
		return (			
			<div>
				<Header as='h1'> Published offers </Header>
				<ExistingOffer claimed = {false} />
				<ExistingOffer claimed = {true} />
			</div>
		)
	}
}

export default PublishedOffers;