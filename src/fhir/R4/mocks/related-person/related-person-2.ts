import { RelatedPerson } from "../../types/related-person";

// https://hl7.org/fhir/R4/relatedperson-example-peter.json.html
// RelatedPerson Peter Chalmers

export const mockRelatedPerson2: RelatedPerson = {
    "resourceType": "RelatedPerson",
    "id": "peter",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Peter Chalmers</td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n          </tr>\n          <tr>\n            <td>Contacts</td>\n            <td>Work: (03) 5555 6473</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
    },
    "patient": {
      "reference": "Patient/animal"
    },
    "relationship": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
            "code": "C"
          }
        ]
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Chalmers",
        "given": [
          "Peter",
          "James"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "(03) 5555 6473",
        "use": "work"
      }
    ],
    "gender": "male",
    "address": [
      {
        "use": "home",
        "line": [
          "534 Erewhon St"
        ],
        "city": "PleasantVille",
        "state": "Vic",
        "postalCode": "3999"
      }
    ],
    "photo": [
      {
        "contentType": "image/jpeg",
        "url": "Binary/f012"
      }
    ],
    "period": {
      "start": "2012-03-11"
    }
  }