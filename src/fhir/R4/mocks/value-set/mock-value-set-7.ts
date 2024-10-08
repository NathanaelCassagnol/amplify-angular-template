import { ValueSet } from "fhir/R4/types/value-set";

// https://hl7.org/fhir/R4/valueset-cpt-all.json.html
// All CPT codes

export const mockValueSet7: ValueSet = {
    "resourceType": "ValueSet",
    "id": "cpt-all",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>All CPT codes</h2>\n      <div>\n        <p>A value set that includes all CPT codes</p>\n\n      </div>\n      <p>\n        <b>Copyright Statement:</b>\n      </p>\n      <div>\n        <p>CPT Copyright © 2014 American Medical Association. All rights reserved.</p>\n\n      </div>\n      <p>This value set includes codes from the following code systems:</p>\n      <ul>\n        <li>Include all codes defined in \n          <code>http://www.ama-assn.org/go/cpt</code>\n        </li>\n      </ul>\n    </div>"
    },
    "url": "http://hl7.org/fhir/ValueSet/cpt-all",
    "version": "4.0.1",
    "name": "All CPT codes",
    "status": "active",
    "date": "2015-03-12",
    "publisher": "Health Level Seven International (Vocabulary)",
    "description": "A value set that includes all CPT codes",
    "useContext": [
      {
        "code": {
          "system": "http://example.org/fhir/CodeSystem/use-contexts",
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
            "code": "US"
          }
        ]
      }
    ],
    "copyright": "CPT Copyright © 2014 American Medical Association. All rights reserved.",
    "compose": {
      "include": [
        {
          "system": "http://www.ama-assn.org/go/cpt"
        }
      ]
    }
  }