import React, { useEffect, useState } from "react";
import ContactsList from "./ContactsList";
import NewForm from "./NewForm";
import "./Styles/CustomStyle.css";

function Content(props) {
  const [contactsList, setContactsList] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const addContactToList = (contact) => {
    const newContact = contactsList.concat(contact);
    setContactsList(newContact);
  };

  const updateContactToList = (updatedContact) => {
    const updatedContactsList = [...contactsList];
    updatedContactsList[selectedItemIndex] = updatedContact;
    setContactsList(updatedContactsList);
    setSelectedItemIndex(-1);
  };
  const getSelectedContactItem = (contact) => {
    setSelectedItem(contact);
  };

  let getSelectedContactItemIndex = (index) => {
    setSelectedItemIndex(index);
  };

  useEffect(() => {
    if (!props.formVisibility) {
      setSelectedItem({
        cname: "",
        email: "",
        mobile: "",
        landline: "",
        website: "",
        address: "",
      });
      setSelectedItemIndex(-1);
    }
  }, [selectedItemIndex, props.formVisibility]);

  return (
    <div>
      <div className="content-grid-container">
        <div className="content-grid-item-left">
          <ContactsList
            contacts={contactsList}
            getSelectedContactItem={getSelectedContactItem}
            getSelectedContactItemIndex={getSelectedContactItemIndex}
            selectedItemIndex={selectedItemIndex}
          />
        </div>
        <div
          className="content-grid-item-right"
          style={{ visibility: props.formVisibility ? "visible" : "hidden" }}
        >
          <NewForm
            addContactToList={addContactToList}
            updateContactToList={updateContactToList}
            selectedItem={selectedItem}
            selectedItemIndex={selectedItemIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
