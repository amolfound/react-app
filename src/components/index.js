import Profile from "./profile";
import OfferForm from "./offerForm";
import RequestTable from "./requestTable";
import UsageStats from "./usageStats";
import ExistingOffer from "./existingOffer";
import Publisher from "./publisher";
import Master from "./master";
import { BrowserRouter } from 'react-router-dom'
// import 'semantic-ui-css/semantic.min.css';


const existingOfferProps = {
	claimed: "false",
	headerArray : ["namespace", "cid", "size", "time", "geo", "rate", "until"],
	tableData: [ {namespace: "1", cid: "192.168.1.1", time: "10", size: "10", geo: "asdfs", rate: "10", until: "yolo"},
		{namespace: "1", cid: "192.168.1.1", time: "20", size: "10", geo: "asdfs", rate: "10", until: "yolo"} ]
}

const Index = () => (
	<Master />
)



export default Index