import Header from './components/Header';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Search from './components/Search';

export default () => {
	//const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
		</div>
	);
};
