import { Goal } from "fhir/R4/types/goal";

// https://hl7.org/fhir/R4/goal-example.json.html
// Goal of Weight Loss

export const mockGoal1: Goal = {
    "resourceType": "Goal",
    "id": "example",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p> A simple care goal for a patient to lose weight due to obesity.</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "value": "123"
      }
    ],
    "lifecycleStatus": "on-hold",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/goal-category",
            "code": "dietary"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/goal-priority",
          "code": "high-priority",
          "display": "High Priority"
        }
      ],
      "text": "high"
    },
    "description": {
      "text": "Target weight is 160 to 180 lbs."
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "startDate": "2015-04-05",
    "target": [
      {
        "measure": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3141-9",
              "display": "Weight Measured"
            }
          ]
        },
        "detailRange": {
          "low": {
            "value": 160,
            "unit": "lbs",
            "system": "http://unitsofmeasure.org",
            "code": "[lb_av]"
          },
          "high": {
            "value": 180,
            "unit": "lbs",
            "system": "http://unitsofmeasure.org",
            "code": "[lb_av]"
          }
        },
        "dueDate": "2016-04-05"
      }
    ],
    "statusDate": "2016-02-14",
    "statusReason": "Patient wants to defer weight loss until after honeymoon.",
    "expressedBy": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "addresses": [
      {
        "display": "obesity condition"
      }
    ],
    "outcomeReference": [
      {
        "reference": "Observation/example",
        "display": "Body Weight Measured"
      }
    ]
  }