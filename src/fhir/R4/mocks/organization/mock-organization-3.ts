import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-lab.json.html
// Clinical Laboratory at ACME Healthcare

export const mockOrganization3: Organization = {
    "resourceType": "Organization",
    "id": "1832473e-2fe0-452d-abe9-3cdb9879522f",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Clinical Laboratory @ Acme Hospital. ph: +1 555 234 1234, email: \n        <a href=\"mailto:contact@labs.acme.org\">contact@labs.acme.org</a>\n      </p>\n    \n    </div>"
    },
    "identifier": [
      {
        "system": "http://www.acme.org.au/units",
        "value": "ClinLab"
      }
    ],
    "name": "Clinical Lab",
    "telecom": [
      {
        "system": "phone",
        "value": "+1 555 234 1234",
        "use": "work"
      },
      {
        "system": "email",
        "value": "contact@labs.acme.org",
        "use": "work"
      }
    ]
  }