import Profile from "./profile";
import OfferForm from "./offerForm";
import RequestTable from "./requestTable";
import UsageStats from "./usageStats";
import ExistingOffer from "./existingOffer";
import Publisher from "./publisher";
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory';

// import 'semantic-ui-css/semantic.min.css';


const existingOfferProps = {
	claimed: "false",
	headerArray : ["namespace", "cid", "size", "time", "geo", "rate", "until"],
	tableData: [ {namespace: "1", cid: "192.168.1.1", time: "10", size: "10", geo: "asdfs", rate: "10", until: "yolo"},
		{namespace: "1", cid: "192.168.1.1", time: "20", size: "10", geo: "asdfs", rate: "10", until: "yolo"} ]
}

const Index = () => (
	<div>
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>

		<BrowserRouter history={createBrowserHistory()}>
			<Publisher />
		</BrowserRouter>

		<Profile nodeId = "absdfsdfsdfadsadfdfasdasdfasdfdfasdsc" />
    	
    	<OfferForm />

    	<RequestTable />
    	<UsageStats />
    	{console.log(existingOfferProps)}
    	<ExistingOffer {...existingOfferProps} />
    	<ExistingOffer claimed = {false}
    		headerArray = {["namespace", "cid", "size", "time", "geo", "rate", "until"]}
    		tableData = {[ {namespace: "1", cid: "192.168.1.1", time: "10", size: "10", geo: "asdfs", rate: "10", until: "yolo"},
		{namespace: "1", cid: "192.168.1.1", time: "20", size: "10", geo: "asdfs", rate: "10", until: "yolo"} ]} />
   	</div>
)



export default Index