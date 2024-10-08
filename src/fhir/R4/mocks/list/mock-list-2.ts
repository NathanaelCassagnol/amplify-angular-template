import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-empty.json.html
// Empty List Example

export const mockList2: List = {
    "resourceType": "List",
    "id": "example-empty",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>The patient is not on any medications</p>\n    </div>"
    },
    "status": "current",
    "mode": "snapshot",
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
    "date": "2012-11-26T07:30:23+11:00",
    "source": {
      "reference": "Patient/example"
    },
    "emptyReason": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/list-empty-reason",
          "code": "nilknown",
          "display": "Nil Known"
        }
      ],
      "text": "The patient is not on any medications"
    }
  }