import { useState } from "react";

const useContactForm = (onSuccess, onError) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "Quiero conocerte...",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mqapenyk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
        setFormData({ name: "", email: "", message: "Quiero conocerte..." });
      } else {
        onError();
      }
    } catch {
      onError();
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useContactForm;
