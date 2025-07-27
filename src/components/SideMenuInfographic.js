import React from 'react';

const SideMenuInfographic = () => {
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
            {/* Note: In a full React application, Tailwind CSS CDN and Google Fonts links would typically be in public/index.html or the main App.js for global loading. */}

            <div className="container mx-auto p-4 md:p-8 max-w-7xl">

                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold primary-dark">Groovy Streetz: Side Menu Bar Workflow</h1>
                    <p className="mt-4 text-lg primary-medium">LIVE BOLD, LIVE GROOVY</p>
                    <p className="mt-2 text-md text-gray-600">A detailed guide to the navigation and content structure of the mobile side menu, ensuring a seamless user experience.</p>
                </header>

                {/* Main Flowchart Section */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">Side Menu Structure & Navigation Flow</h2>
                    <p className="text-center mb-8 primary-medium">This flowchart illustrates how the side menu is organized, from the entry point to its various functional sections.</p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        {/* Entry Point */}
                        <div className="flow-box w-full max-w-sm">
                            Side Menu Activated
                            <p className="text-sm font-normal text-gray-500 mt-1">Triggered by Navbar Hamburger Icon (☰)</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>

                        {/* Top Section */}
                        <div className="flow-box w-full max-w-lg">
                            Top Section: Brand & User Access
                            <ul className="flow-list list-none pl-0">
                                <li><span className="font-semibold primary-dark">GROOVY STREETZ Logo</span></li>
                                <li><span className="font-semibold primary-dark">👤 Login / Register</span></li>
                                <li><span className="font-semibold primary-dark">My Account</span></li>
                                <li><span className="font-semibold primary-dark">💖 Wishlist</span></li>
                                <li><span className="font-semibold primary-dark">🛒 Cart</span></li>
                            </ul>
                        </div>
                        <div className="flow-arrow">⬇️</div>

                        {/* Categories Section */}
                        <div className="flow-box w-full max-w-lg">
                            Product Categories
                            <p className="text-sm font-normal text-gray-500 mt-1">Direct links to curated collections.</p>
                            <ul className="flow-list list-disc list-inside">
                                <li>Urban Monk</li>
                                <li>Urban Streets</li>
                                <li>Urban Animals</li>
                                <li>Rockstar</li>
                                <li>Kids</li>
                                <li>Women</li>
                            </ul>
                        </div>
                        <div className="flow-arrow">⬇️</div>

                        {/* More Links Section */}
                        <div className="flow-box w-full max-w-lg">
                            More Information & Support
                            <p className="text-sm font-normal text-gray-500 mt-1">Essential pages for customer support and brand information (with implied dropdown).</p>
                            <ul className="flow-list list-disc list-inside">
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li>Community Initiatives</li>
                                <li>About Us</li>
                                <li>T&C (Terms & Conditions)</li>
                                <li>Privacy Policy</li>
                                <li>FAQs</li>
                                <li>Get Notified</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center mt-12 pt-8 border-t border-medium-blue">
                    <p className="text-sm primary-medium">This infographic provides a clear and actionable workflow for the Groovy Streetz Side Menu Bar.</p>
                </footer>

            </div>
        </>
    );
};

export default SideMenuInfographic;