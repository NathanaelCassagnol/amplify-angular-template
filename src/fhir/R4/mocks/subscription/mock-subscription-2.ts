import { Subscription } from "fhir/R4/types/subscription";

// https://hl7.org/fhir/R4/subscription-example-error.json.html
// Example of subscription in error status

export const mockSubscription2: Subscription = {
    "resourceType": "Subscription",
    "id": "example-error",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">[Put rendering here]</div>"
    },
    "status": "error",
    "contact": [
      {
        "system": "phone",
        "value": "ext 4123"
      }
    ],
    "end": "2021-01-01T00:00:00Z",
    "reason": "Monitor new neonatal function",
    "criteria": "Observation?code=http://loinc.org|1975-2",
    "error": "Socket Error 10060 - can't connect to host",
    "channel": {
      "type": "rest-hook",
      "endpoint": "https://biliwatch.com/customers/mount-auburn-miu/on-result",
      "payload": "application/fhir+json",
      "header": [
        "Authorization: Bearer secret-token-abc-123"
      ]
    }
  }