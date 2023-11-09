import React from "react";
import Form from "./contactForm.jsx";

const ContactMe = () => {
	return (
		<div
		style={{
			display: "flex",
			justifyContent: "centre",
			alignItems: "centre",
			height: "100vh",
		}}
		>
			<h1>Send me an email!</h1>
				<Form />
		</div>
	)
};

export default ContactMe;
