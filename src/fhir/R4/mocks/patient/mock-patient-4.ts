import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-c.json.html
// Deceased patient (using time)

export const mockPatient4: Patient = {
    "resourceType": "Patient",
    "id": "pat3",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Patient Simon Notsowell @ Acme Healthcare, Inc. MR = 123457, DECEASED</p>\n    \n    </div>"
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
        "value": "123457"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "family": "Notsowell",
        "given": [
          "Simon"
        ]
      }
    ],
    "gender": "male",
    "birthDate": "1982-01-23",
    "deceasedDateTime": "2015-02-14T13:42:00+10:00",
    "managingOrganization": {
      "reference": "Organization/1",
      "display": "ACME Healthcare, Inc"
    }
  }