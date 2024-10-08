import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-emerg.json.html
// Emergency transitioning into inpatient example

export const mockEncounter10: Encounter = {
    "resourceType": "Encounter",
    "id": "emerg",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Emergency visit that escalated into inpatient patient @example</div>"
    },
    "status": "in-progress",
    "statusHistory": [
      {
        "status": "arrived",
        "period": {
          "start": "2017-02-01T07:15:00+10:00",
          "end": "2017-02-01T07:35:00+10:00"
        }
      },
      {
        "status": "triaged",
        "period": {
          "start": "2017-02-01T07:35:00+10:00",
          "end": "2017-02-01T08:45:00+10:00"
        }
      },
      {
        "status": "in-progress",
        "period": {
          "start": "2017-02-01T08:45:00+10:00",
          "end": "2017-02-01T12:15:00+10:00"
        }
      },
      {
        "status": "onleave",
        "period": {
          "start": "2017-02-01T12:15:00+10:00",
          "end": "2017-02-01T12:45:00+10:00"
        }
      },
      {
        "status": "in-progress",
        "period": {
          "start": "2017-02-01T12:45:00+10:00"
        }
      }
    ],
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "IMP",
      "display": "inpatient encounter"
    },
    "classHistory": [
      {
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EMER",
          "display": "emergency"
        },
        "period": {
          "start": "2017-02-01T07:15:00+10:00",
          "end": "2017-02-01T09:27:00+10:00"
        }
      },
      {
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "IMP",
          "display": "inpatient encounter"
        },
        "period": {
          "start": "2017-02-01T09:27:00+10:00"
        }
      }
    ],
    "subject": {
      "reference": "Patient/example"
    },
    "period": {
      "start": "2017-02-01T07:15:00+10:00"
    },
    "hospitalization": {
      "admitSource": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/admit-source",
            "code": "emd",
            "display": "From accident/emergency department"
          }
        ]
      }
    },
    "location": [
      {
        "location": {
          "display": "Emergency Waiting Room"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T07:15:00+10:00",
          "end": "2017-02-01T08:45:00+10:00"
        }
      },
      {
        "location": {
          "display": "Emergency"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T08:45:00+10:00",
          "end": "2017-02-01T09:27:00+10:00"
        }
      },
      {
        "location": {
          "display": "Ward 1, Room 42, Bed 1"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T09:27:00+10:00",
          "end": "2017-02-01T12:15:00+10:00"
        }
      },
      {
        "location": {
          "display": "Ward 1, Room 42, Bed 1"
        },
        "status": "reserved",
        "period": {
          "start": "2017-02-01T12:15:00+10:00",
          "end": "2017-02-01T12:45:00+10:00"
        }
      },
      {
        "location": {
          "display": "Ward 1, Room 42, Bed 1"
        },
        "status": "active",
        "period": {
          "start": "2017-02-01T12:45:00+10:00"
        }
      }
    ]
  }