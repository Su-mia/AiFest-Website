import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    year: '',
    teamName: '',
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
    formDataObj.append('Year', formData.year);
    formDataObj.append('TeamName', formData.teamName);
    formDataObj.append('Motivation', formData.motivation);

    fetch(
      "https://script.google.com/macros/s/AKfycbw0135hgTQCQIs7MUi1rfWvnwHq6dVypSVjhLSu6QTKguTELOz_EAgYEKp9iXCuDz7N/exec",
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
      <div className="w-full max-w-2xl p-12 bg-black bg-opacity-40 border border-gray-300 backdrop-blur-lg rounded-lg sm:mx-8"> {/* Increased margin for small screens */}
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
                className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label htmlFor="year" className="block text-lg font-semibold">Year</label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg mt-2"
              >
                <option value="" disabled>
                  Select Year
                </option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
              </select>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label htmlFor="teamName" className="block text-lg font-semibold">Team Name</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <label htmlFor="motivation" className="block text-lg font-semibold">Motivation</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="border-2 border-green-500 text-green-500 py-2 px-4 rounded absolute bottom-4 left-4 bg-transparent"
              >
                Back
              </button>
            )}
            {currentStep < 4 && (
              <button
                type="button"
                onClick={handleNext}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded absolute bottom-3 right-3"
              >
                Next
              </button>
            )}
            {currentStep === 4 && (
              <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded absolute bottom-3 right-3">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      <img src="/public/images/abyss_0001_blue_root_10.svg" alt="Blue Root" className="absolute top-0 right-0" />
      <img src="/public/images/knight.svg" alt="The Knight" className="absolute top-0 right-40 z-30" />
      <img src="/public/images/blue_door_0004_blue_vine_06.svg" alt="Blue Vine" className="absolute bottom-0 left-0" />
    </div>
  );
};

export default RegistrationForm;
