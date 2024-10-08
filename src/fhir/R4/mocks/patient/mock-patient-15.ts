import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-glossy-example.json.html
// Example for glossy

export const mockPatient15: Patient = {
    "resourceType": "Patient",
    "id": "glossy",
    "meta": {
      "lastUpdated": "2014-11-13T11:41:00+11:00"
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Henry Levin the 7th</p>\n      <p>MRN: 123456. Male, 24-Sept 1932</p>\n    </div>"
    },
    "extension": [
      {
        "url": "http://example.org/StructureDefinition/trials",
        "valueCode": "renal"
      }
    ],
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
        "system": "http://www.goodhealth.org/identifiers/mrn",
        "value": "123456"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "Levin",
        "given": [
          "Henry"
        ],
        "suffix": [
          "The 7th"
        ]
      }
    ],
    "gender": "male",
    "birthDate": "1932-09-24",
    "generalPractitioner": [
      {
        "reference": "Practitioner/example",
        "display": "Dr Adam Careful"
      }
    ],
    "managingOrganization": {
      "reference": "Organization/2",
      "display": "Good Health Clinic"
    }
  }