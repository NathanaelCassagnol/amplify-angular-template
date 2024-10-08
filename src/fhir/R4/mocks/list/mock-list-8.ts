import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-allergies.json.html
// Example of current allergies list

export const mockList8: List = {
    "resourceType": "List",
    "id": "current-allergies",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Patient Peter Chalmers, DOB = Dec 25, 1974, MRN = 12345 (Acme Healthcare) has the following allergies</p>\n      <ul>\n        <li>cashew nut allergenic extract Injectable Product (<b>High</b>)</li>\n        <li>Allergenic extract, penicillin (high)</li>\n      </ul>\n    </div>"
    },
    "status": "current",
    "mode": "working",
    "title": "Current Allergy List",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "52472-8",
          "display": "Allergies and Adverse Drug Reactions"
        }
      ],
      "text": "Current Allergy List"
    },
    "date": "2015-07-14T23:10:23+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "orderedBy": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/list-order",
          "code": "entry-date"
        }
      ]
    },
    "entry": [
      {
        "item": {
          "reference": "AllergyIntolerance/example"
        }
      },
      {
        "item": {
          "reference": "AllergyIntolerance/medication"
        }
      }
    ]
  }