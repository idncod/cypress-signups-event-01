import { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const QuestionsToRepForm = () => {
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
		<div className="questions-to-rep-form-container">
			<form onSubmit={submitHandler} className="form">
				<input type="text" onChange={inputHandler} placeholder="Name" />
				<input type="email" value={input} className="email-input" onChange={inputHandler} placeholder="Email" />
				<button className="email-button">Count me in!</button>
			</form>
		</div>
	);
}

export default QuestionsToRepForm;