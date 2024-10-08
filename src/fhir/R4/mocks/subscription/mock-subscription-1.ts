import { Subscription } from "fhir/R4/types/subscription";

// https://hl7.org/fhir/R4/subscription-example.json.html
// Example Subscription

export const mockSubscription1: Subscription = {
    "resourceType": "Subscription",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
    },
    "status": "requested",
    "contact": [
      {
        "system": "phone",
        "value": "ext 4123"
      }
    ],
    "end": "2021-01-01T00:00:00Z",
    "reason": "Monitor new neonatal function",
    "criteria": "Observation?code=http://loinc.org|1975-2",
    "channel": {
      "type": "rest-hook",
      "endpoint": "https://biliwatch.com/customers/mount-auburn-miu/on-result",
      "payload": "application/fhir+json",
      "header": [
        "Authorization: Bearer secret-token-abc-123"
      ]
    }
  }