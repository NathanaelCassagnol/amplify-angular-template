import { Task } from "../../types/task";

// https://hl7.org/fhir/R4/task-example-fm-release.json.html
// Example of the release of the balance of reserved funds for a preauthorization

export const mockTask9: Task = {
    "resourceType": "Task",
    "id": "fm-example3",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Generated Narrative with Details</b>\n\t\t\t</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http:/happyvalley.com/task",
        "value": "20181012-001"
      }
    ],
    "status": "requested",
    "intent": "order",
    "priority": "stat",
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/financialtaskcode",
          "code": "release"
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
              "system": "http://hl7.org/financial-taskinputtype",
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
      }
    ]
  }