import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-education.json.html
// Example of patient education

export const mockProcedure15: Procedure = {
    "resourceType": "Procedure",
    "id": "education",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Health education - breast examination for early detection of breast mass</div>"
    },
    "basedOn": [
      {
        "reference": "ServiceRequest/education",
        "display": "Order for health education"
      }
    ],
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "311401005",
          "display": "Patient education (procedure)"
        }
      ],
      "text": "Education"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "48023004",
          "display": "Breast self-examination technique education (procedure)"
        }
      ],
      "text": "Health education - breast examination"
    },
    "subject": {
      "display": "Jane Doe"
    },
    "performedDateTime": "2014-08-16",
    "performer": [
      {
        "actor": {
          "display": "Pamela Educator, RN"
        }
      }
    ],
    "location": {
      "display": "Southside Community Health Center"
    },
    "reasonCode": [
      {
        "text": "early detection of breast mass"
      }
    ]
  }