import { Practitioner } from "../../types/practitioner";

// https://hl7.org/fhir/R4/practitioner-example-xcda-author.html
// CDA Example Author

export const mockPractitioner2: Practitioner = {
    "resourceType": "Practitioner",
    "id": "xcda-author",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Harold Hippocrates, MD</p>\n    </div>"
    },
    "name": [
      {
        "family": "Hippocrates",
        "given": [
          "Harold"
        ],
        "suffix": [
          "MD"
        ]
      }
    ]
  }