import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-physical-therapy.json.html
// Example of a physical therapy evaluation procedure

export const mockProcedure14: Procedure = {
    "resourceType": "Procedure",
    "id": "physical-therapy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Assessment of passive range of motion for both knees on Sept 27, 2016 due to osteoarthritis</div>"
    },
    "basedOn": [
      {
        "reference": "ServiceRequest/physical-therapy",
        "display": "Order for the assessment of passive range of motion"
      }
    ],
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "386053000",
          "display": "Evaluation procedure (procedure)"
        }
      ],
      "text": "Evaluation"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "710830005",
          "display": "Assessment of passive range of motion (procedure)"
        }
      ],
      "text": "Assessment of passive range of motion"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performedDateTime": "2016-09-27",
    "performer": [
      {
        "actor": {
          "display": "Paul Therapist, PT"
        }
      }
    ],
    "location": {
      "display": "Sawbones Orthopedic Clinic"
    },
    "reasonCode": [
      {
        "text": "assessment of mobility limitations due to osteoarthritis"
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "36701003",
            "display": "Both knees (body structure)"
          }
        ],
        "text": "Both knees"
      }
    ]
  }