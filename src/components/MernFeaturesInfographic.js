import React from 'react';

const MernFeaturesInfographic = () => {
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
                    padding: 1rem;
                    background-color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    font-weight: 600;
                    color: #003F5C;
                }
                .flow-box .text-sm {
                    font-weight: normal;
                    color: #4A4A4A;
                }
                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem;
                    background-color: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                }
                .feature-item .icon {
                    font-size: 1.5rem;
                    color: #4D7EA8;
                }
                .feature-item .text {
                    font-weight: 500;
                    color: #003F5C;
                }
                `}
            </style>

            <div className="container mx-auto p-4 md:p-8 max-w-7xl">

                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold primary-dark">Groovy Streetz E-Commerce: Features & Workflow</h1>
                    <p className="mt-4 text-lg primary-medium">A visual roadmap for MERN stack development, authentication, and key functionalities.</p>
                </header>

                {/* Section 1: Authentication & Authorization Strategy */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">1. Authentication & Authorization Flow</h2>
                    <p className="text-center mb-8 primary-medium">Secure user access and role-based permissions are managed via JWT, bcrypt, and email verification.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center">
                            <div className="flow-box w-full">
                                User Registration
                                <p className="text-sm">Collect data, Hash password, Email verification</p>
                            </div>
                            <div className="flow-arrow">⬇️</div>
                            <div className="flow-box w-full">
                                Account Pending
                                <p className="text-sm">Until email is verified</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flow-box w-full">
                                User Login
                                <p className="text-sm">Verify credentials, Check email status</p>
                            </div>
                            <div className="flow-arrow">⬇️</div>
                            <div className="flow-box w-full">
                                Generate JWT
                                <p className="text-sm">`userId`, `role` in HTTP-only cookie</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flow-box w-full">
                                Authorization (RBAC)
                                <p className="text-sm">Middleware checks `role` for route access</p>
                            </div>
                            <div className="flow-arrow">⬇️</div>
                            <div className="flow-box w-full">
                                Access Control
                                <p className="text-sm">Public, User, Admin routes</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <div className="flow-box w-full max-w-md">
                            Forgot Password
                            <p className="text-sm">Email request, Token, Reset link</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>
                        <div className="flow-box w-full max-w-md">
                            Delete My Account
                            <p className="text-sm">Password confirm, Soft/Hard delete</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Printful API Integration & Custom Orders */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">2. Printful Integration & Custom Order Workflow</h2>
                    <p className="text-center mb-8 primary-medium">Seamless fulfillment for standard and personalized products through Printful API.</p>

                    <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="flow-box w-full max-w-md">
                            Custom Design Tool (Frontend)
                            <p className="text-sm">Upload, Text, Product selection, Real-time preview</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>
                        <div className="flow-box w-full max-w-md">
                            Design Data Storage (MongoDB)
                            <p className="text-sm">Save design specs, Generate unique ID</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>
                        <div className="flow-box w-full max-w-md">
                            Order Placement (Customer)
                            <p className="text-sm">Standard or Custom Product</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>
                        <div className="flow-box w-full max-w-md">
                            Backend API Calls to Printful
                            <p className="text-sm">Express.js as intermediary, Submit order/print files</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>
                        <div className="flow-box w-full max-w-md">
                            Printful Fulfillment
                            <p className="text-sm">Production, Shipping</p>
                        </div>
                        <div className="flow-arrow">⬇️</div>
                        <div className="flow-box w-full max-w-md">
                            Status Sync
                            <p className="text-sm">Printful status updates to DB & User Dashboard</p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Admin Dashboard Features */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">3. Admin Dashboard: Control & Insights</h2>
                    <p className="text-center mb-8 primary-medium">Empowering administrators with comprehensive tools for managing the e-commerce platform.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="feature-item">
                            <span className="icon">📦</span><span className="text">Order Tracking & Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">🏷️</span><span className="text">Product & Category Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">📈</span><span className="text">Sales Management System</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">👥</span><span className="text">User Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">⚙️</span><span className="text">Custom Order Workflow</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">📊</span><span className="text">Reporting & Analytics</span>
                        </div>
                    </div>
                </section>

                {/* Section 4: User Dashboard Features */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">4. User Dashboard: Personalized Experience</h2>
                    <p className="text-center mb-8 primary-medium">Providing customers with tools to manage their orders, profile, and preferences.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="feature-item">
                            <span className="icon">🚚</span><span className="text">Order Tracking & History</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">⚙️</span><span className="text">Profile & Account Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">💖</span><span className="text">Wishlist Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">🎨</span><span className="text">Custom Designs (View/Re-order)</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">🏠</span><span className="text">Address Book Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon">🔑</span><span className="text">Password Reset</span>
                        </div>
                    </div>
                </section>
<p>dhfjh</p>
                {/* Section 5: What Else to Add for Success */}
                <section className="mb-12 p-6 md:p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center primary-dark">5. Key Success Factors & Future Enhancements</h2>
                    <p className="text-center mb-8 primary-medium">Beyond core features, these elements will drive engagement, efficiency, and growth.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="feature-item bg-light-blue">
                            <span className="icon text-primary-dark">📣</span><span className="text text-primary-dark">Marketing & Engagement</span>
                        </div>
                        <div className="feature-item bg-light-blue">
                            <span className="icon text-primary-dark">✨</span><span className="text text-primary-dark">User Experience (UX) Enhancements</span>
                        </div>
                        <div className="feature-item bg-light-blue">
                            <span className="icon text-primary-dark">🛠️</span><span className="text text-primary-dark">Technical & Operational Tools</span>
                        </div>
                        <div className="feature-item bg-light-blue">
                            <span className="icon text-primary-dark">🤝</span><span className="text text-primary-dark">Community & Brand Building</span>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center mt-12 pt-8 border-t border-medium-blue">
                    <p className="text-sm primary-medium">This infographic provides a clear and actionable overview of the Groovy Streetz E-Commerce platform's features and workflow.</p>
                </footer>
     
            </div>
        </>
    );
};

export default MernFeaturesInfographic;