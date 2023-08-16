import {
    AiOutlineMail,
    AiOutlineWhatsApp,
    AiFillEnvironment,
  } from "react-icons/ai";
  const Contact = () => {
    const contact_info = [
      { icon: <AiOutlineMail />, text: "ikram9820khan@gmail.com",link:"mailto:Ikram9820khan@gmail.com" },
      { icon: <AiOutlineWhatsApp />, text: "+923020185186",link:"https://wa.me/+923020185186" },
      { icon: <AiFillEnvironment />, text: "Airport Road, Quetta, Pakistan" },
    ];
  
    return (
      <section id="contact" className="py-10 px-3 text-white text-center mt-8">
        <div className="text-4xl font-semibold flex gap-2 justify-center">
          <h3>Contact</h3>
          <h3 className="text-cyan-600">Me</h3>
        </div>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div
          className="mt-16 flex md:flex-row flex-col
           gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
        
          <ul className="flex flex-col gap-7 list-none">
            {contact_info?.map((contact, i) => (
              <li
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                   {contact.icon}
                </div>
                <div className="md:text-base text-sm break-words">
                <a href={contact.link}>{contact.text}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Contact;
  