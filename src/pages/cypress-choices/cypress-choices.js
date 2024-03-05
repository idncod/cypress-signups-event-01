import { useState } from 'react';
import SupportForm from '../../components/SupportForm/support-form';
import FrameworkComparisonImg from './framewors-comparison.jpg';
import './cypress-choices.scss';

const CypressChoices = () => {
	const [imgLarge, setImgLarge] = useState(false);

	const onImageClick = () => {
		if (imgLarge === false) {
			setImgLarge(true);
		}
		else {
			setImgLarge(false);
		}
	}

	const imgSizeCss = imgLarge ? '' : 'small';

	return (
		<div className="cypress-choices-container">
			<div className="container">
				<h1 className="page-headline">
					Session 2: Test Automation Choices  
					<div className="author">
						by Dan Johansen (Product @ Cypress),  
						Mark Noonan (Senior Software Engineer @ Cypress), 
						Megan Amos (Customer Success @ Cypress) and 
						Eric Swanson (Support Engineering @ Cypress)
					</div>
				</h1>


				<section>
					How do I make a choice about which test automation framework to use? 
					There are many popular frameworks with both advantages and disadvantages 
					for my organization.
				</section>

				<section className="join-us-container first">
					<i className="fa-solid fa-link"></i> Join us for the discussion on&#160; 
					<span className="join-us">Thursday, March 7 at 10pm EST</span>&#160;
					<a href="https://us02web.zoom.us/meeting/register/tZEucO6uqz0pG9e58o9962tnM4v28J4zezVk">via ZOOM</a>.
				</section>

				<section className="spacer">
					There are also a growing number of QA professionals and engineers 
					who are becoming familiar with the current testing frameworks:
				</section>

				
				<section className={`image-container ${imgSizeCss}`}>
					<img src={FrameworkComparisonImg} alt="Framework Comparison" className="img-fluid" onClick={onImageClick} />
				</section>
				

				<section>
					This session will provide helpful information about a question 
					that Cypress hears: how does Cypress compare to other test 
					automation frameworks?
				</section>

				<section>
					Join us as we discuss many of the considerations that will be important 
					as your organization adopts a test automation framework that will 
					benefit you for years to come. Areas to be explored include:
				</section>

				<ul>
					<li>Origins of frameworks</li>
					<li>Should I test inside or outside the browser?</li>
					<li>Setup and configuration</li>
					<li>Matrix of similarities and differences</li>
					<li>Some of my tests failed. Now what?</li>
				</ul>

				<div className="bold"><i className="fa-regular fa-calendar-check"></i> Agenda:</div>
				<ul>
					<li><span className="bold">Session length:</span> 60 minutes</li>
					<li><span className="bold">Presentation length:</span> 45 minutes</li>
					<li><span className="bold">Reserved Q&A:</span> 15 minutes</li>
				</ul>

				<section className="join-us-container">
					<i className="fa-solid fa-link"></i> Join us on&#160;
					<span className="join-us">Thursday, March 7 at 10pm EST</span>&#160;
					<a href="https://us02web.zoom.us/meeting/register/tZEucO6uqz0pG9e58o9962tnM4v28J4zezVk">via ZOOM</a>.
				</section>

				<div className="spacer">&#160;</div>

				<section>
					Do you have questions? Please fill out the form below and Cyress representative 
					will try to answer them during the session.
				</section>

				<section>
					<SupportForm source="cypress_choices_questionnaire" displayMessage />
				</section>
			</div>
		</div>
	);
};

export default CypressChoices;