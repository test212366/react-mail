import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
const App = () => {
	return (
		<AlertState>
			<BrowserRouter>
				<NavBar />
				<div className="container pt-4">
					<Alert />
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/about" component={About} />
					</Switch>
				</div>
			</BrowserRouter>
		</AlertState>
	);
}

export default App;
