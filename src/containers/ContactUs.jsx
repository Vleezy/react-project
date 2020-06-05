import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../components/form/Input";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast("You forgot something check email");
    }
    if (name === "") {
      toast("You forgot something check name");
    }
    if (message === "") {
      toast("You forgot something check message");
    }
    if (!email || !name || !message) return;

    toast.success("Successfully sent");
  };
  return (
    <div className="top_Container">
      <ToastContainer />
      <form name="form" className="form-container" onSubmit={handleSubmit}>
        <br className="input-holder" />

        <Input
          label="Email Address"
          value={email}
          handleChange={({ currentTarget: { value } }) => setEmail(value)}
        />

        <br className="input-holder" />

        <Input
          label="Full Name"
          value={name}
          handleChange={({ currentTarget: { value } }) => setName(value)}
        />

        <br className="input-holder" />

        <Input
          isTextArea
          label="Message"
          value={message}
          handleChange={({ currentTarget: { value } }) => setMessage(value)}
        />

        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
