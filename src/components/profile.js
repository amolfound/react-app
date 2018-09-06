import React from 'react';
import { Header, Grid, Image, Table } from 'semantic-ui-react';
import {
	getNodeId,
	getEthAddress,
	getEthBalance,
	getLinBalance,
} from './redisApi';


class Profile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			nodeId: "",
			ethAddress: "",
			ethBalance: "",
			linBalance: ""
		};
	}

	componentDidMount() {
  		let nodeId = "abc" ;//getNodeId();
		let ethAddress = "abc"; //getEthAddress();
		let ethBalance = "abc"; // getEthBalance();
		let linBalance = "abc"; //getLinBalance();

		this.setState({
			nodeId: nodeId,
			ethAddress: ethAddress,
			ethBalance: ethBalance,
			linBalance: ethBalance
		});
	}

	render() {
		let {
			nodeId,
			ethAddress,
			ethBalance,
			linBalance
		} = this.state;

		return (
		<div>
			<Header as='h1'>Profile</Header>
			
		    <Grid columns={2} divided>
		    	<Grid.Row>

		    		<Grid.Column>
		    			<Image src="/static/images/slack.jpg" size='small'/>
		    		</Grid.Column>

		    		<Grid.Column>
					    <Table celled>
						    <Table.Body>
						    	<Table.Row>
						   	    	<Table.Cell>Id</Table.Cell>
					        		<Table.Cell>{nodeId}</Table.Cell>
					      		</Table.Row>
					      		<Table.Row>
						   	    	<Table.Cell>EthAddress</Table.Cell>
					        		<Table.Cell>{ethAddress}</Table.Cell>
					      		</Table.Row>
					      		<Table.Row>
						   	    	<Table.Cell>EthBalance</Table.Cell>
					        		<Table.Cell>{ethBalance}</Table.Cell>
					      		</Table.Row>
					      		<Table.Row>
									<Table.Cell>LinBalance</Table.Cell>
					        		<Table.Cell>{linBalance}</Table.Cell>
					      		</Table.Row>
					      	</Table.Body>
					    </Table>
					</Grid.Column>
				</Grid.Row>    
			</Grid>
		</div>
		);
	}
}

export default Profile;
