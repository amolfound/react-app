import React from 'react';
import { Header, Progress, Button, Grid } from 'semantic-ui-react'

class UsageStats extends React.Component {

	constructor(props) {
		super (props);

		this.state = {
			usedStorage: 0,
			totalStorage: 0,
			usedBandwidth: 0,
			maxAllowedBandwidth: 0,
			earnedLin: 0
		}
	}

	componentDidMount() {
  		let usedStorage = 10 ;//getNodeId();
		let totalStorage = 100; //getEthAddress();
		let usedBandwidth = 10; // getEthBalance();
		let maxAllowedBandwidth = 100; //getLinBalance();
		let earnedLin = 0;

		this.setState({
			usedStorage: usedStorage,
			totalStorage: totalStorage,
			usedBandwidth: usedBandwidth,
			maxAllowedBandwidth: maxAllowedBandwidth,
			earnedLin: earnedLin
		});
	}

  render() {

    return (
       <div>

       	<Header as='h1'>Usage stats</Header>

        <Grid columns={2} divided>
	    	<Grid.Row>

	    		<Grid.Column >
					<Progress progress='value' value={this.state.usedStorage} total={this.state.totalStorage} />
	    		</Grid.Column>

	    		<Grid.Column>
				    <Button onClick={this.changeStorage}>Change storage limit</Button>
				</Grid.Column>

			</Grid.Row>

			<Grid.Row>

	    		<Grid.Column>
					<Progress progress='value' value={this.state.usedBandwidth} total={this.state.maxAllowedBandwidth} />
	    		</Grid.Column>

	    		<Grid.Column>
				    <Button onClick={this.changeBandwidth}>Change bandwidth limit</Button>
				</Grid.Column>
				
			</Grid.Row>

		</Grid>

	   </div>
    );
  }
}

export default UsageStats;
