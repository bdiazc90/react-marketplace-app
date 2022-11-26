import Router from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
	return (
		<div className="App">
			<AuthProvider>
				<CartProvider>
					<Router />
				</CartProvider>
			</AuthProvider>
		</div>
	);
};

export default App;
