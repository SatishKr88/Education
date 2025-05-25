import { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaBook, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navItems = [
        { label: "Home", icon: <FaHome /> },
        { label: "About", icon: <FaInfoCircle /> },
        { label: "Courses", icon: <FaBook /> },
        { label: "Login", icon: <FaSignInAlt /> },
        { label: "Register", icon: <FaUserPlus /> }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gradient-to-r from-orange-300 to-orange-100 shadow-lg" : "bg-gradient-to-r from-orange-100 to-yellow-50"}`}>
            <div className="flex justify-between items-center px-6 py-4 h-[10vh]">

                <div className="flex items-center space-x-3 animate-fadeIn">
                    <img
                        src="https://img.freepik.com/free-vector/education-logo-template_1107-22.jpg"
                        alt="logo"
                        className="h-12 w-12 object-cover rounded-full shadow-lg"
                    />
                    <span className="text-2xl font-extrabold text-orange-800 tracking-wide">
                        Edu<span className="text-red-500">Learn</span>
                    </span>
                </div>


                <button className="lg:hidden text-2xl text-orange-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <FaBars />
                </button>


                <ul className="hidden lg:flex items-center space-x-6 text-md font-semibold">
                    {navItems.map((item, idx) => (
                        <li
                            key={idx}
                            className={`flex items-center gap-2 text-red-600 hover:text-red-800 transition duration-300 cursor-pointer hover:scale-105
                                ${item.label === "Login" || item.label === "Register"
                                    ? "border border-red-600 px-3 py-1 rounded-full hover:bg-red-100"
                                    : ""
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
            {isMobileMenuOpen && (
                <ul className="lg:hidden flex flex-col items-start px-6 pb-4 bg-orange-100 space-y-3 animate-slideDown text-md">
                    {navItems.map((item, idx) => (
                        <li
                            key={idx}
                            className="flex items-center gap-3 text-red-700 hover:text-red-900 transition-all cursor-pointer"
                        >
                            {item.icon}
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}


function Home() {
    return (
        <>
            <div className="w-[100%] h-[100vh] bg-[#393D60] relative">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33375A" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,165.3C672,160,768,192,864,181.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>

                <div className="absolute bg-[#247564] h-[42vh] w-[41vh] left-[40%] top-[38%] rounded-lg">
                </div>

                <div className="absolute z-[1] left-[28%] top-[75%] bg-white h-[7vh] w-[35vh] rounded-lg flex items-center space-x-2 shadow-md px-1">
                    <div className="h-8 w-8 flex items-center justify-center border-2 border-orange-500 rounded-full bg-orange-50 ">
                        <span className="text-orange-600 text-xs font-semibold animate-bounce">90%</span>
                    </div>
                    <h1 className="text-gray-800 font-medium text-base">Completion Rate</h1>
                </div>

                <div className="absolute top-[15%] left-[10%]"><span className="text-white font-blod text-[5vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, atque!</span></div>

                <div className=" absolute left-[20%] top-[34%] z-1  w-40 h-40 "><span className="font-medium text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, porro. Lorem ipsum dolor sit amet.</span>

                    <div className="mt-4">
                        <a
                            href="#"
                            className="inline-block animate-bounce bg-[#22CB76] text-white font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 "
                        >
                            Email me
                        </a>
                    </div>
                </div>


                <div className="absolute top-[33%] left-[65%]">
                    <ul className="list-disc marker:text-[#22CB76] ">
                        <li className="text-white">Lorem, ipsum dolor.</li>
                        <li className="text-white">Lorem, ipsum dolor.</li>
                        <li className="text-white">Lorem, ipsum dolor.</li>
                        <li className="text-white">Lorem, ipsum dolor.</li>
                        <li className="text-white">Lorem, ipsum dolor.</li>
                        <li className="text-white">Lorem, ipsum dolor.</li>
                    </ul>
                </div>

                <div className="absolute top-[68%] left-[65%] z-1 flex ">
                    
                 <img src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?ga=GA1.1.1686216240.1747989762&semt=ais_hybrid&w=740" alt="profile1"
                 className="h-15 w-15 rounded-full border-2 border-orange-500 " />
                 <img src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?ga=GA1.1.1686216240.1747989762&semt=ais_hybrid&w=740" alt="profile1"
                 className="h-15 w-15 rounded-full border-2 border-orange-500" />
                 <img src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?ga=GA1.1.1686216240.1747989762&semt=ais_hybrid&w=740" alt="profile1"
                 className="h-15 w-15 rounded-full border-2 border-orange-500" />

                 <span className="ml-2 font-blod"> <p className="text-[#19D17B] text-[3vh] animate-bounce">200+ </p> <p className="text-white animate-bounce">Success Story</p></span>

                </div>



                <div className="absolute z-1 top-[25%] left-[26%]">
                    <img src="src/images/womanlaptop.png" alt="" />
                </div>
                <div className=" absolute inset-x-0 bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33375A" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,176C672,192,768,160,864,128C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>

            </div>
        </>
    )
}


function Homepage() {
    return (
        <>
            <Navbar />
            <Home />
        </>
    )
};
export default Homepage;