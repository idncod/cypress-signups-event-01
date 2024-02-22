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
						by Dan Johansen (Product @ Cypress) and 
						Mark Noonan (Senior Software Engineer @ Cypress)
					</div>
				</h1>


				<section>
					How do I make a choice about which test automation framework to use? 
					There are many popular frameworks with both advantages and disadvantages for my organization.
				</section>

				<section className="join-us-container first">
					<i className="fa-solid fa-link"></i> Join us for the discussion on&#160; 
					<span className="join-us">Thursday, March 7 at 10pm EST</span>&#160;
					via ZOOM
				</section>

				<section className="spacer">
					There are also a growing number of QA and engineers who are becoming 
					familiar with the current testing frameworks
				</section>

				
				<section className={`image-container ${imgSizeCss}`}>
					<img src={FrameworkComparisonImg} alt="Framework Comparison" className="img-fluid" onClick={onImageClick} />
				</section>
				

				<section>
					This session will provide helpful information about a question that Cypress frequently gets:&#160; 
					<span className="bold">how does Cypress compare to other frameworks such as 
					Playwright and Selenium?</span>
				</section>

				<div className="bold"><i className="fa-regular fa-calendar-check"></i> Agenda:</div>
				<ul>
					<li><span className="bold">Session length:</span> 60 minutes</li>
					<li><span className="bold">Presentation length:</span> 45 minutes</li>
					<li><span className="bold">Reserved Q&A:</span> 15 minutes</li>
				</ul>

				<div className="bold"><i className="fa-regular fa-rectangle-list"></i> Outline:</div>
				<ol>
					<li>
						<span className="bold">Introduction.</span>&#160;
						Presented by Cypress but showing market research and blogs about all three frameworks
					</li>
					<li>
						<span className="bold">Origins of Frameworks</span>&#160;
						and current usage trajectories
					</li>
					<li>
						<span className="bold">Should I test inside or outside the browser?</span>

						<ol type="a">
							<li>Real Life Examples</li>
						</ol>
					</li>
					<li>
						<span className="bold">Setup and configuration</span> overview
					</li>
					<li>
						<span className="bold">Matrix and Overview of Test Capabilities</span>

						<ol type="a">
							<li>Architecture</li>
							<li>Frameworks Supported</li>
							<li>Languages Supported</li>
							<li>Browsers Supported</li>
							<li>Code Generation</li>
							<li>Flakiness</li>
							<li>Speed</li>
							<li>Screenshots and Logs</li>
							<li>Integration Capabilities</li>
							<li>Replay</li>
							<li>Reporting</li>
						</ol>
					</li>
					<li>
						<span className="bold">How to troubleshoot results</span>

						<ol type="a">
							<li>Local</li>
							<li>With CI</li>
						</ol>
					</li>
					<li>
						<span className="bold">Q&A</span>
					</li>
				</ol>

				<section className="join-us-container">
					<i className="fa-solid fa-link"></i> Join us on&#160;
					<span className="join-us">Thursday, March 7 at 10pm EST</span>&#160;
					via ZOOM
				</section>

				<div className="spacer">&#160;</div>

				<section>
					Do you have questions? Please fill out the form below and Cyress representative 
					will try to answer them.
				</section>

				<section>
					<SupportForm source="cypress_choices_questionnaire" displayMessage />
				</section>
			</div>
		</div>
	);
};

export default CypressChoices;