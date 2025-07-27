import React, { useState, useEffect } from 'react';

const HeroInfographic = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: 'https://placehold.co/1600x900/003F5C/CBEFB6?text=Urban+Monk',
            title: 'Unleash Your Inner Zen',
            description: 'Discover tranquility in our Urban Monk collection. Perfect for mindful living.',
            buttonText: 'Shop Urban Monk',
            link: '#urban-monk'
        },
        {
            id: 2,
            image: 'https://placehold.co/1600x900/4D7EA8/F0F4F8?text=Urban+Streets',
            title: 'Own the Urban Jungle',
            description: 'Bold designs for the concrete jungle. Define your style with Urban Streets.',
            buttonText: 'Explore Streetwear',
            link: '#urban-streets'
        },
        {
            id: 3,
            image: 'https://placehold.co/1600x900/8DB38B/003F5C?text=Urban+Animals',
            title: 'Wild at Heart',
            description: 'Embrace your primal spirit with our unique Urban Animals collection. Stand out.',
            buttonText: 'See Wild Styles',
            link: '#urban-animals'
        },
        {
            id: 4,
            image: 'https://placehold.co/1600x900/CBEFB6/4D7EA8?text=Rockstar',
            title: 'Live Loud, Dress Louder',
            description: 'Channel your inner icon. The Rockstar collection is here to make a statement.',
            buttonText: 'Discover Rockstar',
            link: '#rockstar'
        },
        {
            id: 5,
            image: 'https://placehold.co/1600x900/4A4A4A/F0F4F8?text=Kids',
            title: 'Adventure Awaits for Kids',
            description: 'Comfortable and vibrant wear for the next generation of Groovy Streetz explorers.',
            buttonText: 'Shop Kids',
            link: '#kids'
        },
        {
            id: 6,
            image: 'https://placehold.co/1600x900/6A5ACD/F0F4F8?text=Women',
            title: 'Empower Your Style',
            description: 'Fashion-forward pieces designed for the modern woman. Express yourself boldly.',
            buttonText: 'Shop Women',
            link: '#women'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #F0F4F8; /* Very Light Blue/Gray */
                    color: #4A4A4A;
                }
                .primary-dark { color: #003F5C; } /* Dark Blue */
                .primary-medium { color: #4D7EA8; } /* Medium Blue */
                .accent-green { color: #8DB38B; } /* Greenish Blue */
                .bg-light-blue { background-color: #CBEFB6; } /* Light Green */

                .carousel-track {
                    display: flex;
                    transition: transform 0.7s ease-in-out;
                }
                .carousel-slide {
                    flex: 0 0 100%;
                }
                `}
            </style>
            <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden rounded-xl shadow-lg">
                <div
                    className="carousel-track h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <h1>Hero sec</h1>

                    {slides.map((slide) => (
                        <div key={slide.id} className="carousel-slide relative h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl max-w-2xl mb-8">
                                    {slide.description}
                                </p>
                                <a
                                    href={slide.link}
                                    className="inline-block bg-accent-green text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    {slide.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 p-3 rounded-full text-2xl text-gray-800 hover:bg-white transition-all duration-300 shadow-md focus:outline-none"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 p-3 rounded-full text-2xl text-gray-800 hover:bg-white transition-all duration-300 shadow-md focus:outline-none"
                >
                    ❯
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                        ></button>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HeroInfographic;
