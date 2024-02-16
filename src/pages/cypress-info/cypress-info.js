import FrameworkComparisonImg from './framewors-comparison.jpg';
import { useState } from 'react';
import SupportForm from '../../components/SupportForm/support-form';
import './cypress-info.scss';

const CypressInfo = () => {
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
		<div className="cypress-information-container">
			<div className="container">
				<section>
					How do I make a choice about which test automation framework to use? 
					There are many popular frameworks with both advantages and disadvantages for my organization.
				</section>

				<section>
					There are many popular frameworks with both advantages and disadvantages for my organization.
				</section>

				
				<section className={`image-container ${imgSizeCss}`}>
					<img src={FrameworkComparisonImg} alt="Framework Comparison" className="img-fluid" onClick={onImageClick} />
				</section>
				

				<section>
					This session will provide helpful information about a question that Cypress frequently hears:&#160; 
					<span className="bold">how does Cypress compare to other frameworks such as 
					Playwright and Selenium?</span>
				</section>

				<div className="bold"><i className="fa-regular fa-calendar-check"></i> Agenda:</div>
				<ul>
					<li><span className="bold">Session length:</span> 60 minutes</li>
					<li><span className="bold">Presentation length</span> 45 minutes</li>
					<li><span className="bold">Reserved Q&A</span> 15 minutes</li>
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
					<i className="fa-solid fa-link"></i> Join us on <span className="join-us">Thursday, February 29 at 10pm EST</span> via ZOOM at ...
				</section>

				<div className="spacer">&#160;</div>

				{/* <div className="bold">Early Questions from Students about Cypress:</div>

				<ol>
					<li>
						Testing Different Screen Resolutions: Are there plans to allow testing 
						websites for different screen resolutions, not just desktop? How about 
						mobile applications?
					</li>
					<li>
						XPath vs. CSS Selectors: Why is it not possible to use XPath in Cypress? 
						Is it restricted to CSS selectors only?
					</li>
					<li>
						Cypress Conference Participation Certificate: Is there a Cypress 
						conference participation certificate, and is it awarded to those who 
						ask questions or share their Cypress usage experiences, or is it provided 
						to all meeting participants?
					</li>
					<li>
						Advantages and Disadvantages of Cypress: Can you discuss the current advantages 
						and disadvantages of Cypress? What efforts are being made to address any shortcomings?
					</li>
					<li>
						Cypress Testing Internship: Is there an internship opportunity focused 
						on Cypress testing, and would it be interesting for us to join?
					</li>
					<li>
						Cypress Bugs and Test Reliability: Regarding Cypress bugs, sometimes a test 
						fails, but upon restarting Cypress, the test passes without changing the test 
						itself. How does Cypress handle such scenarios?
					</li>
					<li>
						Cypress vs. Microsoft Playwright: How does Cypress compare to Microsoft 
						Playwright in terms of features, advantages, and disadvantages?
					</li>
					<li>
						 Page Object Model (POM) in Cypress: Why is there limited development 
						 or evolution of the Page Object Model (POM) concept in Cypress?
					</li>
					<li>
						CI/CD Integration with Cypress: How can Cypress be effectively integrated 
						into the CI/CD process to ensure seamless build and deployment?
					</li>
					<li>
						Security Testing with Cypress: What capabilities does Cypress offer 
						for conducting security tests, such as XSS or CSRF vulnerability testing?
					</li>
					<li>
						Database Interaction: How does Cypress handle interactions with databases 
						during testing? Is there integration with different types of databases?
					</li>
					<li>
						Community and Support: What role does the community play in the 
						development of Cypress? How is community support provided to new users?
					</li>
					<li>
						Integration with Other Testing Frameworks: How easy is it to integrate 
						Cypress with other testing frameworks if they are already in use in the project?
					</li>
					<li>
						Customization of Reports: How can reports generated by Cypress be customized 
						to meet project or team requirements?
					</li>
					<li>
						Performance Testing Support: How does Cypress support performance 
						testing for web applications, especially under high load conditions?
					</li>
					<li>
						Future of Cypress: What new features and functionalities are planned 
						for future Cypress releases? How can the community contribute to the tool's development?
					</li>
					<li>
						Best Practices: What are the best practices and tips for using Cypress 
						based on your experience?
					</li>
				</ol>

				<section className="bold">
					** Where possible, answers to some of these preliminary questions will 
					be built into the presentation so that the material stays relevant to 
					the types of questions already asked.
				</section> */}

				<section>
					Do you have other questions? Please fill out the form below and Cyress representative 
					will try to answer them.
				</section>

				<section>
					<SupportForm source="cypress_info_questionnaire" displayMessage />
				</section>

				{/* <div className="bold">One Example Reference for Outline Point #3:</div>
				<section>
					A recent use case from a large US and international organization involves a 
					bug that was reported to Cypress &ndash; tests started to fail but the same 
					tests were passing in Selenium. The organization was under pressure to consider 
					switching to Selenium because the tests were "reliable". After coordination between 
					companies however, we were able to discover a legitimate flaw in a 3rd party 
					module that could have impacted their customers. The results being reported 
					from Cypress were 100% accurate. Had they been using only Selenium, that 
					flaw would have slipped through the cracks.
				</section> */}
			</div>
		</div>
	);
};

export default CypressInfo;