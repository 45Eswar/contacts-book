import React, { useState } from "react";
import Contact from "./Contact";
import "./Styles/Content.css";

function ContactsList(props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleItemClick = (index, contact) => {
    props.getSelectedContactItem(contact);
    props.getSelectedContactItemIndex(index);
    setSelectedItemIndex(index);
  };

  return (
    <div className="contact-list">
      <h3 class="subHeading">Contacts</h3>
      {props.contacts.map((contact, index) => (
        <div
          key={index}
          className={index === selectedItemIndex ? "selected-item" : ""}
          onClick={() => handleItemClick(index, contact)}
        >
          <Contact contact={contact} />
        </div>
      ))}
    </div>
  );
}

export default ContactsList;
