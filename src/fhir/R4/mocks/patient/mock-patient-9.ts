import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-xds.json.html
// XDS Patient

export const mockPatient9: Patient = {
    "resourceType": "Patient",
    "id": "xds",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Patient John Doe, M, 27-May 1956. ID: 89765a87b</p>\n    \n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "MR"
            }
          ]
        },
        "system": "urn:oid:1.2.3.4.5",
        "value": "89765a87b"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "Doe",
        "given": [
          "John"
        ]
      }
    ],
    "gender": "male",
    "birthDate": "1956-05-27",
    "address": [
      {
        "line": [
          "100 Main St"
        ],
        "city": "Metropolis",
        "state": "Il",
        "postalCode": "44130",
        "country": "USA"
      }
    ],
    "managingOrganization": {
      "reference": "Organization/2"
    }
  }