import { Slot } from "../../types/slot";

// https://hl7.org/fhir/R4/slot-example-tentative.json.html
// Example for tentatively occupied slot

export const mockSlot3: Slot = {
    "resourceType": "Slot",
    "id": "2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:45am - 10:00am: <b>Tentative</b> Physiotherapy\n\t\t</div>"
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
    "status": "busy-tentative",
    "start": "2013-12-25T09:45:00Z",
    "end": "2013-12-25T10:00:00Z",
    "comment": "Dr Careful is out of the office"
  }