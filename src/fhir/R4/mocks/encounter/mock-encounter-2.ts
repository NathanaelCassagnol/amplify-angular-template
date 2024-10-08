import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-home.json.html
// Encounter example - virtual encounter

export const mockEncounter2: Encounter = {
    "resourceType": "Encounter",
    "id": "home",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Encounter with patient @example who is at home</div>"
    },
    "contained": [
      {
        "resourceType": "Location",
        "id": "home",
        "description": "Client's home",
        "mode": "kind"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "HH",
      "display": "home health"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "participant": [
      {
        "period": {
          "start": "2015-01-17T16:00:00+10:00",
          "end": "2015-01-17T16:30:00+10:00"
        },
        "individual": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        }
      }
    ],
    "period": {
      "start": "2015-01-17T16:00:00+10:00",
      "end": "2015-01-17T16:30:00+10:00"
    },
    "location": [
      {
        "location": {
          "reference": "#home",
          "display": "Client's home"
        },
        "status": "completed",
        "period": {
          "start": "2015-01-17T16:00:00+10:00",
          "end": "2015-01-17T16:30:00+10:00"
        }
      }
    ]
  }