import './App.css';
import Header from './components/Header';
import Route from './components/Route';

export default () => {
	//const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/"></Route>
			<Route path="/list"></Route>
			<Route path="/dropdown"></Route>
			<Route path="/translate"></Route>
		</div>
	);
};
