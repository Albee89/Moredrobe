import React, { useState } from "react";

export default function Contact() {
  const password = "swordfish";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  const login = (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>alex@moredrobe.com</li>
      <li>1111.2222.222</li>
    </ul>
  );

  return (
    <div className="Contact">
      <div id="authorization">
        <h1>Enter User Password</h1>
        {authorized ? contactInfo : login}
      </div>
    </div>
  );
}
