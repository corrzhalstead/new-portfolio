import React, { useState } from "react";
import styles from "./Contacts.module.css";
import { Link } from "react-router-dom";
import InputItem from "../../components/InputItem/InputItem";
import TextArea from "../../components/TextArea/TextArea";
import Card from "../../components/Card/Card";
import emailjs from "@emailjs/browser";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      name: !formData.name.trim(),
      email: !emailRegex.test(formData.email.trim()),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) {
      return;
    }

    emailjs
      .send(
        "service_drr4lcj",
        "template_is6vmrb",

        {
          name: formData.name.toString(),
          email: formData.email.toString(),
          message: formData.message.toString(),
        },
        "BMD7agKmi_msfYw7D"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <Card
          header="Contact Me"
          description={
            <div className={styles.formContainer}>
              <InputItem
                label="Name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                hasError={errors.name}
              />
              <InputItem
                label="Email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                hasError={errors.email}
              />
              <TextArea
                label="Message"
                name="message"
                value={formData.message}
                placeholder="Enter your message"
                onChange={handleChange}
                hasError={errors.message}
              />
            </div>
          }
          isButtonVisible={true}
          buttonText="Send Message"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Contacts;
