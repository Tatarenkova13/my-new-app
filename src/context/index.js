import { createContext } from "react"

export const AuthContext = createContext(Boolean(localStorage.getItem('auth')));