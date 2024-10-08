import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-request-medsallergies.json.html
// Retrieve a patients medications, allergies, problems and immunizations

export const mockBundle7: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-request-medsallergies",
    "type": "batch",
    "entry": [
      {
        "request": {
          "method": "GET",
          "url": "/Patient/example"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/MedicationStatement?patient=example&_list=$current-medications"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/AllergyIntolerance?patient=example&_list=$current-allergies"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/Condition?patient=example&_list=$current-problems"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/MedicationStatement?patient=example&notgiven:not=true"
        }
      }
    ]
  }