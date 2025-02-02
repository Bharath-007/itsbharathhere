import { createBrowserRouter } from 'react-router-dom';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Portfolio from '@/pages/Portfolio';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Portfolio />, // Portfolio is the layout component
        children: [
            {
                index: true, // This defines the root route for this layout, which would render Home
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/skills',
                element: <Skills />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

