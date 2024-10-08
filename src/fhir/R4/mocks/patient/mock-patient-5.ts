import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-d.json.html
// Deceased patient (using boolean)

export const mockPatient5: Patient = {
    "resourceType": "Patient",
    "id": "pat4",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>Patient Sandy Notsowell @ Acme Healthcare, Inc. MR = 123458, DECEASED</p>\n\t\t</div>"
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
        "system": "urn:oid:0.1.2.3.4.5.6.7",
        "value": "123458"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "family": "Notsowell",
        "given": [
          "Sandy"
        ]
      }
    ],
    "gender": "female",
    "birthDate": "1982-08-02",
    "deceasedBoolean": true,
    "managingOrganization": {
      "reference": "Organization/1",
      "display": "ACME Healthcare, Inc"
    }
  }