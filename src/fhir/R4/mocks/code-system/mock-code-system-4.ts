import { CodeSystem } from "fhir/R4/types/CodeSystem";

// https://hl7.org/fhir/R4/codesystem-example-summary.json.html
// Code system summary

export const mockCodeSystem4: CodeSystem = {
    "resourceType": "CodeSystem",
    "id": "summary",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>Code system summary example for ACME body sites</h2>\n      <div>\n        <p>This is an example code system summary for the ACME codes for body site.</p>\n\n      </div>\n      <p>This code system http://hl7.org/fhir/CodeSystem/summary defines many codes, but they are not represented here</p>\n    </div>"
    },
    "url": "http://hl7.org/fhir/CodeSystem/summary",
    "version": "4.0.1",
    "name": "Code system summary example for ACME body sites",
    "status": "draft",
    "experimental": true,
    "publisher": "HL7 International",
    "contact": [
      {
        "name": "FHIR project team",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "This is an example code system summary for the ACME codes for body site.",
    "useContext": [
      {
        "code": {
          "system": "http://example.org/CodeSystem/contexttype",
          "code": "species"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "337915000",
              "display": "Homo sapiens (organism)"
            }
          ]
        }
      }
    ],
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "urn:iso:std:iso:3166",
            "code": "CA"
          }
        ]
      }
    ],
    "caseSensitive": true,
    "content": "not-present",
    "count": 92
  }