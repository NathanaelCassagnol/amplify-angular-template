import { ConceptMap } from "fhir/R4/types/concept-map";

// https://hl7.org/fhir/R4/conceptmap-cdshooks-indicator.json.html
// CDS Hooks Indicator mapping to Request Priority

export const mockConceptMap5: ConceptMap = {
    "resourceType": "ConceptMap",
    "id": "cdshooks-indicator",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>IndicatorToRequestPriority (http://cds-hooks.hl7.org/ConceptMap/indicator-to-request-priority)</h2>\n      <p>Mapping from http://cds-hooks.hl7.org/ValueSet/indicator to \n        <a href=\"valueset-request-priority.html\">http://hl7.org/fhir/ValueSet/request-priority</a>\n      </p>\n      <p>DRAFT. Published on ?? by null. </p>\n      <div>\n        <p>This concept map defines a mapping from CDS Hooks indicator to request priority.</p>\n\n      </div>\n      <br/>\n      <table class=\"grid\">\n        <tr>\n          <td>\n            <b>Source Code</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td>\n            <b>Destination Code</b>\n          </td>\n        </tr>\n        <tr>\n          <td>info</td>\n          <td>equal</td>\n          <td>routine</td>\n        </tr>\n        <tr>\n          <td>warning</td>\n          <td>equal</td>\n          <td>urgent</td>\n        </tr>\n        <tr>\n          <td>critical</td>\n          <td>equal</td>\n          <td>stat</td>\n        </tr>\n      </table>\n    </div>"
    },
    "url": "http://cds-hooks.hl7.org/ConceptMap/indicator-to-request-priority",
    "name": "IndicatorToRequestPriority",
    "status": "draft",
    "experimental": false,
    "description": "This concept map defines a mapping from CDS Hooks indicator to request priority.",
    "sourceCanonical": "http://cds-hooks.hl7.org/ValueSet/indicator",
    "targetCanonical": "http://hl7.org/fhir/ValueSet/request-priority",
    "group": [
      {
        "element": [
          {
            "code": "info",
            "target": [
              {
                "code": "routine",
                "equivalence": "equal"
              }
            ]
          },
          {
            "code": "warning",
            "target": [
              {
                "code": "urgent",
                "equivalence": "equal"
              }
            ]
          },
          {
            "code": "critical",
            "target": [
              {
                "code": "stat",
                "equivalence": "equal"
              }
            ]
          }
        ]
      }
    ]
  }