import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-proband.json.html
// Genetic Risk Assessment Person

export const mockPatient16: Patient = {
    "resourceType": "Patient",
    "id": "proband",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n      <p>\n\n        <b>Annie Proband</b>: Female, born 1966-04-04\n      </p>\n\n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "type": {
          "text": "Computer-Stored Abulatory Records (COSTAR)"
        },
        "system": "urn:oid:2.16.840.1.113883.6.117",
        "value": "999999999",
        "assigner": {
          "display": "Boston Massachesetts General Hospital"
        }
      }
    ],
    "active": true,
    "gender": "female",
    "birthDate": "1966-04-04",
    "deceasedBoolean": false
  }