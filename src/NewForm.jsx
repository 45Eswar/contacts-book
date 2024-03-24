import React, { useEffect, useState } from "react";
import "./Styles/NewForm.css";
function NewForm(props) {
  const [contact, setContact] = useState({
    cname: "",
    email: "",
    mobile: "",
    landline: "",
    website: "",
    address: "",
  });

  const [error, setError] = useState({
    cname: "",
    email: "",
    mobile: "",
    landline: "",
    website: "",
    address: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((values) => ({ ...values, [name]: value }));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // Validate all input fields before adding contact
    if (validateInputFields()) {
      props.addContactToList(contact);
      clearInputFields();
    } else {
      console.log("Wrong Inputs");
    }
  };

  const validateInputFields = () => {
    const isValidName =
      /^[A-Za-z\s]+$/.test(contact.cname) && contact.cname.length <= 25;
    const isValidEmail = /^\S+@\S+\.\S+$/.test(contact.email);
    const isValidMobile = /^\d{10}$/.test(contact.mobile);
    const isValidLandline = /^\d{10}$/.test(contact.landline);
    //const isValidAddress = /^\s*$/.test(contact.address);

    setError({
      cname: !isValidName ? "Name must contain only letters and spaces." : "",
      email: !isValidEmail ? "Invalid email address." : "",
      mobile: !isValidMobile ? "Mobile number must be 10 digits." : "",
      landline: !isValidLandline ? "Landline number must be 10 digits." : "",
    });

    return (
      isValidName && isValidEmail && isValidMobile && isValidLandline //&&
    );
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // Validate all input fields before updating contact
    if (validateInputFields()) {
      props.updateContactToList(contact);
      clearInputFields();
    } else {
      console.log("Wrong Inputs");
    }
  };

  const clearInputFields = () => {
    setContact({
      cname: "",
      email: "",
      mobile: "",
      landline: "",
      website: "",
      address: "",
    });
  };

  useEffect(() => {
    if (props.selectedItemIndex >= 0) {
      setContact(() => ({
        ...props.selectedItem,
      }));
    }
  }, [props.selectedItem, props.selectedItemIndex]);

  return (
    <div className="newForm">
      <div style={{ textAlign: "center" }}>
        {props.selectedItemIndex < 0 ? "New Contact" : "Edit Contact"}
      </div>
      <form
        onSubmit={props.selectedItemIndex < 0 ? handleAdd : handleUpdate}
        id="contact-form"
        className="contactForm"
      >
        <div class="formColL">
        <label className="form-label">
          Name
          <br />
          <input
            className="form-input-field"
            type="text"
            name="cname"
            value={contact.cname}
            onChange={handleChange}
          />
          <label className="error-label"> {error.cname}</label>
        </label>

        <label className="form-label">
          Email
          <br />
          <input
            className="form-input-field"
            type="text"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
          <label className="error-label"> {error.email}</label>
        </label>
        <div className="side-by-side-fields">
          <div className="side-by-side-field">
            <label className="form-label">
              Mobile
              <br />
              <input
                className="form-input-field"
                type="text"
                name="mobile"
                value={contact.mobile}
                onChange={handleChange}
              />
              <label className="error-label">{error.mobile}</label>
            </label>
          </div>
          <div className="side-by-side-field">
            <label className="form-label">
              Landline
              <br />
              <input
                className="form-input-field"
                type="text"
                name="landline"
                value={contact.landline}
                onChange={handleChange}
              />
              <label className="error-label">{error.landline}</label>
            </label>
          </div>
        </div>
        <label className="form-label">
          Website
          <br />
          <input
            className="form-input-field"
            type="text"
            name="website"
            value={contact.website}
            onChange={handleChange}
          />
          <label className="error-label">{error.website}</label>
        </label>

        <label className="form-label">
          Address
          <br />
          <textarea
            className="form-input-field"
            name="address"
            value={contact.address}
            onChange={handleChange}
          />
          <label className="error-label">{error.address}</label>
        </label>
        </div>
        <div class="formColR">
          <button type="Submit" class="submitBtn">
          {props.selectedItemIndex < 0 ? "Create" : "Update"}
        </button>
        </div>
      </form>
    </div>
  );
}

export default NewForm;
