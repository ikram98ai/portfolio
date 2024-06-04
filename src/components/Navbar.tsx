import { useState, useEffect } from "react";

import {BiMenu} from "react-icons/bi";

interface MenuLink  {
    name:string
    link:string

}
const menuLinks:MenuLink[] = [
   { name:"HOME", link:"#home"},
   { name:"ABOUT", link:"#about"},
   { name:"SKILLS", link:"#skills"},
   { name:"Projects", link:"#projects"},
   { name:"Certificates", link:"#certificates"},
   { name:"Resume", link:"https://docs.google.com/document/d/11t17PEAS97lNW2kPyLYI4koR2Vk-gDFrVuJ7qDnizwg/edit?usp=sharing&resourcekey=0-PmGhJH61BjsOI_1duwLFFg"},


]

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    });

    return(
        <nav
        className={`fixed w-full z-[999] justify-between flex  ${
            sticky ? "bg-black/60 text-gray-100" : "text-white"
          }`}
        >
            <h4 className="text-xl font-bold mx-7 my-3">Ikram</h4>

            <ul
             className={`${
                sticky ? "md:bg-white/0" : "bg-black"
              } text-gray-100 hidden px-10 font-medium rounded-bl-full items-center md:flex gap-16 py-5 text-lg`}      
            >
                {menuLinks.map((menu:MenuLink,i:number) =>(
                    <li key={i} className="hover:text-cyan-600" >
                        <a href={menu?.link} >{menu?.name}</a>
                    </li>
                ))}
            </ul>
            
            <BiMenu
                onClick = {() =>setOpen(!open)}
                className ={`z-[999] ${open ? "text-gray-100" : "text-gray-100"} text-3xl md:hidden m-5`}
            />
            <ul className={` flex flex-col justify-center gap-10 items-center text-lg md:hidden text-gray-100 absolute w-2/3 h-screen px-7 font-medium bg-black/80 top-0 duration-300 ${open ? "right-0" : "right-[-999px]" }`}>
                {menuLinks?.map((menu:MenuLink,i:number)=>(
                    <li key={i}
                    onClick={() => setOpen(false)}
                    className="hover:text-cyan-600" >
                        <a href={menu.link}>{menu.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
