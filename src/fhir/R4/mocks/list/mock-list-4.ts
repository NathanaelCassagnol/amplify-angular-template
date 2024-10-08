import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-medlist.json.html
// Example Medication Change List

export const mockList4: List = {
    "resourceType": "List",
    "id": "med-list",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Add hydroxocobalamin</p>\n      <p>Cancel Morphine Sulphate</p>\n    </div>"
    },
    "status": "current",
    "mode": "changes",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "182836005",
          "display": "Review of medication"
        }
      ],
      "text": "Medication Review"
    },
    "date": "2013-11-20T23:10:23+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "entry": [
      {
        "flag": {
          "coding": [
            {
              "system": "http://nehta.gov.au/codes/medications/changetype",
              "code": "01",
              "display": "Prescribed"
            }
          ]
        },
        "item": {
          "display": "hydroxocobalamin"
        }
      },
      {
        "flag": {
          "coding": [
            {
              "system": "http://nehta.gov.au/codes/medications/changetype",
              "code": "02",
              "display": "Cancelled"
            }
          ]
        },
        "deleted": true,
        "item": {
          "display": "Morphine Sulfate"
        }
      }
    ]
  }