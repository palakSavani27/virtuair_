import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react"

const Navbar = (setShowLogin) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const [token, setToken] = useState("");

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    const handleMobileLinkClick = () => {
        setMobileDrawerOpen(false);
    }

    const handleLogin = () => {

        localStorage.setItem('token', '123456');
        setToken('123456');
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <a href='#hero' >
                        <div className="flex items-center flex-shrink-0">
                            <img className='h-10 w-10 mr-2' src={logo} alt="" />
                            <span className="text-xl tracking-tight">VirtualR</span>
                        </div>
                    </a>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {!token ? (
                        <button
                            onClick={() => setShowLogin(true)}  
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                        >
                            Account
                        </button>
                    ) : (
                        <div className="navbar-profile">
                            <ul className="nav-profile-dropdown">
                                <li onClick={logout}>
                                    <button className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <a href="#" className='py-2 px-3 border rounded-md'>
                            Sign In
                        </a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                            Create an account
                        </a>
                    </div> */}

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen && (
                    <div className=" fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index} className='py-4'>
                                        <a
                                            href={item.href}
                                            onClick={handleMobileLinkClick}>
                                            {item.label}
                                        </a>
                                    </li>
                                )

                            })}
                        </ul>

                        {/* <div className="flex space-x-6">
                            <a href="#" className='py-2 px-3 border rounded-md' >
                                Sign In
                            </a>
                            <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                                Create an account
                            </a>
                        </div> */}

                        <div className=" flex space-x-6">
                            {!token ? (
                                <>
                                    <a
                                        href="#"
                                        className="py-2 px-3 border rounded-md"
                                        onClick={() => handleLogin()}
                                    >
                                        Sign In
                                    </a>
                                    <a
                                        href="#"
                                        className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                                        onClick={() => handleLogin()}
                                    >
                                        Create an account
                                    </a>
                                </>
                            ) : (
                                <a
                                    href="#"
                                    className="py-2 px-3 border rounded-md"
                                    onClick={logout}
                                >
                                    Log Out
                                </a>
                            )}
                        </div>

                    </div>
                )}
            </div>
        </nav>

    )
}
export default Navbar
