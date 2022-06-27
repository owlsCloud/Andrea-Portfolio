import React from "react";
import "../styles/form.scss";
function BSForm() {
  return (
    <form action="">
      <div className="form">
        <div>
          <div className="form__first-name">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="form__last-name">
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className="form__email">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-right">
          <div className="form__msg">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="form__btn">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default BSForm;
