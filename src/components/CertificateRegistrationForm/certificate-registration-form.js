import { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './certificate-registration-form.scss';

const CertificateRegistrationForm = () => {
	const [input, setInput] = useState(""); 

	const inputHandler = (e) => {
		setInput(e.target.value);
	}

	const submitHandler = async (e) => {
		e.preventDefault();

		if (input) {
			await addDoc(collection(db, "emails"), {
				email: input,
				timestamp: serverTimestamp(),
			});
			setInput("");
		}
	}

	return (
		<div className="certificate-registration-form-container">
			<form onSubmit={submitHandler} className="form">


				<input className="email-input" onChange={inputHandler} placeholder="Email" type="email" value={input}></input>
				<button className="email-button">Count me in!</button>
			</form>
		</div>
	);
}

export default CertificateRegistrationForm;