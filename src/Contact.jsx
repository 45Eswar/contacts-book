import React from "react";
import "./Styles/Contact.css";

function Contact(props) {
  return (
    <div className="contact-item">
      <div className="contact-group">
        <div className="contact-group-item-username">{props.contact.cname}</div>
        <div className="contact-group-item">{props.contact.email}</div>
        <div className="contact-group-item">{props.contact.mobile}</div>
      </div>
    </div>
  );
}

export default Contact;
