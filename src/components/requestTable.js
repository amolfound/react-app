import React from 'react'
import { Header, Table } from 'semantic-ui-react'

/*
[ {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"},
  {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"} ]
*/


class RequestTable extends React.Component {
  constructor() {
    super();
  }

  createTableBody(tableData) {
    let tableBodyArray = tableData.map((tableDataItem) => {
      return(
      <Table.Row>
        <Table.Cell>{tableDataItem.timeStamp}</Table.Cell>
        <Table.Cell>{tableDataItem.requestIP}</Table.Cell>
        <Table.Cell>{tableDataItem.cid}</Table.Cell>
      </Table.Row>
      )
    })

    return (<Table.Body>{tableBodyArray}</Table.Body>);
  }

  render() {
    let tableData = [ {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"},
  {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"} ];

    return(
    <div>
      
      <Header as='h1'>Request log</Header>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>TimeStamp</Table.HeaderCell>
            <Table.HeaderCell>RequestIP</Table.HeaderCell>
            <Table.HeaderCell>ContentId</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        {this.createTableBody(tableData)}
        
      </Table>

    </div>
    )
  }
}

export default RequestTable
