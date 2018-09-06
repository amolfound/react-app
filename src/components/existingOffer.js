import React from 'react'
import Profile from "./profile"
import { Link } from 'react-router-dom'
import { Sidebar, Table, Icon, Segment, Header, Button, Checkbox } from 'semantic-ui-react'

class ExistingOffer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			offerTable: []
		};
	}

	/*
	componentDidMount() {
  		let claimed = this.props.claimed ;
  		let headerArray = ["namespace", "cid", "size", "time", "geo", "rate", "until"];
		let tableData = [ {namespace: "1", cid: "192.168.1.1", time: "10", size: "10", geo: "asdfs", rate: "10", until: "yolo"},
		{namespace: "1", cid: "192.168.1.1", time: "20", size: "10", geo: "asdfs", rate: "10", until: "yolo"} ];
	
		let offerTable = this.createOfferTable(claimed, headerArray, tableData);		

		this.setState({offerTable: offerTable});
	}
	*/

	createOfferTable(claimed, headerArray, tableData) {

		let tableHeaderArray = headerArray.map(headerArrayItem => {
			return (
				<Table.HeaderCell>
					{headerArrayItem}
				</Table.HeaderCell>
			)
		})

		let tableBodyArray = tableData.map(tableDataItem => {
			return (
				<Table.Row>
					{ 
						claimed ? null : 
							<Table.Cell >
				          		<Checkbox slider />
			       			</Table.Cell>
			       	}
			    	
			        <Table.Cell>{tableDataItem.namespace}</Table.Cell>
		        	<Table.Cell>{tableDataItem.cid}</Table.Cell>
			        <Table.Cell>{tableDataItem.size}</Table.Cell>
			        <Table.Cell>{tableDataItem.time}</Table.Cell>
			        <Table.Cell>{tableDataItem.geo}</Table.Cell>
			        <Table.Cell>{tableDataItem.rate}</Table.Cell>
			        <Table.Cell>{tableDataItem.until}</Table.Cell>
			    </Table.Row>
				)
		})

		return (
			<Table compact celled>

			    <Table.Header>
		    		<Table.Row>
		    			{
		    				claimed ? null : <Table.HeaderCell />
		    			}
			      		{tableHeaderArray}
			      	</Table.Row>
			    </Table.Header>

			    <Table.Body>
			    	{tableBodyArray}
			    </Table.Body>

			    {
			    	claimed ? null : 
					    <Table.Footer fullWidth>
					      <Table.Row>
					        {
				    			<Table.HeaderCell />
				    		}
					        <Table.HeaderCell colSpan='4'>
					          <Button size='small'>Claim</Button>
					          <Button disabled size='small'>
					            Claim All
					          </Button>
					        </Table.HeaderCell>
					      </Table.Row>
					    </Table.Footer>
				}
		  	</Table>
		)
	}

	render() {
		let claimed = this.props.claimed;
		// let { offerTable } = this.state.offerTable;

		let headerArray = ["namespace", "cid", "size", "time", "geo", "rate", "until"];
		let tableData = [ {namespace: "1", cid: "192.168.1.1", time: "10", size: "10", geo: "asdfs", rate: "10", until: "yolo"},
		{namespace: "1", cid: "192.168.1.1", time: "20", size: "10", geo: "asdfs", rate: "10", until: "yolo"} ];
	
		let offerTable = this.createOfferTable(claimed, headerArray, tableData);

		return (
			<div>
				<Header as='h1'>{claimed ? "claimed offers" : "unclaimed offers"}</Header>
				{offerTable}
			</div>
		);
	}
}
export default ExistingOffer;
