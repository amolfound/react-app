import React from 'react';
import { Grid, Container, Header, Table, Dimmer, Loader, Icon, Image, Progress, Button } from 'semantic-ui-react'

import {
  getUsedStorage,
  getTotalStorage,
  getUsedBandwidth,
  getMaxAllowedBandwidth
} from './redisApi'

class UsageStats extends React.Component {

	constructor(props) {
		super (props);

		this.state = {
			loading: true,
			usedStorage: undefined,
			totalStorage: undefined,
			usedBandwidth: undefined,
			maxAllowedBandwidth: undefined
		}
	}

	componentDidMount() {
		let p1 = getUsedStorage();
		let p2 = getTotalStorage();
		let p3 = getUsedBandwidth();
		let p4 = getMaxAllowedBandwidth();

		Promise.all([p1, p2, p3, p4]).then(values => {
			let usedStorage = 10;//getNodeId();
			let totalStorage = 100; //getEthAddress();
			let usedBandwidth = 10; // getEthBalance();
			let maxAllowedBandwidth = 100; //getLinBalance();

			this.setState({
				loading: false,
				usedStorage: usedStorage,
				totalStorage: totalStorage,
				usedBandwidth: usedBandwidth,
				maxAllowedBandwidth: maxAllowedBandwidth
			});
		})
	}

  render() {

  	let {
  		loading,
  		usedStorage,
  		totalStorage,
		usedBandwidth,
		maxAllowedBandwidth
	} = this.state;

    return (
       <div>

       	<Header as='h1'>Usage stats</Header>

       	<Grid >
	    	<Grid.Row>
		    	<Header as='h3'>Resource allocation and usage statistics</Header>
		    	
	    		{
	              loading ? <Dimmer active> <Loader size='huge'/> </Dimmer> : null
		        }
	    	</Grid.Row>

	    	{
	    		!loading ?
			    (
			    	<Grid.Row columns={2} divided>

			    		<Grid.Column >
							<Progress progress='value' value={this.state.usedStorage} total={this.state.totalStorage} />
			    		</Grid.Column>

			    		<Grid.Column>
						    <Button onClick={this.changeStorage}>Change storage limit</Button>
						</Grid.Column>

					</Grid.Row>
				) : null
			}

			{
			    !loading ?
			    (
					<Grid.Row columns={2} divided>

			    		<Grid.Column>
							<Progress progress='value' value={this.state.usedBandwidth} total={this.state.maxAllowedBandwidth} />
			    		</Grid.Column>

			    		<Grid.Column>
						    <Button onClick={this.changeBandwidth}>Change bandwidth limit</Button>
						</Grid.Column>
						
					</Grid.Row>
				) : null
			}
			
	    </Grid>

	   </div>
    );
  }
}

export default UsageStats;
