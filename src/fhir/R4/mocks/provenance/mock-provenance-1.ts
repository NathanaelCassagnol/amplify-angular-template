import { Provenance } from "fhir/R4/types/provenance";

// https://hl7.org/fhir/R4/provenance-example.json.html
// General Provenance Example

export const mockProvenance1: Provenance = {
    "resourceType": "Provenance",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">procedure record authored on 27-June 2015 by Harold Hippocrates, MD Content extracted from XDS managed CDA Referral received 26-June as authorized by a referenced Consent.</div>"
    },
    "target": [
      {
        "reference": "Procedure/example/_history/1"
      }
    ],
    "occurredPeriod": {
      "start": "2015-06-27",
      "end": "2015-06-28"
    },
    "recorded": "2015-06-27T08:39:24+10:00",
    "policy": [
      "http://acme.com/fhir/Consent/25"
    ],
    "location": {
      "reference": "Location/1"
    },
    "reason": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "3457005",
            "display": "Referral"
          }
        ]
      }
    ],
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "AUT"
            }
          ]
        },
        "who": {
          "reference": "Practitioner/xcda-author"
        }
      },
      {
        "id": "a1",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "DEV"
            }
          ]
        },
        "who": {
          "reference": "Device/software"
        }
      }
    ],
    "entity": [
      {
        "role": "source",
        "what": {
          "reference": "DocumentReference/example",
          "display": "CDA Document in XDS repository"
        }
      }
    ]
  }