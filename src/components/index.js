import Profile from "./profile";
import OfferForm from "./offerForm";
import RequestTable from "./requestTable";
import UsageStats from "./usageStats";
import ExistingOffer from "./existingOffer";
import Publisher from "./publisher";
import Master from "./master";
import { BrowserRouter } from 'react-router-dom'
// import 'semantic-ui-css/semantic.min.css';

const Index = () => (
	<div style={{height: '100vh', display: 'flex', flexFlow: 'column nowrap'}}>
	    <BrowserRouter>
			<Master />
	    <BrowserRouter />	
	<div />
)



export default Index