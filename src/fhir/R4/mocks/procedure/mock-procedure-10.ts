import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-colon-biopsy.json.html
// Example of biopsy procedure that was part of a colonoscopy

export const mockProcedure10: Procedure = {
    "resourceType": "Procedure",
    "id": "colon-biopsy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Biopsy of colon, which was part of colonoscopy</div>"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "partOf": [
      {
        "reference": "Procedure/colonoscopy",
        "display": "Colonoscopy"
      }
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "76164006",
          "display": "Biopsy of colon (procedure)"
        }
      ],
      "text": "Biopsy of colon"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        }
      }
    ],
    "location": {
      "reference": "Location/1",
      "display": "Burgers University Medical Center, South Wing, second floor"
    }
  }