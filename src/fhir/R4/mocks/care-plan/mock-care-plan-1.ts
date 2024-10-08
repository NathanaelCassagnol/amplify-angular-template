import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example.json.html
// Care plan to address obesity that has a goal of weight loss

export const mockCarePlan1: CarePlan = {
    "resourceType": "CarePlan",
    "id": "example",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p> A simple care plan to indicate a patient taking their weight once a day because of obesity.</p>\n    </div>"
    },
    "contained": [
      {
        "resourceType": "Condition",
        "id": "p1",
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active"
            }
          ]
        },
        "verificationStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              "code": "confirmed"
            }
          ]
        },
        "code": {
          "text": "Obesity"
        },
        "subject": {
          "reference": "Patient/example",
          "display": "Peter James Chalmers"
        }
      }
    ],
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "instantiatesUri": [
      "http://example.org/protocol-for-obesity"
    ],
    "basedOn": [
      {
        "display": "Management of Type 2 Diabetes"
      }
    ],
    "replaces": [
      {
        "display": "Plan from urgent care clinic"
      }
    ],
    "partOf": [
      {
        "display": "Overall wellness plan"
      }
    ],
    "status": "active",
    "intent": "plan",
    "category": [
      {
        "text": "Weight management plan"
      }
    ],
    "description": "Manage obesity and weight loss",
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "encounter": {
      "reference": "Encounter/home"
    },
    "period": {
      "end": "2017-06-01"
    },
    "created": "2016-01-01",
    "author": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "careTeam": [
      {
        "reference": "CareTeam/example"
      }
    ],
    "addresses": [
      {
        "reference": "#p1",
        "display": "obesity"
      }
    ],
    "goal": [
      {
        "reference": "Goal/example"
      }
    ],
    "activity": [
      {
        "outcomeCodeableConcept": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "161832001",
                "display": "Progressive weight loss"
              }
            ]
          }
        ],
        "outcomeReference": [
          {
            "reference": "Observation/example",
            "display": "Weight Measured"
          }
        ],
        "detail": {
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "3141-9",
                "display": "Weight Measured"
              },
              {
                "system": "http://snomed.info/sct",
                "code": "27113001",
                "display": "Body weight"
              }
            ]
          },
          "status": "completed",
          "statusReason": {
            "text": "Achieved weight loss to mitigate diabetes risk."
          },
          "doNotPerform": false,
          "scheduledTiming": {
            "repeat": {
              "frequency": 1,
              "period": 1,
              "periodUnit": "d"
            }
          },
          "location": {
            "display": "Patient's home"
          },
          "performer": [
            {
              "reference": "Patient/example",
              "display": "Peter James Chalmers"
            }
          ]
        }
      }
    ]
  }