import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-good-health-care.json.html
// Good Health Clinic

export const mockOrganization5: Organization = {
    "resourceType": "Organization",
    "id": "2.16.840.1.113883.19.5",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Good Health Clinic</p>\n    \n    </div>"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "2.16.840.1.113883.19.5"
      }
    ],
    "name": "Good Health Clinic"
  }