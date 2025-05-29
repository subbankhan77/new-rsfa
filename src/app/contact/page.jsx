"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquareText,
  Send,
  Clock,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0a0a20] to-[#1a1a3a] text-white py-16">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              We're here to answer any questions you may have about fencing in Rajasthan
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-[#0f0f1a] via-[#151530] to-[#0a0a15] text-gray-100 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Send Us a Message
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium flex items-center gap-2 text-gray-300">
                      <User className="w-4 h-4 text-blue-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-blue-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium flex items-center gap-2 text-gray-300">
                    <MessageSquareText className="w-4 h-4 text-blue-400" />
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ${
                      formStatus === 'idle' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : formStatus === 'success'
                          ? 'bg-green-600'
                          : 'bg-gray-600'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Message Sent!</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info Card */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Head Office</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Behind petrol pump sanganer airport,<br />
                        circle tonk road, Jaipur 302029
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Phone</h3>
                      <p className="text-gray-400">+91 99296 11574</p>
                      <p className="text-gray-400">0141-2790445</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Email</h3>
                      <a href="mailto:dkhansuri@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                        dkhansuri@gmail.com
                      </a>
                      <br />
                      <a href="mailto:rajasthan@fencigindia.org" className="text-gray-400 hover:text-blue-400 transition-colors">
                        rajasthan@fencigindia.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Office Hours
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent"></span>
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Working Days</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-400">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9756623538307!2d75.79196511498035!3d26.836888683160723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5bfa62694a5%3A0xee1723d9f3de68c4!2sSanganer%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1650900000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}