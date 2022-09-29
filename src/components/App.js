import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BreakfastMenu, LunchMenu, Aboutus } from '../pages';
import Landingpage from './Landingpage';
import Menus from './Menus';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Landingpage />}>
					<Route index element={<Menus />} />
					<Route path='breakfast' element={<BreakfastMenu />} />
					<Route path='lunch' element={<LunchMenu />} />
					<Route path='aboutus' element={<Aboutus />} />
				</Route>
			</Routes>
		</Router>
	);
};
export default App;
