import { useState, useEffect } from "react";
import { useIntl } from "react-intl";

const useContactForm = (onSuccess, onError) => {
  const intl = useIntl();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: intl.formatMessage({ id: "app.contact.input.msg" }),
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      message: intl.formatMessage({ id: "app.contact.input.msg" }),
    }));
  }, [intl]);

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
