import { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './home.scss';

const Home = () => {
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
		<div className="home-page-container">
			<div className="container">
				<div><a href="/cypress-info">cypress info page</a></div>
				<div><a href="/cypress-capability">cypress capability page</a></div>
				<br />
				<div><a href="/cypress-info-certificate">cypress info certificate page</a></div>
				<div><a href="/cypress-power-certificate">cypress capability certificate page</a></div>

				<br /><br />

				<div className="row">
					<div className="col">asdf</div>
					<div className="col">asdf</div>
					<div className="col">asdf</div>
				</div>

				<div className="emails">
					<form onSubmit={submitHandler} className="form">
						<div>Register to attend a session with a Cypress representative</div>
						<input className="email-input" onChange={inputHandler} placeholder="Email" type="email" value={input}></input>
						<button className="email-button">Count me in!</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Home;