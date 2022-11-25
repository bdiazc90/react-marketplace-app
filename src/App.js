import Router from "./routes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
	return (
		<div className="App">
			<AuthProvider>
				<Router />
			</AuthProvider>
		</div>
	);
};

export default App;
