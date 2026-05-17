import { NavLink, useNavigate } from "react-router"
import { Button } from "./ui/button"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="h-16 border-b flex items-center justify-center px-6 gap-12">
            <div className="absolute left-6" onClick={() => navigate('/')}>
                <span className="font-mono font-bold text-primary cursor-pointer">Harvey Coca</span>
            </div>
            <nav className="flex items-center gap-8">
                <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    Projects
                </NavLink>
                <NavLink to="/stacks" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    Stack
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                    Contact
                </NavLink>
            </nav>
            <Button 
                variant="outline" 
                className="font-mono absolute right-6 px-6 py-2 cursor-pointer transition-all duration-200 hover:border-primary hover:shadow-[0_0_12px_rgba(var(--primary))]"
                onClick={() => window.open('https://docs.google.com/document/d/{YOUR_DOC_ID}/export?format=pdf', '_blank')}
            >
                <span className="text-base">Resume</span>
            </Button>
        </div>
    )
}