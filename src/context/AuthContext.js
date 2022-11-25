import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const { children } = props;

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) ?? {}
	);

	function authLogin(user) {
		if (!user) return false;
		localStorage.setItem("user", JSON.stringify(user));
		setUser(user);
		return true;
	}

	function logout() {
		localStorage.clear();
		setUser({});
	}

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
