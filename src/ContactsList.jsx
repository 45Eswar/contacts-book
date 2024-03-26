import React, { useState } from "react";
import Contact from "./Contact";
import "./Styles/CustomStyle.css";

function ContactsList(props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleItemClick = (index, contact) => {
    props.getSelectedContactItem(contact);
    props.getSelectedContactItemIndex(index);
    setSelectedItemIndex(index);
  };

  return (
    <div className="contentList-contact-list">
      <h3 class="content-subHeading">Contacts</h3>
      {props.contacts.map((contact, index) => (
        <div
          key={index}
          className={
            index === selectedItemIndex ? "contentList-selected-item" : ""
          }
          onClick={() => handleItemClick(index, contact)}
        >
          <Contact contact={contact} />
        </div>
      ))}
    </div>
  );
}

export default ContactsList;
