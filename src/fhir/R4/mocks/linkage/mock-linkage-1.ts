import { Linkage } from "fhir/R4/types/linkage";

// https://hl7.org/fhir/R4/linkage-example.json.html
// Example of linkage

export const mockLinkage1: Linkage = {
    "resourceType": "Linkage",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p><b>Source:</b> Condition/example - <i>Severe burn of left ear (Date: 24-May 2012)</i></p>\n      <p><b>Alternate:</b> Condition/condition-example - <i>Severe burn of left ear (Date: 24-May 2012)</i></p>\n    </div>"
    },
    "author": {
      "reference": "Practitioner/f201"
    },
    "item": [
      {
        "type": "source",
        "resource": {
          "reference": "Condition/example",
          "display": "Severe burn of left ear (Date: 24-May 2012)"
        }
      },
      {
        "type": "alternate",
        "resource": {
          "reference": "Condition/condition-example",
          "display": "Severe burn of left ear (Date: 24-May 2012)"
        }
      }
    ]
  }