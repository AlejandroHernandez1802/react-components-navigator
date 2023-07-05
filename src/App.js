//pages import
import ButtonPage from "./pages/ButtonPage";
import AccordeonPage from "./pages/AccordeonPage";
import SelectPage from "./pages/SelectPage";

//Components import
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

function App() {
	return (
		<div>
			<Sidebar />

			<Route path="/">
				<ButtonPage />
			</Route>
			<Route path="/accordeon">
				<AccordeonPage />
			</Route>
			<Route path="/select">
				<SelectPage />
			</Route>
		</div>
	);
}

export default App;
