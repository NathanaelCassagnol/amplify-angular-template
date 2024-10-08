import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-example.json.html
// An example of a search response

export const mockBundle4: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-example",
    "meta": {
      "lastUpdated": "2014-08-18T01:43:30Z"
    },
    "type": "searchset",
    "total": 3,
    "link": [
      {
        "relation": "self",
        "url": "https://example.com/base/MedicationRequest?patient=347&_include=MedicationRequest.medication&_count=2"
      },
      {
        "relation": "next",
        "url": "https://example.com/base/MedicationRequest?patient=347&searchId=ff15fd40-ff71-4b48-b366-09c706bed9d0&page=2"
      }
    ],
    "entry": [
      {
        "fullUrl": "https://example.com/base/MedicationRequest/3123",
        "resource": {
          "resourceType": "MedicationRequest",
          "id": "3123",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 3123</p><p><b>status</b>: unknown</p><p><b>intent</b>: order</p><p><b>medication</b>: <a>Medication/example</a></p><p><b>subject</b>: <a>Patient/347</a></p></div>"
          },
          "status": "unknown",
          "intent": "order",
          "medicationReference": {
            "reference": "Medication/example"
          },
          "subject": {
            "reference": "Patient/347"
          }
        },
        "search": {
          "mode": "match",
          "score": 1
        }
      },
      {
        "fullUrl": "https://example.com/base/Medication/example",
        "resource": {
          "resourceType": "Medication",
          "id": "example",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p></div>"
          }
        },
        "search": {
          "mode": "include"
        }
      }
    ]
  }
  