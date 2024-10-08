import { Task } from "../../types/task";

// https://hl7.org/fhir/R4/task-example-fm-poll.json.html
// Example of polling for queued resources

export const mockTask8: Task = {
    "resourceType": "Task",
    "id": "fm-example2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http:/happyvalley.com/task",
        "value": "20181012-005"
      }
    ],
    "status": "requested",
    "intent": "order",
    "priority": "stat",
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/financialtaskcode",
          "code": "poll"
        }
      ]
    },
    "authoredOn": "2018-10-12T08:25:05+10:00",
    "lastModified": "2018-10-12T08:25:05+10:00",
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
              "code": "include"
            }
          ]
        },
        "valueCode": "ClaimResponse"
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/financialtaskinputtype",
              "code": "period"
            }
          ]
        },
        "valuePeriod": {
          "start": "2018-10-01",
          "end": "2018-10-12"
        }
      }
    ]
  }