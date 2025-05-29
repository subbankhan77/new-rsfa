"use client";

import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, Calendar, CreditCard, Building, FileText, Trophy, Users, Award, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Address - Permanent
    permanentPincode: '',
    permanentAddress: '',
    permanentApartment: '',
    permanentCity: '',
    permanentDistrict: '',
    permanentState: '',
    permanentDocumentProof: '',
    
    // Address - Current
    currentPincode: '',
    currentAddress: '',
    currentApartment: '',
    currentCity: '',
    currentDistrict: '',
    currentState: '',
    currentDocumentProof: '',
    
    // Association
    associationMember: '',
    representingAssociation: '',
    
    // Training Details (for Fencer/Coach)
    training: '',
    currentCoach: '',
    
    // Passport Details
    passportNumber: '',
    passportIssuedAt: '',
    passportIssuedDate: '',
    passportExpiryDate: '',
    
    // Bank Details
    bankName: '',
    branch: '',
    accountNumber: '',
    reenterAccountNumber: '',
    ifscCode: '',
    
    // Role specific
    experience: '', // for Coach/Referee
    certifications: '', // for Coach/Referee
    statePosition: '', // for State role
  });

  const roles = [
    { id: 'FENCER', name: 'FENCER', icon: Trophy, color: 'from-red-500 to-red-600' },
    { id: 'COACH', name: 'COACH', icon: Users, color: 'from-blue-500 to-blue-600' },
    { id: 'REFEREE', name: 'REFEREE & TECHNICAL OFFICIALS', icon: Shield, color: 'from-green-500 to-green-600' },
    { id: 'STATE', name: 'STATE', icon: Award, color: 'from-purple-500 to-purple-600' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleSelection = (roleId) => {
    setSelectedRole(roleId);
    setShowRegistrationForm(true);
  };

  const handleBackToRoleSelection = () => {
    setShowRegistrationForm(false);
    setSelectedRole('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login data:', { email: formData.email, password: formData.password });
    } else {
      console.log('Register data:', { ...formData, role: selectedRole });
    }
  };

  const renderRoleSpecificFields = () => {
    switch (selectedRole) {
      case 'FENCER':
        return (
          <div className="space-y-6">
            {/* Training Details */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Training Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Training *</label>
                  <select
                    name="training"
                    value={formData.training}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Training Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name of Current Coach *</label>
                  <input
                    type="text"
                    name="currentCoach"
                    value={formData.currentCoach}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Coach Name"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'COACH':
        return (
          <div className="space-y-6">
            {/* Coaching Details */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Coaching Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Coaching Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Experience Level</option>
                    <option value="1-3 years">1-3 Years</option>
                    <option value="3-5 years">3-5 Years</option>
                    <option value="5-10 years">5-10 Years</option>
                    <option value="10+ years">10+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Certifications</label>
                  <input
                    type="text"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Certifications"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'REFEREE':
        return (
          <div className="space-y-6">
            {/* Official Details */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Official Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Officiating Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Experience Level</option>
                    <option value="regional">Regional Level</option>
                    <option value="state">State Level</option>
                    <option value="national">National Level</option>
                    <option value="international">International Level</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Official Certifications *</label>
                  <input
                    type="text"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter Official Certifications"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'STATE':
        return (
          <div className="space-y-6">
            {/* State Position Details */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                State Position Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Position in State Association *</label>
                  <select
                    name="statePosition"
                    value={formData.statePosition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Position</option>
                    <option value="president">President</option>
                    <option value="secretary">Secretary</option>
                    <option value="treasurer">Treasurer</option>
                    <option value="committee-member">Committee Member</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years in Position</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter Years of Experience"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {isLogin ? (
            // Login Section
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Login Info */}
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <Image
                      src="/rfac.jpeg"
                      alt="RSFA Logo"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4 border-4 border-white/20"
                    />
                    <h1 className="text-4xl font-bold mb-2">FENCING INDIA</h1>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Members Login</h2>
                  
                  {/* Role Selection for Visual */}
                  <div className="space-y-4">
                    {roles.map((role) => {
                      const IconComponent = role.icon;
                      return (
                        <div key={role.id} className={`bg-gradient-to-r ${role.color} p-4 rounded-lg text-center font-bold text-white shadow-lg`}>
                          <div className="flex items-center justify-center">
                            <IconComponent className="w-6 h-6 mr-2" />
                            {role.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter Username"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full px-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter Here"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="bg-gray-200 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg text-center font-mono">
                        68 35 48
                      </div>
                    </div>

                    <div className="text-right">
                      <button type="button" className="text-sm text-blue-600 hover:text-blue-500">
                        Forgot Password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-bold text-lg"
                    >
                      LOGIN
                    </button>

                    <div className="text-center text-xs text-gray-500 space-x-4">
                      <a href="#" className="text-blue-600 hover:text-blue-500">Refund Policy</a>
                      <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                      <a href="#" className="text-blue-600 hover:text-blue-500">Terms & Conditions</a>
                    </div>

                    <div className="text-center">
                      <span className="text-gray-600">New Registration? </span>
                      <button
                        type="button"
                        onClick={() => setIsLogin(false)}
                        className="text-blue-600 hover:text-blue-500 font-semibold"
                      >
                        Register Here
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : !showRegistrationForm ? (
            // Role Selection Screen
            <div className="p-8 lg:p-12 min-h-screen flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-12">
                  <Image
                    src="/rfac.jpeg"
                    alt="RSFA Logo"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-6 border-4 border-blue-200 shadow-lg"
                  />
                  <h1 className="text-5xl font-bold text-gray-800 mb-4">New Registration</h1>
                  <p className="text-xl text-gray-600">Choose your registration type to continue</p>
                </div>

                {/* Role Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {roles.map((role) => {
                    const IconComponent = role.icon;
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleRoleSelection(role.id)}
                        className={`group p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${role.color} text-white border-transparent shadow-lg`}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h3 className="font-bold text-lg mb-2">{role.name}</h3>
                          <div className="w-8 h-1 bg-white/50 rounded group-hover:w-12 transition-all duration-300"></div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="text-center">
                  <span className="text-gray-600">Already have an account? </span>
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Registration Form
            <div className="p-8 lg:p-12">
              {/* Header with selected role */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <button
                    onClick={handleBackToRoleSelection}
                    className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    ← Back
                  </button>
                  <div className={`px-6 py-3 rounded-xl bg-gradient-to-r ${roles.find(r => r.id === selectedRole)?.color} text-white font-bold`}>
                    {roles.find(r => r.id === selectedRole)?.name} Registration
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Registration Form</h1>
                <p className="text-gray-600">Fill in your information to complete registration</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter First Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter Last Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter Phone Number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Permanent Address */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Permanent Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="permanentPincode"
                        value={formData.permanentPincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter Pincode"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                      <textarea
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Address Line 1"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Apartment/Landmark</label>
                      <textarea
                        name="permanentApartment"
                        value={formData.permanentApartment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Address Line 2"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">City/Taluka *</label>
                      <input
                        type="text"
                        name="permanentCity"
                        value={formData.permanentCity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter City/Taluka Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">District *</label>
                      <input
                        type="text"
                        name="permanentDistrict"
                        value={formData.permanentDistrict}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter District Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        name="permanentState"
                        value={formData.permanentState}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter State Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Document confirming domicile *</label>
                    <select
                      name="permanentDocumentProof"
                      value={formData.permanentDocumentProof}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Document Proof</option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="voter">Voter ID</option>
                      <option value="passport">Passport</option>
                      <option value="driving">Driving License</option>
                    </select>
                  </div>
                </div>

                {/* Association Details */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Representing Association</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="associationMember"
                          value="other"
                          checked={formData.associationMember === 'other'}
                          onChange={handleInputChange}
                          className="mr-3 text-green-600"
                        />
                        <span className="text-sm">I'm currently in the jurisdiction of or representing another State or UT Fencing Association/ Institutional Member</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="associationMember"
                          value="same"
                          checked={formData.associationMember === 'same'}
                          onChange={handleInputChange}
                          className="mr-3 text-green-600"
                        />
                        <span className="text-sm">I'm currently in the jurisdiction of or representing the same State or UT Fencing Association/ Institutional Member</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name of the Member Unit/ Institutional Member *</label>
                      <select
                        name="representingAssociation"
                        value={formData.representingAssociation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Your Association</option>
                        <option value="rajasthan">Rajasthan State Fencing Association</option>
                        <option value="maharashtra">Maharashtra Fencing Association</option>
                        <option value="delhi">Delhi Fencing Association</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Current Address */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Current Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="currentPincode"
                        value={formData.currentPincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Enter Pincode"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                      <textarea
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Address Line 1"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Apartment/Landmark</label>
                      <textarea
                        name="currentApartment"
                        value={formData.currentApartment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Address Line 2"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">City/Taluka *</label>
                      <input
                        type="text"
                        name="currentCity"
                        value={formData.currentCity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Enter City/Taluka Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">District *</label>
                      <input
                        type="text"
                        name="currentDistrict"
                        value={formData.currentDistrict}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Enter District Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                      <input
                        type="text"
                        name="currentState"
                        value={formData.currentState}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Enter State Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Document confirming current residence *</label>
                    <select
                      name="currentDocumentProof"
                      value={formData.currentDocumentProof}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Document Proof</option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="voter">Voter ID</option>
                      <option value="passport">Passport</option>
                      <option value="utility">Utility Bill</option>
                    </select>
                  </div>
                </div>

                {/* Role Specific Fields */}
                {renderRoleSpecificFields()}

                {/* Passport Details */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">Passport Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Number</label>
                      <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter Passport Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Issued at</label>
                      <input
                        type="text"
                        name="passportIssuedAt"
                        value={formData.passportIssuedAt}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter Passport issued at"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Issued Date</label>
                      <input
                        type="date"
                        name="passportIssuedDate"
                        value={formData.passportIssuedDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Expiry Date</label>
                      <input
                        type="date"
                        name="passportExpiryDate"
                        value={formData.passportExpiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">Bank Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
                      <select
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      >
                        <option value="">Select Bank Name</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Branch</label>
                      <input
                        type="text"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter Branch"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Account Number</label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter Account Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Re-enter Account Number</label>
                      <input
                        type="text"
                        name="reenterAccountNumber"
                        value={formData.reenterAccountNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter Re-enter Account Number"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">IFSC Code</label>
                      <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="ENTER IFSC CODE"
                      />
                    </div>
                  </div>
                </div>

                {/* Password Section */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Account Security</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full px-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Create Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password *</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Confirm Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    type="button"
                    onClick={handleBackToRoleSelection}
                    className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 font-semibold"
                  >
                    Back to Role Selection
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Register as {roles.find(r => r.id === selectedRole)?.name}
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-gray-600">Already have an account? </span>
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}