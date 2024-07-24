import React from 'react';

export default function Contact() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>

            {/* Contact Information */}
            <section style={{ marginBottom: '40px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>School Contact Information</h2>
                    <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> info@springdale.edu</p>
                </div>
            </section>

            {/* Google Maps Integration */}
            <section style={{ marginBottom: '40px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>Our Location</h2>
                    <iframe
                        title="School Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.821791474042!2d-122.07908068468165!3d37.38605197982581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c0d75aef7b%3A0x31c5f8814e5c3aeb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1674811193196!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: '0', borderRadius: '8px' }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            {/* Contact Form */}
            <section>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>Contact Form</h2>
                    <form>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
