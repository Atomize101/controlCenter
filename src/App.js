import Header from './components/Header';
import Route from './components/Route';
import Accordion from './components/Accordion';

export default () => {
	//const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion />
			</Route>
		</div>
	);
};
