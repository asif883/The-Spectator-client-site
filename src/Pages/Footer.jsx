import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-12">
            <div className="flex ">
                  <div className="flex-1 bg-[#1F2937] text-white text-center p-16 space-y-2">
                        <h3 className="text-3xl font-semibold">Contact Us</h3>
                        <p>
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                         
                        </p>
                 </div>

                  <div className="flex-1 bg-[#111827] text-white p-16 text-center space-y-2">
                      <h2 className="text-3xl font-semibold">Follow Us</h2> 
                      <p> Join us on social media</p> 
                      <div className="flex gap-4 text-3xl justify-center pt-3">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>
                     </div>    
                 </div>
            </div>
            <footer className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by The Spectator</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;