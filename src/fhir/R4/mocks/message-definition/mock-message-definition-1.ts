import { MessageDefinition } from "fhir/R4/types/message-definition";

// https://hl7.org/fhir/R4/messagedefinition-example.json.html
// A typical message definition

export const mockMessageDefinition1: MessageDefinition = {
    "resourceType": "MessageDefinition",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Message definition base example</div>"
    },
    "url": "http://hl7.org/fhir/MessageDefinition/example",
    "name": "EXAMPLE",
    "title": "Message definition base example",
    "status": "draft",
    "experimental": true,
    "date": "2016-11-09",
    "publisher": "Health Level Seven, Int'l",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org"
          }
        ]
      }
    ],
    "purpose": "Defines a base example for other MessageDefinition instances.",
    "eventCoding": {
      "system": "http://example.org/fhir/message-events",
      "code": "admin-notify"
    },
    "category": "notification"
  }