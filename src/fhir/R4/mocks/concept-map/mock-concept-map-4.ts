import { ConceptMap } from "fhir/R4/types/concept-map";

// https://hl7.org/fhir/R4/conceptmap-example-2.json.html
// Additional ConceptMap Example

export const mockConceptMap4: ConceptMap = {
    "resourceType": "ConceptMap",
    "id": "example2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>FHIR-exanple-2 (http://hl7.org/fhir/ConceptMap/example2)</h2>\n      <p>Mapping from http://example.org/fhir/example1 to http://example.org/fhir/example2</p>\n      <p>DRAFT (not intended for production usage). Published on 13/06/2012 by HL7, Inc (FHIR project team (example): \n        <a href=\"http://hl7.org/fhir\">http://hl7.org/fhir</a>). \n      </p>\n      <div>\n        <p>An example mapping</p>\n\n      </div>\n      <br/>\n      <table class=\"grid\">\n        <tr>\n          <td colspan=\"2\">\n            <b>Source Concept Details</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td colspan=\"1\">\n            <b>Destination Concept Details</b>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b>Code</b> from http://example.org/fhir/example1\n          </td>\n          <td>\n            <b>Code</b> from http://example.org/fhir/example3\n          </td>\n          <td/>\n          <td>\n            <b>Code</b> from http://example.org/fhir/example2\n          </td>\n        </tr>\n        <tr>\n          <td>code</td>\n          <td>some-code</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>code2</td>\n        </tr>\n      </table>\n    </div>"
    },
    "url": "http://hl7.org/fhir/ConceptMap/example2",
    "version": "4.0.1",
    "name": "FHIR-exanple-2",
    "title": "FHIR Example 2",
    "status": "draft",
    "experimental": true,
    "date": "2012-06-13",
    "publisher": "HL7, Inc",
    "contact": [
      {
        "name": "FHIR project team (example)",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "An example mapping",
    "purpose": "To illustrate mapping features",
    "sourceUri": "http://example.org/fhir/example1",
    "targetUri": "http://example.org/fhir/example2",
    "group": [
      {
        "source": "http://example.org/fhir/example1",
        "target": "http://example.org/fhir/example2",
        "element": [
          {
            "code": "code",
            "display": "Example Code",
            "target": [
              {
                "code": "code2",
                "display": "Some Example Code",
                "equivalence": "equivalent",
                "dependsOn": [
                  {
                    "property": "http://example.org/fhir/property-value/example",
                    "system": "http://example.org/fhir/example3",
                    "value": "some-code",
                    "display": "Something Coded"
                  }
                ]
              }
            ]
          }
        ],
        "unmapped": {
          "mode": "other-map",
          "url": "http://example.org/fhir/ConceptMap/map2"
        }
      }
    ]
  }