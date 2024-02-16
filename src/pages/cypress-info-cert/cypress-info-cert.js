import SupportForm from "../../components/SupportForm/support-form";

import './cypress-info-cert.scss';

const CypressInfoCert = () => {

	return (
		<div className="cypress-info-certificate-container">
			<div className="container">
				<div className="title">Register to receive your certificate</div>

				<section>
					Please provide the name and email address that will be used for the certificate.
				</section>

				<SupportForm source="cypress_info_certificate" />
			</div>
		</div>
	);
}

export default CypressInfoCert;