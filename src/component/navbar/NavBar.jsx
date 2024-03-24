// alter shif f  } for formating

import Link from "../Link";

const NavBar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/dashboard', name: 'Dashboard' },
        { id: 5, path: '/admin', name: 'Admin Panel' }
    ];

    return (

        <nav>
            <ul className="md:flex mr-3 gap-4 ml-1">
                {
                    routes.map(route =><Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>


    );
};

export default NavBar;