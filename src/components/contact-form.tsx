import React, { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log(formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
    });
  };

  return (
    <div className="contact-form">
      <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          className="contact-input"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="contact-input"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="contact-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="comments"
          className="contact-textarea"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
