import { Schedule } from "../../types/schedule";

// https://hl7.org/fhir/R4/schedule-example.json.html
// Example of an Schedule resource

export const mockSchedule1: Schedule = {
    "resourceType": "Schedule",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Burgers UMC, South Wing, second floor Physiotherapy Schedule\n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "45"
      }
    ],
    "active": true,
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
    "serviceType": [
      {
        "coding": [
          {
            "code": "57",
            "display": "Immunization"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "code": "408480009",
            "display": "Clinical immunology"
          }
        ]
      }
    ],
    "actor": [
      {
        "reference": "Location/1",
        "display": "Burgers UMC, South Wing, second floor"
      }
    ],
    "planningHorizon": {
      "start": "2013-12-25T09:15:00Z",
      "end": "2013-12-25T09:30:00Z"
    },
    "comment": "The slots attached to this schedule should be specialized to cover immunizations within the clinic"
  }