import { CapabilityStatement } from "../../types/capability-statement";

// https://hl7.org/fhir/R4/capabilitystatement-messagedefinition.json.html
// Showing new message definition structure

export const mockCapabilityStatement8: CapabilityStatement = {
    "resourceType": "CapabilityStatement",
    "id": "messagedefinition",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2/>\n      <div>\n        <p>Sample capability statement showing new MessageDefinition structure</p>\n\n      </div>\n    </div>"
    },
    "status": "draft",
    "experimental": true,
    "date": "2012-01-04",
    "publisher": "ACME Corporation",
    "contact": [
      {
        "name": "System Administrator",
        "telecom": [
          {
            "system": "email",
            "value": "wile@acme.org"
          }
        ]
      }
    ],
    "description": "Sample capability statement showing new MessageDefinition structure",
    "kind": "instance",
    "software": {
      "name": "EHR"
    },
    "implementation": {
      "description": "Acme Message endpoint",
      "url": "http://acem.com/fhir/message-drop"
    },
    "fhirVersion": "4.0.1",
    "format": [
      "xml",
      "json"
    ],
    "messaging": [
      {
        "endpoint": [
          {
            "protocol": {
              "system": "http://terminology.hl7.org/CodeSystem/message-transport",
              "code": "mllp"
            },
            "address": "mllp:10.1.1.10:9234"
          }
        ],
        "reliableCache": 30,
        "documentation": "ADT A08 equivalent for external system notifications",
        "supportedMessage": [
          {
            "mode": "receiver",
            "definition": "MessageDefinition/example"
          }
        ]
      }
    ]
  }