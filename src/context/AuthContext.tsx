import { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextData {
	user: string
	login: (username: string) => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState('')

	useEffect(() => {
		const username = localStorage.getItem('username')
		if (username) {
			setUser(username)
		}
	}, [])

	function login(username: string) {
		setUser(username)
		localStorage.setItem('username', username)
	}

	function logout() {
		setUser('')
		localStorage.removeItem('username')
	}

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const authContext = useContext(AuthContext)
	return authContext
}
