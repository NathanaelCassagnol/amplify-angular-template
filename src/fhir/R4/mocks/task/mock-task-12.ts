import { Task } from "../../types/task";

// https://hl7.org/fhir/R4/task-example-fm-status-resp.html
// Example of the response to checking the processing status of a preauthorization

export const mockTask12: Task = {
    "resourceType": "Task",
    "id": "fm-example6",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http:/happyvalley.com/task",
        "value": "20181012-001"
      },
      {
        "use": "official",
        "system": "http://nationalinsurers.com/identifiers/12345",
        "value": "123GB5674"
      }
    ],
    "status": "completed",
    "intent": "order",
    "priority": "stat",
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/financialtaskcode",
          "code": "status"
        }
      ]
    },
    "focus": {
      "identifier": {
        "system": "http://happyvalley.com/claim",
        "value": "1500"
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
    "output": [
      {
        "type": {
          "coding": [
            {
              "system": "http://hl7.org/financial-taskoutputtype",
              "code": "status"
            }
          ]
        },
        "valueCode": "complete"
      }
    ]
  }