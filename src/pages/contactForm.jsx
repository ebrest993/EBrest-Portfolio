import { useState } from 'react';
import { validateName, validateMessage, validateEmail } from '../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'fullName') {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !fullName) {
      setErrorMessage('Email or Name is invalid');
      return;
    }
    if (!validateMessage(message)) {
      setErrorMessage(
        `Please enter a message into the message field...`
      );
      return;
    }
    alert(`Thank you, your message has been sent!`);

    setFullName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container text-center">
      <h1>Hello {fullName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type message here..."
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
