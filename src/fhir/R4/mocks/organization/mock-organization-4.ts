import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-insurer.json.html
// XYZ Insurance

export const mockOrganization4: Organization = {
    "resourceType": "Organization",
    "id": "2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>XYZ Insurance</p>\n    \n    </div>"
    },
    "identifier": [
      {
        "system": "urn:oid:2.16.840.1.113883.3.19.2.3",
        "value": "666666"
      }
    ],
    "name": "XYZ Insurance",
    "alias": [
      "ABC Insurance"
    ]
  }