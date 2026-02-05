import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function Projects() {
    const router = useRouter();
    const projects = [
        {
            title: "ReactChess",
            description:"React Chess is a full-stack chess application built with the MERN stack (MongoDB, Express, React, Node.js). It features dynamic gameplay with move validation, AI opponents via Stockfish, user authentication with game history, real-time updates, and a responsive React UI. The project demonstrates modern full-stack development and interactive web app",
             key_features: [
  "AI-powered semantic matching based on goals, interests, and learning styles",
  "Community-based learning with goal and progress tracking",
  "Real-time chat with matched learning partners",
  "AI-generated conversation summaries with action items",
  "Secure authentication with protected routes",
  "FREE and PRO subscription tiers",
  "Responsive design for mobile and desktop",
  "Dark and Light theme support",
  "Smooth UI animations using Framer Motion",
  "Optimized performance with caching and batch queries",
  "Duplicate match prevention and smart match optimization",
  "Tag-based goal categorization and filtering"
],
   
            
            
            image: "/images/chess.jpg",
            link: "/project-details/reactChess",
        },
        {
            title: "meetsy-app",
            description:"An AI-Powered Community Learning Platform Meetsy is a community-driven learning platform where learners discover compatible study partners and achieve their goals together. Using intelligent AI matching, Meetsy connects people based on goals, interests, and learning styles—going far beyond simple keyword matching.",
                 
            key_features: [
  "AI-powered semantic matching based on goals, interests, and learning intent",
  "Community-based learning with focused groups and shared objectives",
  "Real-time chat with matched learning partners",
  "AI-generated conversation summaries with key insights and action items",
  "Goal and progress tracking with milestones",
  "Secure authentication with protected routes",
  "FREE and PRO subscription tiers",
  "Fully responsive modern UI with dark and light mode support",
  "Performance optimized using caching, batch queries, and duplicate match prevention",
  "Production-ready, scalable full-stack architecture"
],

            
            image: "/images/meetsy.jpg",
            link: "/project-details/meetsy",
        },
        {
            title: "Stock Trading DashBoard",
            description:"A full-stack Zerodha Clone built with the MERN stack, featuring JWT authentication, portfolio management, stock buy/sell simulation, and transaction tracking. Uses MVC architecture, bcrypt for security, **Mongoose** for data modeling, and **Tailwind CSS** for a responsive, real-world trading UI.",
                 
            key_features: [
  "Secure user registration and login using JWT authentication",
  "Real-time portfolio and market dashboard",
  "Simulated buy and sell order placement",
  "Transaction history and order tracking",
  "Password hashing and secure session management",
  "Responsive and intuitive user interface",
  "Clean RESTful APIs following MVC architecture",
  "Scalable backend structure for financial applications",
  "Real-world inspired trading workflows",
  "Production-ready full-stack implementation"
],
            
            
            
            image: "/images/trading.jpg",
            link: "/project-details/trading",
        },
        {
            title: "Vintage Mac Portfolio",
            description: "A retro-inspired portfolio that recreates the classic Macintosh System 7 / Mac OS 9 desktop experience using modern web technologies. This project blends nostalgic UI aesthetics with smooth animations, interactivity, and responsive design.",
            
  key_features: [
    "Classic Mac Desktop UI with vintage menu bar, draggable windows, desktop icons, and system-style interactions",
    "Modern visual enhancements including smooth animations, subtle motion effects, and a translucent dock",
    "Interactive widgets such as profile and status panels embedded within the desktop environment",
    "Custom intro screen inspired by classic Mac boot animations with a minimal nostalgic loading experience",
    "Fully responsive and performant design optimized for desktop and mobile devices"
  ],
            
            
            image: "/images/vintage.jpg",
            link: "/project-details/vintage",
            slug: "interviewbuddy"
        }
    ];

    return (
        <ReviewOnScroll>
            <Section id="projects">
                <Container>
                    <h2 className="section-title mb-16">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass-card hover-lift rounded-2xl flex flex-col 
                                           border-white/10 overflow-hidden 
                                           w-full"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 
                                                   transition-transform duration-500"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t 
                                                   from-black/80 via-black/20 to-transparent"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>


                                    <div className="mt-auto pt-4">
                                        <button
                                            onClick={() => router.push(project.link)}
                                            className="btn-secondary w-full flex justify-center items-center gap-2 py-3 group cursor-pointer"
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Container>
            </Section>
        </ReviewOnScroll>
    );
}

export default Projects;