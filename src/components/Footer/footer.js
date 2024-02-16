import './footer.scss';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="container">
				RedRover.School {new Date().getFullYear()}
			</div>
		</div>
	);
}

export default Footer;