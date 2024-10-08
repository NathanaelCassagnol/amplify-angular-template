import { AuditEvent } from "fhir/R4/types/audit-event";

// https://hl7.org/fhir/R4/auditevent-example-disclosure.json.html
// Accounting of a Disclosure

export const mockAuditEvent5: AuditEvent = {
    "resourceType": "AuditEvent",
    "id": "example-disclosure",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Disclosure by some idiot, for marketing reasons, to places unknown, of a Poor Sap, data about Everthing important.</div>"
    },
    "type": {
      "system": "http://dicom.nema.org/resources/ontology/DCM",
      "code": "110106",
      "display": "Export"
    },
    "subtype": [
      {
        "code": "Disclosure",
        "display": "HIPAA disclosure"
      }
    ],
    "action": "R",
    "recorded": "2013-09-22T00:08:00Z",
    "outcome": "0",
    "outcomeDesc": "Successful  Disclosure",
    "purposeOfEvent": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "HMARKT",
            "display": "healthcare marketing"
          }
        ]
      }
    ],
    "agent": [
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
            "value": "SomeIdiot@nowhere"
          }
        },
        "altId": "notMe",
        "name": "That guy everyone wishes would be caught",
        "requestor": true,
        "location": {
          "reference": "Location/1"
        },
        "policy": [
          "http://consent.com/yes"
        ],
        "network": {
          "address": "custodian.net",
          "type": "1"
        }
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://dicom.nema.org/resources/ontology/DCM",
              "code": "110152",
              "display": "Destination Role ID"
            }
          ]
        },
        "who": {
          "reference": "Practitioner/example",
          "display": "Where"
        },
        "requestor": false,
        "network": {
          "address": "marketing.land",
          "type": "1"
        },
        "purposeOfUse": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                "code": "HMARKT",
                "display": "healthcare marketing"
              }
            ]
          }
        ]
      }
    ],
    "source": {
      "site": "Watcher",
      "observer": {
        "display": "Watchers Accounting of Disclosures Application"
      },
      "type": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
          "code": "4",
          "display": "Application Server"
        }
      ]
    },
    "entity": [
      {
        "what": {
          "reference": "Patient/example"
        },
        "type": {
          "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",
          "code": "1",
          "display": "Person"
        },
        "role": {
          "system": "http://terminology.hl7.org/CodeSystem/object-role",
          "code": "1",
          "display": "Patient"
        }
      },
      {
        "what": {
          "reference": "Patient/example/_history/1",
          "identifier": {
            "value": "What.id"
          }
        },
        "type": {
          "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",
          "code": "2",
          "display": "System Object"
        },
        "role": {
          "system": "http://terminology.hl7.org/CodeSystem/object-role",
          "code": "4",
          "display": "Domain Resource"
        },
        "lifecycle": {
          "system": "http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle",
          "code": "11",
          "display": "Disclosure"
        },
        "securityLabel": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code": "V",
            "display": "very restricted"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "STD",
            "display": "sexually transmitted disease information sensitivity"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "DELAU",
            "display": "delete after use"
          }
        ],
        "name": "Namne of What",
        "description": "data about Everthing important"
      }
    ]
  }