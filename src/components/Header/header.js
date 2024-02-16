import { ReactComponent as RedroverSchoolLogo } from '../../assets/svg/redrover-school-logo.svg';
import { ReactComponent as CypressLogo } from '../../assets/svg/cypress-logo.svg';
import './header.scss';

const Header = () => {
	return (
		<div className="header-container">
			<div className="container">
				<div className="logo-container">
					<div className="redrover-logo"><RedroverSchoolLogo /></div>
					<div className="cypress-logo"><CypressLogo /></div>
				</div>
				
			</div>
		</div>
	);
}

export default Header;