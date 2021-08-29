import React, { useState } from "react";

const BasicDetails = () => {
  const [username, setUserName] = useState("");
  return (
    <div className="bd-container">
      <h2 className="bd-heading">Enter Details :</h2>

      <label>First Name* :</label>
      <input type="text" value={username} />

      <label>Last Name* :</label>
      <input type="text" value={username} />

      <label>Email* :</label>
      <input type="text" value={username} />

      <label>Password* :</label>
      <input type="text" value={username} />

      <label>Confirm Password* :</label>
      <input type="text" value={username} />

      <label>Mobile No.* :</label>
      <input type="text" value={username} />
    </div>
  );
};
export default BasicDetails;
