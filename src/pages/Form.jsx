import React, { useState } from "react";
import "./form.css";
import NavBar from "../pages/NavBar";

const FormSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
    photo: null,
    cv: null,
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      //api call
      console.log(formData, "data ");
    } else {
      setErrors(errors);
    }
  };

  const validate = (formData) => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.contact) {
      errors.contact = "Contact is required";
    }
    if (!formData.photo) {
      errors.photo = "Photo is required";
    } else if (!/\.(jpg|jpeg|png)$/i.test(formData.photo.name)) {
      errors.photo = "Photo must be a JPG, JPEG, or PNG image";
    }
    if (!formData.cv) {
      errors.cv = "CV is required";
    } else if (!/\.(pdf)$/i.test(formData.cv.name)) {
      errors.cv = "CV must be a PDF file";
    }
    return errors;
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full mx-auto
    "
    >
      <div className="w-[80%] py-8 flex justify-between">
        <NavBar />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
          {errors.contact && <div className="error">{errors.contact}</div>}
        </div>
        <div>
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
          {errors.photo && <div className="error">{errors.photo}</div>}
        </div>
        <div>
          <label>CV</label>
          <input
            type="file"
            name="cv"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          {errors.cv && <div className="error">{errors.cv}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmission;
