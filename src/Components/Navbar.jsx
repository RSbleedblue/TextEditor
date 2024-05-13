import { IoIosSettings } from "react-icons/io";
import { FaPencilAlt, FaHome } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (item) => {
        setActiveItem(item === activeItem ? null : item);
    };
    
    return (
        <>
            <aside className="w-[16%] p-6 h-screen flex flex-col gap-2 items-center justify-between rounded-lg shadow-xl">
                <p className="text-4xl" style={{fontFamily:"cursive"}}>Edit<span className="text-rose-500">Me</span></p>
                <ul className="w-full items-center no-padding flex flex-col gap-10 justify-center">
                    <li className={`p-2 rounded-lg ${activeItem === 'home' ? ("bg-black text-white") : "text-gray-500"} hover:bg-black hover:shadow-xl hover:text-white text-lg font-semibold w-full flex gap-2 items-center justify-center transition-all cursor-pointer`} onClick={() => handleClick('home')}>
                        <FaHome />
                        <p>Home</p>
                    </li>
                    <li className={`p-2 rounded-lg ${activeItem === 'editor' ? ("bg-black text-white") : "text-gray-500"} hover:bg-black hover:shadow-xl hover:text-white text-lg font-semibold w-full flex gap-2 items-center justify-center transition-all cursor-pointer`} onClick={() => handleClick('editor')}>
                        <FaPencilAlt />
                        <p>Editor</p>
                    </li>
                </ul>
                <div className="w-full flex flex-col gap-10 justify-center">
                    <hr className="border border-solid border-black border-opacity-20 w-full"></hr>
                    <div className="flex gap-2 items-center justify-center  text-gray-500 ">
                        <IoIosSettings />
                        <div>
                            Settings
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default NavBar;
