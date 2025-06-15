import { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaBook, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";
import { FaStar, FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate, FaClock, FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



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
        { label: "Home", href: "/", icon: <FaHome /> },
        { label: "About", href: "/about", icon: <FaInfoCircle /> },
        { label: "Courses", href: "/courses", icon: <FaBook /> },
        { label: "Login", href: "/login", icon: <FaSignInAlt /> },
        { label: "Register", href: "/register", icon: <FaUserPlus /> }
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
                        Edu<span className="text-red-500">Nova</span>
                    </span>
                </div>


                <button className="lg:hidden text-2xl text-orange-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <FaBars />
                </button>

                <ul className="hidden lg:flex items-center space-x-6 text-md font-semibold">
                    {navItems.map((item, idx) => (
                        <li
                            key={idx}
                        >
                            <Link
                                to={item.href}

                                className={`flex items-center gap-2 text-red-600 hover:text-red-800 transition duration-300 cursor-pointer hover:scale-105
                                ${item.label === "Login" || item.label === "Register"
                                        ? "border border-red-600 px-3 py-1 rounded-full hover:bg-red-100"
                                        : ""
                                    }`}
                            >

                                {item.icon}
                                {item.label}

                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {
                isMobileMenuOpen && (
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
                )
            }
           
        </nav >


    );
}


function Home() {
    return (
        <section className="relative bg-gradient-to-b from-[#1F1C2C] via-[#2C2D3C] to-[#3E3A5A] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">

            <div className="absolute top-0 left-0 w-64 h-64 bg-green-400/10 blur-3xl rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22CB76]/10 blur-3xl rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20 relative z-10">

                <div className="space-y-8">
                    <span className="inline-flex items-center gap-3 bg-[#22CB76]/20 text-[#22CB76] font-bold px-4 py-1 rounded-full text-sm tracking-widest uppercase shadow-md">
                        <FaUserGraduate /> Top-Tier Learning Hub
                    </span>

                    <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                        Transform Your Career with <span className="text-[#22CB76]">EduNova</span>
                    </h1>

                    <p className="text-gray-300 text-lg max-w-xl">
                        Explore curated tech courses, get mentored by industry leaders, and join a thriving global student community—all at your fingertips.
                    </p>


                    <div className="grid grid-cols-2 gap-6 max-w-md pt-4">
                        <div className="bg-white/10 rounded-xl px-4 py-5 text-center shadow-inner backdrop-blur-sm">
                            <h3 className="text-3xl font-bold text-green-300">10K+</h3>
                            <p className="text-sm text-gray-300">Active Learners</p>
                        </div>
                        <div className="bg-white/10 rounded-xl px-4 py-5 text-center shadow-inner backdrop-blur-sm">
                            <h3 className="text-3xl font-bold text-green-300">95%</h3>
                            <p className="text-sm text-gray-300">Placement Success</p>
                        </div>
                    </div>


                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg">
                            🎓 Start Learning Today
                        </button>
                        <button className="text-white border border-green-400 px-6 py-3 rounded-full hover:bg-green-600/20 transition">
                            📚 Explore Programs
                        </button>
                    </div>
                </div>


                <div className="relative w-full">
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl">
                        <img
                            src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?ga=GA1.1.1686216240.1747989762&semt=ais_hybrid&w=740"
                            alt="Online Learning"
                            className="w-full rounded-2xl shadow-lg"
                        />
                        {/* <div className="absolute -bottom-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                            💼 Job-Ready in Weeks
                        </div> */}
                    </div>


                    {/* <div className="absolute top-4 right-0 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-3 rounded-xl flex items-center gap-4 shadow-xl">
                        <FaStar className="text-yellow-400 text-lg" />
                        <div>
                            <p className="text-sm font-semibold">4.9 / 5.0</p>
                            <span className="text-xs text-gray-300">Avg Course Rating</span>
                        </div>
                    </div> */}
                </div>
            </div>


            <div className="mt-24 max-w-5xl mx-auto text-center px-6">
                <TestimonialSlider />
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "After completing EduLearn’s Fullstack track, I landed my dream job as a software engineer at a top startup. The mentorship made all the difference!",
        author: "Arjun Verma, Fullstack Developer",
    },
    {
        quote:
            "EduLearn’s React course helped me build real-world projects and boost my confidence. The community was incredibly supportive.",
        author: "Priya Sharma, React Developer",
    },
    {
        quote:
            "The hands-on experience and career guidance I received were unmatched. I transitioned into tech from a non-coding background in 3 months.",
        author: "Daniel Kim, Frontend Engineer",
    },
];

function TestimonialSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <div className="mt-24 max-w-5xl mx-auto px-6 text-center">
            <Slider {...settings}>
                {testimonials.map((t, idx) => (
                    <div key={idx} className="px-4">
                        <FaQuoteLeft className="text-4xl text-green-400 mx-auto mb-4" />
                        <p className="text-xl text-gray-200 italic max-w-3xl mx-auto">{`"${t.quote}"`}</p>
                        <p className="mt-4 text-green-300 font-medium">— {t.author}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16 px-6 sm:px-12 lg:px-24">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg className="absolute right-0 top-0 opacity-10 w-96 h-96" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="100" fill="#FDBA74" />
                </svg>
                <svg className="absolute left-0 bottom-0 opacity-10 w-96 h-96" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="100" fill="#FACC15" />
                </svg>
            </div>


            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

                <div className="flex-1 space-y-6">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                        #1 Rated Learning Platform
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Empower Your <span className="text-orange-500">Future</span> with EduNova
                    </h2>

                    <p className="text-lg text-gray-700 max-w-xl">
                        Learn from top instructors at your own pace, on any device. We make
                        education flexible, personalized, and rewarding.
                    </p>

                    <ul className="space-y-2 text-gray-800">
                        <li className="flex items-center gap-3">
                            <FaStar className="text-yellow-400" />
                            10,000+ learners trust EduNova
                        </li>
                        <li className="flex items-center gap-3">
                            <FaChalkboardTeacher className="text-green-500" />
                            Project-based curriculum with real-world outcomes
                        </li>
                    </ul>
                </div>


                <div className="flex-1">
                    <div className="backdrop-blur-md bg-white/70 p-8 rounded-3xl border border-orange-200 shadow-xl text-center">
                        <div className="relative inline-block">
                            <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                                New
                            </span>
                            <h3 className="text-3xl font-bold text-orange-700">🔥 20% OFF</h3>
                        </div>
                        <p className="mt-2 text-gray-800 text-lg">on all new premium courses</p>

                        <button className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                            🚀 Start Learning Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CourseList() {
    const courses = [
        {
            title: "Master JavaScript from Scratch",
            instructor: "Rahul Yadav",
            isNew: true,
            level: "Intermediate",
            duration: "4 Weeks",
            rating: 4.5,
        },
        {
            title: "React for Beginners",
            instructor: "Rahul Yadav",
            isNew: true,
            level: "Beginner",
            duration: "6 Weeks",
            rating: 4.0,
        },
        {
            title: "Advanced CSS Animations",
            instructor: "Rahul Yadav",
            isNew: true,
            level: "Advanced",
            duration: "3 Weeks",
            rating: 4.8,
        },
        {
            title: "Fullstack Web Development",
            instructor: "Rahul Yadav",
            isNew: true,
            level: "All Levels",
            duration: "8 Weeks",
            rating: 4.7,
        },
    ];

    const generateImageUrl = (title) => {
        return `https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1686216240.1747989762&semt=ais_hybrid&w=740`;
    };

    const getLevelColor = (level) => {
        switch (level) {
            case "Beginner":
                return "from-green-400 to-green-600";
            case "Intermediate":
                return "from-yellow-400 to-yellow-600";
            case "Advanced":
                return "from-red-400 to-red-600";
            default:
                return "from-blue-400 to-blue-600";
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={"star-full-" + i} className="text-yellow-400" />);
        }
        if (halfStar) {
            stars.push(
                <FaStar
                    key="star-half"
                    className="text-yellow-400"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                />
            );
        }

        while (stars.length < 5) {
            stars.push(
                <FaStar
                    key={"star-empty-" + stars.length}
                    className="text-gray-300"
                />
            );
        }
        return stars;
    };

    return (
        <section
            aria-label="Available Courses"
            className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-[#f9f9ff] via-[#edf0ff] to-[#e7faff]"
        >
            <h1 className="text-5xl font-extrabold text-indigo-800 mb-12 text-center tracking-wide">
                🚀 Elevate Your Skills with Our Courses
            </h1>
            <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.map(({ title, instructor, isNew, level, duration, rating }, idx) => (
                    <article
                        key={idx}
                        className="group relative bg-white/70 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl overflow-hidden hover:shadow-indigo-300 hover:scale-[1.04] transform transition duration-500"
                        tabIndex={0}
                        aria-labelledby={`course-title-${idx}`}
                        aria-describedby={`course-desc-${idx}`}
                    >
                        {isNew && (
                            <span
                                className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full animate-bounce shadow-md z-20"
                                title="New Course"
                            >
                                NEW
                            </span>
                        )}
                        <span
                            className={`absolute top-4 right-4 bg-gradient-to-r ${getLevelColor(level)} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-20`}
                            title={`Course Level: ${level}`}
                        >
                            {level}
                        </span>

                        <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                            <img
                                src={generateImageUrl(title)}
                                alt={`Preview of course titled: ${title}`}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl"></div>
                        </div>

                        <div className="p-6 space-y-3">
                            <h2
                                id={`course-title-${idx}`}
                                className="text-2xl font-bold text-indigo-900"
                            >
                                {title}
                            </h2>

                            <div
                                id={`course-desc-${idx}`}
                                className="flex items-center text-gray-600 text-sm gap-3"
                            >
                                <FaUserGraduate className="text-teal-500" />
                                <span>{instructor}</span>
                            </div>

                            <div className="flex items-center text-gray-500 text-sm gap-3">
                                <FaClock className="text-orange-500" />
                                <span>{duration}</span>
                            </div>

                            <div
                                aria-label={`Course rating: ${rating} out of 5 stars`}
                                className="flex items-center gap-1"
                            >
                                {renderStars(rating)}
                                <span className="text-gray-500 ml-2 text-xs font-medium">
                                    ({rating.toFixed(1)})
                                </span>
                            </div>

                            <button
                                type="button"
                                className="relative w-full py-3 font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform hover:scale-105 active:scale-95"
                                onClick={() => alert(`Enrolled in: ${title}`)}
                            >
                                <span className="relative z-10">✨ Enroll Now</span>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity"
                                ></span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function FeaturedMentors() {
    const mentors = [
        {
            name: "Dr. Aisha Yadav",
            title: "AI Researcher | MIT",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Ravi Mehta",
            title: "Full Stack Lead | Google",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Sonia Yadav",
            title: "UX Designer | Adobe",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
        },
    ];

    return (
        <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🌟 Meet Our Mentors</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {mentors.map((mentor, idx) => (
                    <div key={idx} className="text-center bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-orange-800 mt-4">{mentor.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{mentor.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function WhyChooseUs() {
    const features = [
        {
            title: "Verified Certifications",
            desc: "Earn industry-recognized certificates on completion.",
            icon: <FaUserGraduate className="text-green-500 text-3xl" />,
        },
        {
            title: "Flexible Learning",
            desc: "Learn at your own pace, anytime and anywhere.",
            icon: <FaClock className="text-blue-500 text-3xl" />,
        },
        {
            title: "Career Support",
            desc: "Resume reviews, mock interviews, and placement help.",
            icon: <FaChalkboardTeacher className="text-purple-500 text-3xl" />,
        },
    ];

    return (
        <section className="bg-gradient-to-br from-orange-50 to-yellow-100 py-20 px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">🚀 Why Choose EduNova?</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {features.map((f, idx) => (
                    <div key={idx} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                        <div className="mb-4 flex justify-center">{f.icon}</div>
                        <h3 className="text-lg font-semibold text-orange-700">{f.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function SuccessStories() {
    const stories = [
        {
            name: "Arjun Mehta",
            job: "Frontend Engineer @ Amazon",
            quote: "EduLearn helped me go from zero to offer letter in 3 months!",
            image: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        {
            name: "sonia Yadv",
            job: "Data Analyst @ TCS",
            quote: "Practical courses and mock interviews were game-changers.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            name: "Ishika Gupta",
            job: "Backend Developer @ Infosys",
            quote: "Structured learning path made it easy to stay consistent.",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🎯 Success Stories</h2>
            <div className="max-w-4xl mx-auto">
                <Slider {...settings}>
                    {stories.map((s, idx) => (
                        <div key={idx} className="px-4">
                            <div className="bg-orange-50 p-6 rounded-xl shadow-md flex items-start gap-4">
                                <img
                                    src={s.image}
                                    alt={s.name}
                                    className="w-16 h-16 object-cover rounded-full"
                                />
                                <div>
                                    <p className="text-sm italic text-gray-700">“{s.quote}”</p>
                                    <p className="mt-2 font-semibold text-orange-800">{s.name}</p>
                                    <p className="text-xs text-gray-500">{s.job}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-orange-100 to-yellow-50 text-gray-800 pt-10 pb-6 border-t border-orange-200 ">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center mb-4 space-x-2">
                        <img
                            src="https://img.freepik.com/free-vector/education-logo-template_1107-22.jpg"
                            alt="logo"
                            className="h-10 w-10 object-cover rounded-full shadow-md"
                        />
                        <span className="text-2xl font-extrabold text-orange-800">
                            Edu<span className="text-red-500">Nova</span>
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">
                        Empowering learners everywhere. Join us in the journey of education and self-growth.
                    </p>
                </div>


                <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-700">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-red-600 transition">Home</li>
                        <li className="hover:text-red-600 transition">About</li>
                        <li className="hover:text-red-600 transition">Courses</li>
                        <li className="hover:text-red-600 transition">Login</li>
                        <li className="hover:text-red-600 transition">Register</li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-700">Contact</h4>
                    <p className="text-sm">12/1/H/kolkata<br />Knowledge City, ED 1010</p>
                    <p className="text-sm mt-2">Email: support@edulearn.com</p>
                    <p className="text-sm">Phone: +917504567890</p>
                </div>


                <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-700">Stay Updated</h4>
                    <form className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm transition">
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-4 text-xl text-orange-600">
                        <a href="#"><i className="fab fa-facebook-f hover:text-blue-600"></i></a>
                        <a href="#"><i className="fab fa-twitter hover:text-blue-400"></i></a>
                        <a href="#"><i className="fab fa-instagram hover:text-pink-500"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in hover:text-blue-700"></i></a>
                    </div>
                </div>
            </div>


            <div className="text-center text-sm mt-10 text-gray-500 border-t border-orange-200 pt-4">
                © {new Date().getFullYear()} EduLearn. All rights reserved.
            </div>
        </footer>
    );
}


function Homepage() {
    return (
        <>
            <Navbar />
            <Home />
            <WhyChooseUs />
            <Hero />
            <CourseList />
            <FeaturedMentors />
            <SuccessStories />
            <Footer />
        </>
    )
};
export default Homepage;