import SupportForm from "../../components/SupportForm/support-form";

import './cypress-capability-cert.scss';

const CypressCapabilityCert = () => {
	return (
		<div className="cypress-capability-certificate-container">
			<div className="container">
				<div className="title">Register to receive your certificate</div>

				<section>
					Please provide the name and email address that will be used for the certificate.
				</section>

				<SupportForm source="cypress_capability_certificate" />
			</div>
		</div>
	);
};

export default CypressCapabilityCert;