import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-ob.json.html
// Example of an obstetric procedure

export const mockProcedure13: Procedure = {
    "resourceType": "Procedure",
    "id": "ob",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Vaginal delivery of healthy male infant on June 2, 2012</div>"
    },
    "status": "completed",
    "category": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "386637004",
          "display": "Obstetric procedure (procedure)"
        }
      ],
      "text": "OB"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "22633006",
          "display": "Vaginal delivery, medical personnel present (procedure)"
        }
      ],
      "text": "Vaginal delivery"
    },
    "subject": {
      "display": "Jane Doe"
    },
    "performedDateTime": "2012-06-02",
    "performer": [
      {
        "actor": {
          "display": "Martha Midwife, RNP"
        }
      }
    ],
    "location": {
      "display": "Women’s Hospital"
    },
    "reasonCode": [
      {
        "text": "term pregnancy, active labor"
      }
    ],
    "outcome": {
      "text": "delivery of healthy male infant"
    }
  }