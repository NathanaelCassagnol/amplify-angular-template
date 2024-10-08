import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-newborn.json.html
// Newborn Patient Example

export const mockPatient19: Patient = {
    "resourceType": "Patient",
    "id": "newborn",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: newborn</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 05/09/2017</p><p><b>multipleBirth</b>: 2</p></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
        "valueString": "Everywoman"
      }
    ],
    "gender": "male",
    "birthDate": "2017-09-05",
    "_birthDate": {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
          "valueDateTime": "2017-05-09T17:11:00+01:00"
        }
      ]
    },
    "multipleBirthInteger": 2
  }