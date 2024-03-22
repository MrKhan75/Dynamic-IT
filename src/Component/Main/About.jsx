import { useState } from "react";
import SecondNav from "./SecondNav";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


const About = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Tailwind', path: '/tailwind' },
        { id: 2, name: 'JavaScript', path: '/about' },
        { id: 3, name: 'React JS', path: '/services' },
        { id: 3, name: 'Next JS', path: '/services' },
        { id: 4, name: 'Firebase', path: '/blog' },
        { id: 5, name: 'MongoDB', path: '/contact' }
      ];

    return (
        <div>
            <div className="aboutSection my-20">
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <AiOutlineMenuFold className="text-2xl"></AiOutlineMenuFold> : <IoMdClose className="text-2xl"></IoMdClose>

                    }
                    
                </div>
                <ul className={`flex duration-2000 flex-col md:flex-row justify-center gap-1 md:gap-10 absolute md:static px-5 rounded-md ${open ? 'hidden' : ''}`}>
                    {
                        // routes.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                        routes.map(route => <SecondNav key={route.id} list={route}></SecondNav>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default About;