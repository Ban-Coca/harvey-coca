import type { ReactNode } from 'react'
import { NavBar } from './components/NavBar'

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar/>
            <main>{children}</main>
        </>
    )
}