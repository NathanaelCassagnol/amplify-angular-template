import { RequestGroup } from "fhir/R4/types/request-group";

// https://hl7.org/fhir/R4/requestgroup-example.json.html
// Simple example request group illustrating related actions with offsets

export const mockRequestGroup1: RequestGroup = {
    "resourceType": "RequestGroup",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Example RequestGroup illustrating related actions to administer medications in sequence with time delay.</div>"
    },
    "contained": [
      {
        "resourceType": "MedicationRequest",
        "id": "medicationrequest-1",
        "status": "unknown",
        "intent": "proposal",
        "medicationCodeableConcept": {
          "text": "Medication 1"
        },
        "subject": {
          "reference": "Patient/example"
        }
      },
      {
        "resourceType": "MedicationRequest",
        "id": "medicationrequest-2",
        "status": "unknown",
        "intent": "proposal",
        "medicationCodeableConcept": {
          "text": "Medication 2"
        },
        "subject": {
          "reference": "Patient/example"
        }
      }
    ],
    "identifier": [
      {
        "value": "requestgroup-1"
      }
    ],
    "groupIdentifier": {
      "system": "http://example.org/treatment-group",
      "value": "00001"
    },
    "status": "draft",
    "intent": "plan",
    "priority": "routine",
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "authoredOn": "2017-03-06T17:31:00Z",
    "author": {
      "reference": "Practitioner/1"
    },
    "reasonCode": [
      {
        "text": "Treatment"
      }
    ],
    "note": [
      {
        "text": "Additional notes about the request group"
      }
    ],
    "action": [
      {
        "prefix": "1",
        "title": "Administer Medications",
        "description": "Administer medications at the appropriate time",
        "textEquivalent": "Administer medication 1, followed an hour later by medication 2",
        "timingDateTime": "2017-03-06T19:00:00Z",
        "participant": [
          {
            "reference": "Practitioner/1"
          }
        ],
        "groupingBehavior": "logical-group",
        "selectionBehavior": "all",
        "requiredBehavior": "must",
        "precheckBehavior": "yes",
        "cardinalityBehavior": "single",
        "action": [
          {
            "id": "medication-action-1",
            "description": "Administer medication 1",
            "type": {
              "coding": [
                {
                  "code": "create"
                }
              ]
            },
            "resource": {
              "reference": "#medicationrequest-1"
            }
          },
          {
            "id": "medication-action-2",
            "description": "Administer medication 2",
            "relatedAction": [
              {
                "actionId": "medication-action-1",
                "relationship": "after-end",
                "offsetDuration": {
                  "value": 1,
                  "unit": "h"
                }
              }
            ],
            "type": {
              "coding": [
                {
                  "code": "create"
                }
              ]
            },
            "resource": {
              "reference": "#medicationrequest-2"
            }
          }
        ]
      }
    ]
  }