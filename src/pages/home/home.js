import './home.scss';

const Home = () => {
	
	return (
		<div className="home-page-container">
			<div className="container">
				<section>
					Hello and welcome to the RedRover School.
				</section>

				<section>
					Here is a list of the upcoming sessions:
				</section>

				<section>
					<div>
						<span class="bold">Session 1:</span>&#160;
						<a href="/cypress-info">A Complete Solution to Ensure Application Quality</a>
					</div>
					<div>
						<span class="bold">Overview:</span> How does Cypress compare to other frameworкs 
						such as Playwright and Selenium?
					</div>
					<div>
						<span class="bold">Session Time:</span> Thursday, February 29 at 10pm EST</div>
				</section>

				<section>
					<div>
						<span class="bold">Session 2:</span>&#160;
						<a href="/cypress-capability">Test Automation Choices</a>
					</div>
					<div>
						<span class="bold">Overview:</span> How does Cypress changing the expectations 
						of what a test automation framework should look like
					</div>
					<div>
						<span class="bold">Session Time:</span> Thursday, March 7 at 10pm EST
					</div>
				</section>

				<section>
					Please click on above links for more information.
				</section>
				
				{/* <div><a href="/cypress-info-certificate">cypress info certificate page</a></div>
				<div><a href="/cypress-power-certificate">cypress capability certificate page</a></div> */}

			</div>
		</div>
	);
}

export default Home;