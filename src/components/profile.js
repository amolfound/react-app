import React from 'react';
import { Grid, Container, Header, Table, Dimmer, Loader, Icon, Image } from 'semantic-ui-react';
import {
	getNodeId,
	getEthAddress,
	getEthBalance,
	getLinBalance,
} from './redisApi';
import shortPara from "../images/short-paragraph.png"


class Profile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			nodeId: "",
			ethAddress: "",
			ethBalance: "",
			linBalance: ""
		};
	}

	componentDidMount() {
		let p1 = getNodeId();
		let p2 = getEthAddress();
		let p3 = getEthBalance();
		let p4 = getLinBalance();

		Promise.all([p1, p2, p3, p4]).then(values => {
			this.setState({
				loading: false,
				nodeId: "abc",
				ethAddress: "abc",
				ethBalance: "ethBalance",
				linBalance: "ethBalance"
			});
		})
	}

	render() {
		let {
			loading,
			nodeId,
			ethAddress,
			ethBalance,
			linBalance
		} = this.state;

		return (
		<div>
			<Header as='h1'>
			    Profile
			    <Header.Subheader>Manage your account settings</Header.Subheader>
			</Header>

			
		    <Grid >
		    	<Grid.Row >
        			{
		              loading ? 
		              (
		              	<Grid.Column>
			              	<Dimmer active> <Loader size='huge'/> </Dimmer>
			              	<Image src={shortPara} />
			            </Grid.Column>
		              ) : 
		              (
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
					  )
		          	}
				</Grid.Row>
			</Grid>
			
		</div>
		);
	}
}

export default Profile;
