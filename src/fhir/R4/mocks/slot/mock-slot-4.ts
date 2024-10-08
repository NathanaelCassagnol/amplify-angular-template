import { Slot } from "../../types/slot";

// https://hl7.org/fhir/R4/slot-example-unavailable.json.html
// Example of a slot that has been marked as unavailable

export const mockSlot4: Slot = {
    "resourceType": "Slot",
    "id": "3",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:30am - 9:45am: <b>Unavailable</b> Physiotherapy<br/>\n\t\t\tDr Careful is out of the office\n\t\t</div>"
    },
    "serviceCategory": [
      {
        "coding": [
          {
            "code": "17",
            "display": "General Practice"
          }
        ]
      }
    ],
    "schedule": {
      "reference": "Schedule/example"
    },
    "status": "busy-unavailable",
    "start": "2013-12-25T09:30:00Z",
    "end": "2013-12-25T09:45:00Z",
    "comment": "Dr Careful is out of the office"
  }