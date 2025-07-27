import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const NewArrivalsComponentInfographic = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // To store the Chart.js instance

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy existing chart before re-rendering
        }

        const ctx = chartRef.current.getContext('2d');

        const defaultTooltipCallback = {
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                                return label.join(' ');
                            } else {
                                return label;
                            }
                        }
                    }
                }
            }
        };

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Mobile (<640px)',
                    'Small (640px - 767px)',
                    'Medium (768px - 1023px)',
                    'Large (1024px - 1279px)',
                    'Extra Large (≥1280px)'
                ],
                datasets: [{
                    label: 'Cards Visible',
                    data: [1, 2, 2, 3, 4],
                    backgroundColor: '#4D7EA8',
                    borderRadius: 5
                }]
            },
            options: {
                indexAxis: 'y',
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { display: false },
                        ticks: { precision: 0 }
                    },
                    y: {
                        grid: { display: false },
                        ticks: {
                            callback: function(value, index, values) {
                                let label = this.getLabelForValue(value);
                                if (label.length > 16) {
                                    return label.split(' ').reduce((acc, word) => {
                                        if (acc.length === 0 || (acc[acc.length - 1] + ' ' + word).length > 16) {
                                            acc.push(word);
                                        } else {
                                            acc[acc.length - 1] += ' ' + word;
                                        }
                                        return acc;
                                    }, []);
                                }
                                return label;
                            }
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    ...defaultTooltipCallback.plugins
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy(); // Cleanup on component unmount
            }
        };
    }, []); // Empty dependency array means this runs once on mount

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
                .border-medium-blue { border-color: #4D7EA8; }

                .chart-container {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    height: 300px;
                    max-height: 400px;
                }
                @media (min-width: 768px) {
                    .chart-container {
                        height: 350px;
                    }
                }
                .flow-arrow {
                    font-size: 2.5rem;
                    line-height: 1;
                    text-align: center;
                    margin: 0.5rem 0;
                    color: #8DB38B;
                }
                .flow-box {
                    border: 2px solid #4D7EA8;
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    background-color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    font-weight: 600;
                    color: #003F5C;
                }
                .flow-list {
                    text-align: left;
                    margin-top: 1rem;
                    font-weight: normal;
                    color: #4A4A4A;
                }
                .flow-list li {
                    margin-bottom: 0.5rem;
                }
                `}
            </style>

            <div className="container mx-auto p-4 md:p-8 max-w-7xl">

                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold primary-dark">New Arrivals Component: Infographic Breakdown</h1>
                    <p className="mt-4 text-lg primary-medium">A visual guide to understanding the data, responsiveness, and carousel logic.</p>
                </header>

                {/* Section 1: Product Data Structure */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">1. Product Data Structure</h2>
                    <p className="text-center mb-8 primary-medium">Each product card is populated using a structured JavaScript object. This ensures consistency and easy management of product details.</p>

                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="flow-box w-full max-w-md text-left">
                            <span className="font-bold">Product Object Example:</span>
                            <ul className="flow-list list-disc list-inside">
                                <li><span className="font-semibold">id:</span> Unique identifier (Number)</li>
                                <li><span className="font-semibold">image:</span> URL for product image (String)</li>
                                <li><span className="font-semibold">name:</span> Product title (String)</li>
                                <li><span className="font-semibold">price:</span> Product price (String, e.g., "₹799")</li>
                                <li><span className="font-semibold">tag:</span> Optional tag (String, e.g., "New Arrival")</li>
                            </ul>
                        </div>
                        <p className="text-center text-sm text-gray-600 mt-4">The `products` array holds 10 such objects, defining the content for the carousel.</p>
                    </div>
                </section>

                {/* Section 2: Responsive Carousel Logic */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">2. Responsive Card Display</h2>
                    <p className="text-center mb-8 primary-medium">The number of visible product cards adjusts automatically based on the screen width, ensuring optimal viewing on all devices.</p>

                    <div className="chart-container h-72 md:h-80">
                        <canvas ref={chartRef}></canvas>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-6">This bar chart illustrates how the `getVisibleSlides()` function dynamically determines how many product cards are shown per row at different screen breakpoints.</p>
                </section>

                {/* Section 3: Carousel Navigation Flow */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">3. Carousel Navigation Flow</h2>
                    <p className="text-center mb-8 primary-medium">User interaction with the navigation buttons triggers state updates, smoothly transitioning the product cards.</p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        {/* Start */}
                        <div className="flow-box w-full max-w-sm">
                            User Clicks Nav Button
                            <p className="text-sm font-normal text-gray-500 mt-1">(Prev ❮ or Next ❯)</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>

                        {/* Update Current Slide */}
                        <div className="flow-box w-full max-w-md">
                            `setCurrentSlide()` Called
                            <p className="text-sm font-normal text-gray-500 mt-1">Updates `currentSlide` state variable</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>

                        {/* Transform Calculation */}
                        <div className="flow-box w-full max-w-lg">
                            Carousel `transform` Style Updates
                            <p className="text-sm font-normal text-gray-500 mt-1">`translateX` value recalculated based on `currentSlide` and visible cards.</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>

                        {/* Smooth Transition */}
                        <div className="flow-box w-full max-w-md">
                            Product Cards Slide Smoothly
                            <p className="text-sm font-normal text-gray-500 mt-1">CSS `transition` property provides animation.</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center mt-12 pt-8 border-t border-medium-blue">
                    <p className="text-sm primary-medium">This infographic provides a clear and actionable overview of the `NewArrivalsInfographic` component for your development team.</p>
                </footer>

            </div>
        </>
    );
};

export default NewArrivalsComponentInfographic;
