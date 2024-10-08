import { AuditEvent } from "fhir/R4/types/audit-event";

// https://hl7.org/fhir/R4/auditevent-example-error.json.html
// Audit of a transaction that was failed resulting in OperationOutcome

export const mockAuditEvent9: AuditEvent = {
    "resourceType": "AuditEvent",
    "id": "example-error",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Recording that an error has happened due to a client requesting that an Observation resource be Created on the Patient endpoint. Note that the OperationOutcome from failed transaction is recorded as an AuditEvent.entity.</div>"
    },
    "contained": [
      {
        "resourceType": "OperationOutcome",
        "id": "o1",
        "issue": [
          {
            "severity": "error",
            "code": "invalid",
            "details": {
              "text": "Invalid pointer operation"
            }
          }
        ]
      }
    ],
    "type": {
      "system": "http://terminology.hl7.org/CodeSystem/audit-event-type",
      "code": "rest",
      "display": "Restful Operation"
    },
    "subtype": [
      {
        "system": "http://hl7.org/fhir/restful-interaction",
        "code": "create",
        "display": "create"
      }
    ],
    "action": "C",
    "recorded": "2017-09-07T23:42:24Z",
    "outcome": "8",
    "outcomeDesc": "Invalid request to create an Operation resource on the Patient endpoint.",
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
              "code": "humanuser",
              "display": "human user"
            }
          ]
        },
        "who": {
          "identifier": {
            "value": "95"
          }
        },
        "altId": "601847123",
        "name": "Grahame Grieve",
        "requestor": true
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://dicom.nema.org/resources/ontology/DCM",
              "code": "110153",
              "display": "Source Role ID"
            }
          ]
        },
        "who": {
          "identifier": {
            "system": "urn:oid:2.16.840.1.113883.4.2",
            "value": "2.16.840.1.113883.4.2"
          }
        },
        "altId": "6580",
        "requestor": false,
        "network": {
          "address": "Workstation1.ehr.familyclinic.com",
          "type": "1"
        }
      }
    ],
    "source": {
      "site": "Cloud",
      "observer": {
        "identifier": {
          "value": "hl7connect.healthintersections.com.au"
        }
      },
      "type": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
          "code": "3",
          "display": "Web Server"
        }
      ]
    },
    "entity": [
      {
        "type": {
          "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",
          "code": "2",
          "display": "System Object"
        },
        "detail": [
          {
            "type": "requested transaction",
            "valueString": "http POST ..... "
          }
        ]
      },
      {
        "what": {
          "reference": "#o1"
        },
        "type": {
          "system": "http://hl7.org/fhir/resource-types",
          "code": "OperationOutcome",
          "display": "OperationOutcome"
        },
        "description": "transaction failed"
      }
    ]
  }