import React from 'react'
import { Grid, Container, Header, Table, Dimmer, Loader, Icon, Image} from 'semantic-ui-react'
import {
  getRequestTableHeaders,
  getRequestTableData
} from './redisApi'
import shortPara from "../images/short-paragraph.png"


/*
[ {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"},
  {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"} ]
*/


class RequestTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      requestTable: undefined
    };
  }

  
  componentDidMount() {
    let p1 = getRequestTableHeaders();
    let p2 = getRequestTableData();

    Promise.all([p1, p2]).then(values => {
      let tableData = [ {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"},
        {timeStamp: "1", requestIP: "192.168.1.1", cid: "10"} ];
      let requestTable = this.createRequestTable(tableData);    
      this.setState({
        requestTable: requestTable,
        loading: false
      });
    })
  }

  createRequestTable(tableData) {
    let tableBodyArray = tableData.map((tableDataItem) => {
      return(
      <Table.Row>
        <Table.Cell>{tableDataItem.timeStamp}</Table.Cell>
        <Table.Cell>{tableDataItem.requestIP}</Table.Cell>
        <Table.Cell>{tableDataItem.cid}</Table.Cell>
      </Table.Row>
      )
    })

    let requestTable = 
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>TimeStamp</Table.HeaderCell>
            <Table.HeaderCell>RequestIP</Table.HeaderCell>
            <Table.HeaderCell>ContentId</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableBodyArray}
        </Table.Body>
                
      </Table>

    return requestTable;
  }

  render() {

   const loading = this.state.loading;
   const requestTable = this.state.requestTable;

    return(
      <div>

        <Header as='h1'>
          Request log
          <Header.Subheader>Content requests recieved from various sources</Header.Subheader>
        </Header>        

        <Grid>
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
                  ((requestTable.length == 0) ? <Icon name='file outline' size='huge' /> :
                  requestTable)
                )
              }

          </Grid.Row>          
        </Grid>

      </div>
    )
  }
}

export default RequestTable
