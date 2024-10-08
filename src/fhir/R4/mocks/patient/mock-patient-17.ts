import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-genetics-example1.json.html
// Additional Genetics Example

export const mockPatient17: Patient = {
    "resourceType": "Patient",
    "id": "genetics-example1",
    "meta": {
      "lastUpdated": "2012-05-29T23:45:32Z"
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Everywoman, Eve. SSN:\n      444222222</div>"
    },
    "identifier": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "SS"
            }
          ]
        },
        "system": "http://hl7.org/fhir/sid/us-ssn",
        "value": "444222222"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "family": "Everywoman",
        "given": [
          "Eve"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "555-555-2003",
        "use": "work"
      }
    ],
    "gender": "female",
    "birthDate": "1973-05-31",
    "address": [
      {
        "use": "home",
        "line": [
          "2222 Home Street"
        ]
      }
    ],
    "managingOrganization": {
      "reference": "Organization/hl7"
    }
  }