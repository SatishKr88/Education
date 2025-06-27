import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function LoginForm() {
    const [formData, setFormData] = useState({ email_id: '', password: '' });
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCaptchaChange = (value) => {
       
        setRecaptchaToken(value);
        setIsVerified(!!value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isVerified) {
            alert("Please verify that you are not a robot.");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // console.log('Login successful:', data);
            navigate('/dashboard');

        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-10 shadow-md rounded-lg border border-orange-200">
            <h2 className="text-2xl font-bold text-center text-orange-700 mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email_id" className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        id="email_id"
                        type="email"
                        name="email_id"
                        value={formData.email_id}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </div>

                <div className="mb-6 ">
                    <ReCAPTCHA
                        sitekey="6LeClmcrAAAAAJhEHlDX2tqFp75YucaJfuZvx9XE"
                        onChange={handleCaptchaChange}
                        theme="light"
                    />
                </div>

                <button
                    type="submit"
                    disabled={!isVerified}
                    className={`w-full py-2 rounded-md transition duration-300 ${isVerified
                            ? "bg-orange-500 text-white hover:bg-orange-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
