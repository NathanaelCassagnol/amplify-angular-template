import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example.json.html
// General Procedure Example

export const mockProcedure1: Procedure = {
    "resourceType": "Procedure",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Routine Appendectomy</div>"
    },
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "80146002",
          "display": "Appendectomy (Procedure)"
        }
      ],
      "text": "Appendectomy"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performedDateTime": "2013-04-05",
    "recorder": {
      "reference": "Practitioner/example",
      "display": "Dr Cecil Surgeon"
    },
    "asserter": {
      "reference": "Practitioner/example",
      "display": "Dr Cecil Surgeon"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Cecil Surgeon"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Generalized abdominal pain 24 hours. Localized in RIF with rebound and guarding"
      }
    ],
    "followUp": [
      {
        "text": "ROS 5 days  - 2013-04-10"
      }
    ],
    "note": [
      {
        "text": "Routine Appendectomy. Appendix was inflamed and in retro-caecal position"
      }
    ]
  }