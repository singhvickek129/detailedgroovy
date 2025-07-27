import React, { useState, useEffect } from 'react';

const NewArrivalsInfographic = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = [
        {
            id: 1,
            image: 'https://placehold.co/400x400/003F5C/CBEFB6?text=Zenith+Hoodie',
            name: 'Zenith Hoodie',
            price: '₹799',
            tag: 'New Arrival'
        },
        {
            id: 2,
            image: 'https://placehold.co/400x400/4D7EA8/F0F4F8?text=Street+Art+Tee',
            name: 'Street Art Tee',
            price: '₹349',
            tag: 'New Arrival'
        },
        {
            id: 3,
            image: 'https://placehold.co/400x400/8DB38B/003F5C?text=Rockstar+Denim',
            name: 'Rockstar Denim',
            price: '₹1199',
            tag: 'New Arrival'
        },
        {
            id: 4,
            image: 'https://placehold.co/400x400/CBEFB6/4D7EA8?text=Urban+Joggers',
            name: 'Urban Joggers',
            price: '₹699',
            tag: 'New Arrival'
        },
        {
            id: 5,
            image: 'https://placehold.co/400x400/4A4A4A/F0F4F8?text=Abstract+Shirt',
            name: 'Abstract Print Shirt',
            price: '₹599',
            tag: 'New Arrival'
        },
        {
            id: 6,
            image: 'https://placehold.co/400x400/6A5ACD/F0F4F8?text=Groovy+Sneakers',
            name: 'Groovy Sneakers',
            price: '₹1499',
            tag: 'New Arrival'
        },
        {
            id: 7,
            image: 'https://placehold.co/400x400/FF6B6B/FFFFFF?text=Chill+Shorts',
            name: 'Chill Lounge Shorts',
            price: '₹449',
            tag: 'New Arrival'
        },
        {
            id: 8,
            image: 'https://placehold.co/400x400/FFC300/003F5C?text=Vibe+Cap',
            name: 'Vibe Baseball Cap',
            price: '₹299',
            tag: 'New Arrival'
        },
        {
            id: 9,
            image: 'https://placehold.co/400x400/DAF7A6/4D7EA8?text=Graphic+Crewneck',
            name: 'Graphic Crewneck',
            price: '₹849',
            tag: 'New Arrival'
        },
        {
            id: 10,
            image: 'https://placehold.co/400x400/900C3F/CBEFB6?text=Bold+Backpack',
            name: 'Bold Urban Backpack',
            price: '₹999',
            tag: 'New Arrival'
        }
    ];

    const getVisibleSlides = () => {
        if (window.innerWidth >= 1280) return 4; // xl: show 4 cards (25%)
        if (window.innerWidth >= 1024) return 3; // lg: show 3 cards (33.333%)
        if (window.innerWidth >= 768) return 2;  // md: show 2 cards (50%)
        return 1; // sm and below: show 1 card (100%)
    };

    const nextSlide = () => {
        const visibleSlides = getVisibleSlides();
        setCurrentSlide((prev) => (prev >= products.length - visibleSlides ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const visibleSlides = getVisibleSlides();
        setCurrentSlide((prev) => (prev === 0 ? products.length - visibleSlides : prev - 1));
    };

    useEffect(() => {
        // Adjust currentSlide if window resizes and currentSlide goes out of bounds
        const handleResize = () => {
            const visibleSlides = getVisibleSlides();
            if (currentSlide > products.length - visibleSlides) {
                setCurrentSlide(Math.max(0, products.length - visibleSlides));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentSlide, products.length]);


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

                .carousel-track-products {
                    display: flex;
                    transition: transform 0.7s ease-in-out;
                }
                .product-card-slide {
                    flex-shrink: 0;
                    width: 100%; /* Default for mobile (1 card per row) */
                }
                @media (min-width: 640px) { /* sm */
                    .product-card-slide { width: 50%; } /* 2 cards per row */
                }
                @media (min-width: 768px) { /* md */
                    .product-card-slide { width: 50%; } /* 2 cards per row */
                }
                @media (min-width: 1024px) { /* lg */
                    .product-card-slide { width: 33.333%; } /* 3 cards per row */
                }
                @media (min-width: 1280px) { /* xl */
                    .product-card-slide { width: 25%; } /* 4 cards per row */
                }
                `}
            </style>
            <section className="py-12 md:py-16 bg-white rounded-xl shadow-lg mb-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 primary-dark">
                        ✨ New Arrivals: Fresh Drops
                    </h2>
                    <p className="text-center mb-10 primary-medium max-w-2xl mx-auto">
                        Explore our latest collection of urban wear, designed to keep you bold and groovy.
                        These are the newest additions, hand-picked for your style.
                    </p>

                    <div className="relative overflow-hidden">
                        <div
                            className="carousel-track-products"
                            style={{ transform: `translateX(-${currentSlide * (100 / getVisibleSlides())}%)` }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="product-card-slide p-2">
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                                        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {product.tag && (
                                                <span className="absolute top-2 left-2 bg-accent-green text-white text-xs font-bold px-2 py-1 rounded-full">
                                                    {product.tag}
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg primary-dark truncate mb-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-base text-gray-600">
                                                {product.price}
                                            </p>
                                            <button className="mt-4 w-full bg-primary-medium text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                                                Purchase Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-0 md:-left-4 -translate-y-1/2 bg-white/70 p-2 md:p-3 rounded-full text-xl md:text-2xl text-gray-800 hover:bg-white transition-all duration-300 shadow-lg focus:outline-none z-10"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-0 md:-right-4 -translate-y-1/2 bg-white/70 p-2 md:p-3 rounded-full text-xl md:text-2xl text-gray-800 hover:bg-white transition-all duration-300 shadow-lg focus:outline-none z-10"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewArrivalsInfographic;
