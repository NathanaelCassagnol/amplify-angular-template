import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-search-warning.json.html
// An example an empty search result with a warning

export const mockBundle11: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-search-warning",
    "meta": {
      "lastUpdated": "2017-03-14T08:23:30+11:00"
    },
    "type": "searchset",
    "total": 0,
    "link": [
      {
        "relation": "self",
        "url": "https://example.org/fhir/Observation?patient.identifier=http://example.com/fhir/identifier/mrn|123456"
      }
    ],
    "entry": [
      {
        "resource": {
          "resourceType": "OperationOutcome",
          "id": "warning",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">There is no matching patient for MRN 123456</div>"
          },
          "issue": [
            {
              "severity": "warning",
              "code": "not-found",
              "details": {
                "text": "There is no matching patient for MRN 123456"
              }
            }
          ]
        },
        "search": {
          "mode": "outcome"
        }
      }
    ]
  }