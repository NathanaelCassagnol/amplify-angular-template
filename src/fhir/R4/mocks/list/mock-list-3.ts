import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-simple-empty.json.html
// Empty List (no exception reason)

export const mockList3: List = {
    "resourceType": "List",
    "id": "example-simple-empty",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Patient Admission Waitoing list</p>\n    </div>"
    },
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://acme.com/list-codes",
          "code": "346638",
          "display": "Patient Admission List"
        }
      ]
    },
    "date": "2016-07-14T11:54:05+10:00"
  }