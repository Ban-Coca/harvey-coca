import { NavLink, useNavigate } from "react-router"
import { Button } from "./ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const NavBar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b">
            <div className="h-16 flex items-center justify-between px-4 sm:px-6 md:px-20 gap-4 sm:gap-12">
                <div onClick={() => navigate('/')} className="flex-shrink-0">
                    <span className="font-mono font-bold text-primary cursor-pointer text-sm sm:text-base">harvey_coca</span>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-base">
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

                {/* Desktop Resume Button */}
                <Button 
                    variant="outline" 
                    className="hidden md:flex font-mono px-6 py-2 cursor-pointer transition-all duration-200 items-center justify-center hover:border-primary hover:shadow-[0_0_12px_rgba(var(--primary))]"
                    onClick={() => window.open('https://docs.google.com/document/d/{YOUR_DOC_ID}/export?format=pdf', '_blank')}
                >
                    <span className="text-base">Resume</span>
                </Button>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t px-4 py-4 space-y-4">
                    <NavLink 
                        to="/" 
                        className={({isActive}) => `block py-2 ${isActive ? 'text-primary' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className={({isActive}) => `block py-2 ${isActive ? 'text-primary' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/stacks" 
                        className={({isActive}) => `block py-2 ${isActive ? 'text-primary' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Stack
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({isActive}) => `block py-2 ${isActive ? 'text-primary' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                    <Button 
                        variant="outline" 
                        className="md:hidden w-full font-mono py-2 cursor-pointer transition-all duration-200 hover:border-primary flex items-center justify-center"
                        onClick={() => window.open('https://docs.google.com/document/d/{YOUR_DOC_ID}/export?format=pdf', '_blank')}
                    >
                        <span className="text-sm">Resume</span>
                    </Button>
                </div>
            )}
        </div>
    )
}