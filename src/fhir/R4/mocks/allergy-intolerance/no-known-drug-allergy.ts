import { AllergyIntolerance } from "../../types/allergy-intolerance.types";

// https://hl7.org/fhir/R4/allergyintolerance-nkda.json.html
// No Known Drug Allergy

export const mockAllergyIntoleranceNoKnownDrugAllergy: AllergyIntolerance = {
    "resourceType": "AllergyIntolerance",
    "id": "nkda",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>No Known Drug Allergy</p>\n      <p>recordedDate:2015-08-06</p>\n    </div>"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "confirmed",
          "display": "Confirmed"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "409137002",
          "display": "No Known Drug Allergy (situation)"
        }
      ],
      "text": "NKDA"
    },
    "patient": {
      "reference": "Patient/mom"
    },
    "recordedDate": "2015-08-06T15:37:31-06:00",
    "recorder": {
      "reference": "Practitioner/example"
    }
  }