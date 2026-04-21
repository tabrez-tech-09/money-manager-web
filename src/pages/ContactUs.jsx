import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      console.log(formData);

      setLoading(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#f5f7fb] py-16 px-4 text-center">
        
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="text-gray-500 mt-2 mb-10">
          Have questions or feedback? We’d love to hear from you.
        </p>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-10 text-left">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2">📧 tabrezrbbni78@gmail.com</p>
            <p>📍 India</p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;