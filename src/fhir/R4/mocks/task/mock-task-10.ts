import { Task } from "../../types/task";

// https://hl7.org/fhir/R4/task-example-fm-reprocess.json.html
// Example of the cancellation of a preauthorization

export const mockTask10: Task = {
    "resourceType": "Task",
    "id": "fm-example4",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http:/happyvalley.com/task",
        "value": "20181012-006"
      }
    ],
    "status": "requested",
    "intent": "order",
    "priority": "stat",
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/financialtaskcode",
          "code": "reprocess"
        }
      ]
    },
    "focus": {
      "identifier": {
        "system": "http://happyvalley.com/claim",
        "value": "1501"
      }
    },
    "authoredOn": "2018-10-04T08:25:05+10:00",
    "lastModified": "2018-10-04T08:25:05+10:00",
    "requester": {
      "reference": "Organization/example",
      "display": "Happy Valley Clinic"
    },
    "owner": {
      "identifier": {
        "system": "http://nationalinsurers.com/identifiers",
        "value": "12345"
      }
    },
    "input": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
              "code": "origresponse"
            }
          ]
        },
        "valueReference": {
          "identifier": {
            "system": "http://nationalinsurers.com/claimresponse",
            "value": "CR201810040001234"
          }
        }
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
              "code": "reference"
            }
          ]
        },
        "valueString": "BR12345"
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
              "code": "item"
            }
          ]
        },
        "valuePositiveInt": 2
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
              "code": "item"
            }
          ]
        },
        "valuePositiveInt": 3
      }
    ]
  }