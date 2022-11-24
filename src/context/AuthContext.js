import { createContext, useState } from "react";

export const AuthContext = createContext();

// Crear un Provider: Este provider a proveer la variables y funciones
// que creemos
export const AuthProvider = (props) => {
	// La palabra children hace referencia a los components hijo
	// y este children viaja por props
	const { children } = props;

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) ?? {}
	);

	async function authLogin(user) {
		if (!user) return false;
		localStorage.setItem("user", JSON.stringify(user));
		setUser(user);
		return true;
	}

	function logout() {
		localStorage.clear();
		setUser({});
	}

	// funcion para validar si la session existe
	function isAuth() {
		return Object.entries(user).length !== 0;
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				authLogin,
				logout,
				isAuth,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
