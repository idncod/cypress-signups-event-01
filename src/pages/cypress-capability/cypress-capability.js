import QuestionsToRepForm from '../../components/QuestionsToRepForm/questions-to-rep-form';
import './cypress-capability.scss';

const CypressCapability = () => {
	return (
		<div className="cypress-capability-container">
			<div className="container">
				<section>
					Cypress is a popular automation test framework that is familiar to many 
					due to it's widespread adoption. Although Cypress began as an open-source 
					test runner, the company has recently introduced many new features that 
					will allow you to use the open source test runner to ensure overall application quality.
				</section>

				<section className="bold">
					This session will provide helpful information about the application quality 
					capabilities in Cypress that are changing the expectations of what a test 
					automation framework should look like.
				</section>

				<div className="bold"><i class="fa-regular fa-calendar-check"></i> Agenda:</div>
				<ul>
					<li><span className="bold">Session length:</span> 60 minutes</li>
					<li><span className="bold">Presentation length</span> 45 minutes</li>
					<li><span className="bold">Reserved Q&A</span> 15 minutes</li>
				</ul>

				<div className="bold"><i class="fa-regular fa-rectangle-list"></i> Outline:</div>
				<ol>
					<li>
						<span className="bold">Overview of Cypress</span>;
					</li>
					<li>
						<span className="bold">Timeline</span>&#160;
						of test capabilities and features
					</li>
					<li>
						<span className="bold">Why Application Quality?</span>
					</li>
					<li>
						<span className="bold">Test Replay</span>
					</li>
					<li>
						<span className="bold">Cypress Accessibility</span>
					</li>
					<li>
						<span className="bold">UI Coverage</span>
					</li>
					<li>
						<span className="bold">Test Program Reporting and Analytics</span>
					</li>
					<li>
						<span className="bold">Setup and configuration</span>&#160;
						overview
					</li>
					<li>
						<span className="bold">Q&A</span>
					</li>
				</ol>

				<section className="join-us-container">
					Join us on <span class="join-us">Thursday, March 7 at 10pm EST</span> via ZOOM at ...
				</section>

				<div className="spacer">&#160;</div>

				<section>
					Do you have questions? Please fill out the form below and Cyress representative 
					will try to answer them.
				</section>

				<section>
					<QuestionsToRepForm />
				</section>
			</div>
		</div>
	);
};

export default CypressCapability;