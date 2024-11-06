
import Image from "next/image";
import Logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <footer className="flex  place-content-evenly p-5  text-white">
            <div className="flex flex-col items-start max-w-xs">
            <Image
          src={Logo}
          alt=""
          className=""
          quality={100}
          priority
        />
                <p className="text-sm mb-4 leading-6">
                    Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let’s sweat, achieve, and conquer together!
                </p>
                <div className="flex gap-2">
                    <span className="w-7 h-7 flex items-center justify-center bg-gray-600 rounded-full text-white text-lg">F</span>
                    <span className="w-7 h-7 flex items-center justify-center bg-gray-600 rounded-full text-white text-lg">I</span>
                    <span className="w-7 h-7 flex items-center justify-center bg-gray-600 rounded-full text-white text-lg">T</span>
                </div>
            </div>
            <div className="flex gap-[9rem]">
                <div className="flex flex-col">
                    <h3 className="font-bold">Company</h3>
                    <ul>
                        <li>Business</li>
                        <li>Franchise</li>
                        <li>Partnership</li>
                        <li>Network</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold">About Us</h3>
                    <ul>
                        <li>Blogs</li>
                        <li>Security</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold">Contact</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>BMI Calculator</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
