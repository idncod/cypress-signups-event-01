import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import './support-form.scss';

const SupportForm = ({ source, displayMessage = false }) => {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [messageInput, setMessageInput] = useState("");

	const [displayNameError, setDisplayNameError] = useState(false);
	const [displayEmailError, setDisplayEmailError] = useState(false);
	const [displayMessageError, setDisplayMessageError] = useState(false);

	const [displaySuccessIcon, setDisplaySuccessIcon] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [showErrorAlert, setShowErrorAlert] = useState(false);

	const [emailErrorMessage, setEmailErrorMessage] = useState("");

	const onNameChange = (e) => {
		setNameInput(e.target.value);
	};

	const onEmailChange = (e) => {
		setEmailInput(e.target.value);
	};

	const onMessageChange = (e) => {
		setMessageInput(e.target.value);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		setDisplayNameError(false);
		setDisplayEmailError(false);
		setDisplayMessageError(false);
		setDisplaySuccessIcon(false);
		setShowAlert(false);
		setShowErrorAlert(false);

		let isValid = true;

		//validate form
		if (!nameInput) {
			setDisplayNameError(true);
			isValid = false;
		}

		if (!emailInput) {
			setDisplayEmailError(true);
			isValid = false;
			setEmailErrorMessage("Please enter your email address");
		}
		else {
			let regex = /\S+@\S+\.\S+/;
			if (regex.test(emailInput) === false) {
				setDisplayEmailError(true);
				isValid = false;
				setEmailErrorMessage("Please enter valid email address");
			}
		}

		if (displayMessage && !messageInput) {
			setDisplayMessageError(true);
			isValid = false;
		}

		if (isValid) {
			await addDoc(collection(db, source), {
				name: nameInput,
				email: emailInput,
				timestamp: serverTimestamp(),
				...(displayMessage && {message: messageInput})
			}).then(() => {
				setNameInput("");
				setEmailInput("");
				setMessageInput("");
				
				//success confirmation
				setDisplaySuccessIcon(true);
				setShowAlert(true);
			}).catch((error) => {
				setShowErrorAlert(true);
			});
		}
	};

	useEffect(() => {
		if (showAlert) {
			const time = setTimeout(() => {
				setShowAlert(false);
			}, 5000);

			return () => {
				clearTimeout(time);
			}
		}
	}, [showAlert]);

	return (
		<div className="support-form-container">
			{showErrorAlert && (
				<div className="alert alert-danger" role="alert">
					Sorry, there was an error submitting your request. Please try again later.
				</div>
			)}

			{showAlert && (
				<div className="alert alert-success" role="alert">
					Thank you for your submission!
				</div>
			)}

			<form onSubmit={submitHandler} noValidate>
				<section className="form-floating col-md-8 col-lg-6">
					<input id="name" type="text" className={`form-control ${displayNameError ? 'is-invalid' : ''}`} value={nameInput} placeholder="Your Name" required onChange={onNameChange} />
					<label htmlFor="name">Your Name</label>
					{displayNameError && (
						<div className="inline-error">Please enter your name</div>
					)}
				</section>

				<section className="form-floating col-md-8 col-lg-6">
					<input id="email" type="text" className={`form-control ${displayEmailError ? 'is-invalid' : ''}`} value={emailInput} placeholder="Your Email" required onChange={onEmailChange} />
					<label htmlFor="email">Your Email</label>
					{displayEmailError && (
						<div className="inline-error">{emailErrorMessage}</div>
					)}
				</section>

				{displayMessage && (
					<section className="form-floating col-md-10 col-lg-8">
						<textarea id="message" className={`form-control question-textarea ${displayMessageError ? 'is-invalid' : ''}`} value={messageInput} placeholder="Your Question" required onChange={onMessageChange} />
						<label htmlFor="message">Your Question</label>
						{displayMessageError && (
							<div className="inline-error">Please enter your question</div>
						)}
					</section>
				)}

				<div className="note">* All fields are required</div>
				
				<section>
					<button type="submit" className="btn btn-primary">Submit</button>

					{displaySuccessIcon && (
						<div className="successfully-submitted-container">
							<i className="fa-regular fa-thumbs-up"></i> Your question has been successfully submitted!
						</div>
					)}
				</section>
			</form>
		</div>
	);
}

export default SupportForm;