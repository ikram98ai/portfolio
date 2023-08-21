import hero from "../assets/images/hero.png";
import { FaFacebook,FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md"  
import {IoLogoWhatsapp} from "react-icons/io"  
    
const Hero = () =>{

    
    const social_media = [
        {icon: <FaGithub/>,link:"https://github.com/ikram9820/"},
        {icon: <FaLinkedin/>,link:"https://www.linkedin.com/in/ikram-khan-929658249/"},
        {icon: <FaTwitter/>,link:"https://twitter.com/Ikram9820"},
        {icon: <FaFacebook/>,link:"https://web.facebook.com/profile.php?id=100094423407781"},
        {icon: <IoLogoWhatsapp/>, link:"https://wa.me/+923020185186"},
        {icon: <MdEmail/>, link: "mailto:ikkhan.se@gmail.com"}
    ]



    return(
        <section id="home"
        className="min-h-screen flex pt-10 gap-10 px-7 md:flex-row flex-col items-center"
        >
            <img src={hero} alt="Ikram's Photo" className="w-96 h-96 rounded-full object-cover" />

            <div className="felx-1 flex-col">
                <h1 className="text-cyan-600 md:text-6xl text-5xl">Hello!</h1>
                <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white fond-bold">My Name Is Ikram Khan</h1>
                <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-400">FullStack Developer</h4>

                
                <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
                    {social_media.map((icon,i:number)=>(
                        <li key={i} className="hover:text-white cursor-pointer">
                            <a href={icon.link}>{icon.icon}</a>
                        </li>
                    ))}
                </ul>
                
            </div>
        

        </section>
    )
};

export default Hero;



  
    
