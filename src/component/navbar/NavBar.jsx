
import { useState } from 'react';
import Link from '../Link';
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";


const NavBar = () => {

    const [open, setOpen] = useState(false)


    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/dashboard', name: 'Dashboard' },
        { id: 5, path: '/admin', name: 'Admin Panel' }
    ];

    return (
        <nav>
            <div className='md:hidden ' onClick={() => setOpen(!open)}>
                {
                    open === true ?

                        <MdOutlineClose className="text-2xl ml-3"></MdOutlineClose>
                        :
                        <CiMenuBurger className="text-2xl ml-3"></CiMenuBurger>
                }



            </div>

            <ul className={
                `
                absolute  md:flex mr-3 gap-4duration-2000 md:static p-4 mt-4
                ${
                    open === true ? 'top-15' : '-top-60'
                }
                shadow-lg mx-4  bg-red-600 px-5
                `
            }
            >

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>
        </nav>
    );
};

export default NavBar;