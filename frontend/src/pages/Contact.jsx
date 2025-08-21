import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-bangle-primary">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
        Have a question or feedback? We’d love to hear from you! Fill out the
        form below or reach us directly.
      </p>

      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bangle-primary"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bangle-primary"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bangle-primary"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-xl cursor-pointer hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-gray-600">
        📧 Email: support@banglebazaar.com <br />
        📞 Phone: +91 9876543210
      </div>
    </div>
  );
}
