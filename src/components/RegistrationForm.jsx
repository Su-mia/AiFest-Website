import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    discord_Id: '',
    year: '',
    teamName: '',
    ML_level: '',
    motivation: '',
    

  });

  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/'); 
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('FullName', formData.fullName);
    formDataObj.append('Email', formData.email);
    formDataObj.append('Discord_Id', formData.discord_Id);
    formDataObj.append('Year', formData.year);
    formDataObj.append('TeamName', formData.teamName);
    formDataObj.append('ML_level', formData.ML_level)
    formDataObj.append('Motivation', formData.motivation);
    

    fetch(
      "https://script.google.com/macros/s/AKfycbyUqs2DYLN-V6QpQ-HzO2lJQU4-MhVaL_ISAR3Qz2o89Qc6k5mg9Oob4mtFOknIAPw/exec",
      {
        method: "POST",
        body: formDataObj,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Submission failed");
        }
        return res.text();
      })
      .then((data) => {
        if (data.includes("Success")) {
          navigate("/thank-you");
        } else {
          throw new Error("Unexpected response from server");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-form">
      <div className="w-full max-w-2xl p-12 bg-black bg-opacity-40 border border-gray-300 backdrop-blur-lg rounded-lg max-sm:mx-8 sm:mx-8">
        {error && (
          <div className="bg-red-100 text-red-800 p-3 mb-4 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div>
              <label htmlFor="fullName" className="block text-lg font-semibold">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border p-2 mt-2 rounded-lg"
              />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <label htmlFor="email" className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {
            currentStep === 2 && (
              <div>
                <label htmlFor="discord_Id" className="block text-lg font-semibold">Discord ID</label>
                <input
                  type="text"
                  id="discord_Id"
                  name="discord_Id"
                  value={formData.discord_Id}
                  onChange={handleChange}
                  placeholder="Enter your Discord ID"
                  className="w-full border p-2 rounded-lg mt-2"
                />
              </div>
            )
          }

          {currentStep === 3 && (
            <div>
              <label htmlFor="year" className="block text-lg font-semibold">Year</label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg mt-2"
              >
                <option value="" disabled>Select your year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
              </select>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <label htmlFor="teamName" className="block text-lg font-semibold">Team Name</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                placeholder="Enter your team name"
                className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {
            currentStep === 5 && (
              <div>
                <label htmlFor="ML_level" className="block text-lg font-semibold">Machine Learning Level</label>
                <select
                  id="ML_level"
                  name="ML_level"
                  value={formData.ML_level}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mt-2"
                >
                  <option value="" disabled>Select your ML level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            )
          }

          {currentStep === 6 && (
            <div>
              <label htmlFor="motivation" className="block text-lg font-semibold">Motivation</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Describe your motivation"
                className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 7 && (
              <button
              type="button"
              onClick={handleBack}
              className="border-2 border-green-500 text-white py-2 px-4 rounded-lg absolute bottom-4 left-4 bg-transparent flex items-center focus:outline-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            )}
            {currentStep < 6 && (
              <button
              type="button"
              onClick={handleNext}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg absolute bottom-3 right-3 flex items-center focus:outline-white"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            )}
            {currentStep === 6 && (
              <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-7 rounded-lg absolute bottom-3 right-3 focus:outline-white">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      <img src="/public/images/abyss_0001_blue_root_10.svg" alt="Blue Root" className="absolute top-0 right-0" />

      <img src="/public/images/knight.svg" alt="A knight" className="absolute top-0 right-40 z-30"/>
      <img src="/public/images/blue_door_0004_blue_vine_06.svg" alt="Blue Vine" className="absolute bottom-0 left-0" />
    </div>
  );
};

export default RegistrationForm;
