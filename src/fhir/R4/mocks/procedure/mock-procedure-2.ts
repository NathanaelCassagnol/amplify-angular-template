import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-biopsy.json.html
// Example of a Biopsy

export const mockProcedure2: Procedure = {
    "resourceType": "Procedure",
    "id": "biopsy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Biopsy of suspected melanoma L) arm</div>"
    },
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103693007",
          "display": "Diagnostic procedure (procedure)"
        }
      ],
      "text": "Diagnostic procedure"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "90105005",
          "display": "Biopsy of soft tissue of forearm (Procedure)"
        }
      ],
      "text": "Biopsy of suspected melanoma L) arm"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performedDateTime": "2014-02-03",
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Bert Biopser"
        }
      }
    ],
    "reasonCode": [
      {
        "text": "Dark lesion l) forearm. getting darker last 3 months."
      }
    ],
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "368225008",
            "display": "Entire Left Forearm"
          }
        ],
        "text": "Left forearm"
      }
    ],
    "complication": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "67750007",
            "display": "Ineffective airway clearance (finding)"
          }
        ],
        "text": "Ineffective airway clearance"
      }
    ],
    "followUp": [
      {
        "text": "Review in clinic"
      }
    ],
    "note": [
      {
        "text": "Standard Biopsy"
      }
    ],
    "usedCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "79068005",
            "display": "Needle, device (physical object)"
          }
        ],
        "text": "30-guage needle"
      }
    ]
  }