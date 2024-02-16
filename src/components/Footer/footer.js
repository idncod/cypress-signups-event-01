import './footer.scss';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="container">
				<div className="social-media-container">
					<a href="https://www.facebook.com/groups/redrovercommunity/?ref=share&mibextid=NSMWBT">
						<i class="fa-brands fa-facebook"></i>
					</a>

					<a href="https://t.me/redroverschool">
						<i class="fa-brands fa-telegram"></i>
					</a>

					<a href="https://instagram.com/redrover.school?igshid=YmMyMTA2M2Y=">
						<i class="fa-brands fa-square-instagram"></i>
					</a>

					<a href="https://www.linkedin.com/company/redrover-school">
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</div>

				<div className="trademark">
					RedRover.School {new Date().getFullYear()}
				</div>
				
				<div className="cypress-link-container">
					<a href="https://www.cypress.io/">Visit Cypress.io</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;