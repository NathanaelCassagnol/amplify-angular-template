import { Schedule } from "../../types/schedule";

// https://hl7.org/fhir/R4/schedule-provider-location2-example.json.html
// Example 2 of a Schedule resource with a composite schedulable resource

export const mockSchedule3: Schedule = {
    "resourceType": "Schedule",
    "id": "exampleloc2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Dr. Beverly Crusher - Starfleet HQ Sickbay Schedule\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "47"
      }
    ],
    "active": true,
    "serviceCategory": [
      {
        "coding": [
          {
            "code": "31",
            "display": "Specialist Surgical"
          }
        ]
      }
    ],
    "serviceType": [
      {
        "coding": [
          {
            "code": "221",
            "display": "Surgery - General"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "code": "394610002",
            "display": "Surgery-Neurosurgery"
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
        "reference": "Location/2",
        "display": "Starfleet HQ Sickbay"
      }
    ],
    "planningHorizon": {
      "start": "2017-12-25T09:15:00Z",
      "end": "2017-12-25T09:30:00Z"
    },
    "comment": "The slots attached to this schedule are for neurosurgery operations at Starfleet HQ only."
  }