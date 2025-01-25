import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-12">
            <div className="">
                  {/* <div className="flex-1 bg-[#1F2937] text-white text-center p-16 space-y-2">
                        <h3 className="text-3xl font-semibold">Contact Us</h3>
                        
                 </div> */}

                  <div className="bg-[#111827] text-white p-12 text-center ">
                    <h1 className="text-5xl font">The Spectator</h1>
                    <p className="my-2">
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 
                         
                    </p>
                      <div className="flex gap-4 text-2xl justify-center pt-3">
                        <FaFacebook className=" hover:text-pink-400"/>
                        <FaInstagram className=" hover:text-pink-400"/>
                        <FaTwitter className=" hover:text-pink-400"/>
                        <FaYoutube className=" hover:text-pink-400"/>
                        <FaLinkedinIn className=" hover:text-pink-400"/>
                     </div> 
                    
                     <p className="mt-10 text-gray-400">Copyright © {new Date().getFullYear()} - All right reserved by The Spectator</p>   
                 </div>
            </div>
            {/* <footer className="footer footer-center bg-[#111827]  text-white p-4">
                <aside>
                   
                </aside>
            </footer> */}
        </div>
    );
};

export default Footer;