import { AllergyIntolerance } from "../../types/allergy-intolerance.types";

// https://hl7.org/fhir/R4/allergyintolerance-fishallergy.json.html
// An allergy to a substance with additional details in notes

export const mockAllergyIntolerance3: AllergyIntolerance = {
    "resourceType": "AllergyIntolerance",
    "id": "fishallergy",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>allergy is to fresh fish. Tolerates canned fish</p>\n      <p>recordedDate:2015-08-06T00:00:00-06:00</p>\n      <p>substance:Fish - dietary (substance)</p>\n    </div>"
    },
    "identifier": [
      {
        "system": "http://acme.com/ids/patients/risks",
        "value": "49476535"
      }
    ],
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
    "category": [
      "food"
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "227037002",
          "display": "Fish - dietary (substance)"
        }
      ],
      "text": "Allergic to fresh fish. Tolerates canned fish"
    },
    "patient": {
      "reference": "Patient/example"
    },
    "recordedDate": "2015-08-06T15:37:31-06:00",
    "recorder": {
      "reference": "Practitioner/example"
    }
  }