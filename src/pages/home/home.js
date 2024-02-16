import './home.scss';

const Home = () => {
	
	return (
		<div className="home-page-container">
			<div className="container">
				<section>
					Hello and welcome to the RedRover School.
				</section>

				<section>
					Here is a list of the upcoming events:
				</section>

				<section>
					<div><a href="/cypress-info">Cypress Overview</a></div>
					<div>How does Cypress compare to other framewords such as Playwright and Selenium?</div>
				</section>

				<section>
					<div><a href="/cypress-capability">Cypress capabilities</a></div>
					<div>How does Cypress changing the expectations of what a test automation framework should look like</div>
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