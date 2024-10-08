import { Schedule } from "../../types/schedule";

// https://hl7.org/fhir/R4/schedule-provider-location1-example.json.html
// Example 1 of a Schedule resource with a composite schedulable resource

export const mockSchedule2: Schedule = {
    "resourceType": "Schedule",
    "id": "exampleloc1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Dr. Beverly Crusher - USS Enterprise-D Sickbay Schedule\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "46"
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
            "code": "75",
            "display": "Genetic Counselling"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "code": "394580004",
            "display": "Clinical genetics"
          }
        ]
      }
    ],
    "actor": [
      {
        "reference": "Practitioner/1",
        "display": "Dr. Beverly Crusher"
      },
      {
        "reference": "Location/3",
        "display": "USS Enterprise-D Sickbay"
      }
    ],
    "planningHorizon": {
      "start": "2017-12-25T09:15:00Z",
      "end": "2017-12-25T09:30:00Z"
    },
    "comment": "The slots attached to this schedule are for genetic counselling in the USS Enterprise-D Sickbay."
  }