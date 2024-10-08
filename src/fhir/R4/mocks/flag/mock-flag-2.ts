import { Flag } from "../../types/flag";

// https://hl7.org/fhir/R4/flag-example-encounter.json.html
// Encounter Specific Alert

export const mockFlag2: Flag = {
    "resourceType": "Flag",
    "id": "example-encounter",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Follow Infection Control Level 3 Protocol</div>"
    },
    "status": "active",
    "category": [
      {
        "coding": [
          {
            "system": "http://example.org/local",
            "code": "infection",
            "display": "Infection Control Level"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://example.org/local/if1",
          "code": "l3",
          "display": "Follow Level 3 Protocol"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter Patient"
    },
    "encounter": {
      "reference": "Encounter/example"
    }
  }