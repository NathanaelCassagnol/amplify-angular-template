import { RelatedPerson } from "../../types/related-person";

// https://hl7.org/fhir/R4/relatedperson-example.json.html
// RelatedPerson Benedicte du Marche

export const mockRelatedPerson1: RelatedPerson = {
    "resourceType": "RelatedPerson",
    "id": "benedicte",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Bénédicte du Marché</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>43, Place du Marché Sainte Catherine, 75004 Paris, France</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Phone: +33 (237) 998327</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "type": {
          "text": "INSEE"
        },
        "system": "urn:oid:1.2.250.1.61",
        "value": "272117510400399"
      }
    ],
    "active": true,
    "patient": {
      "reference": "Patient/example"
    },
    "relationship": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
            "code": "N"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "WIFE"
          }
        ]
      }
    ],
    "name": [
      {
        "family": "du Marché",
        "_family": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
              "valueString": "VV"
            }
          ]
        },
        "given": [
          "Bénédicte"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "+33 (237) 998327"
      }
    ],
    "gender": "female",
    "address": [
      {
        "line": [
          "43, Place du Marché Sainte Catherine"
        ],
        "city": "Paris",
        "postalCode": "75004",
        "country": "FRA"
      }
    ],
    "photo": [
      {
        "contentType": "image/jpeg",
        "url": "Binary/f016"
      }
    ]
  }