import { Group } from "../../types/group";

// https://hl7.org/fhir/R4/group-example.json.html
// General Group Example, Characteristic Based

export const mockGroup1: Group = {
    "resourceType": "Group",
    "id": "101",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Herd of 25 horses</p>\n      <p>Gender: mixed</p>\n      <p>Owner: John Smith</p>\n    </div>"
    },
    "identifier": [
      {
        "system": "http://someveterinarianclinic.org/fhir/NamingSystem/herds",
        "value": "12345"
      }
    ],
    "type": "animal",
    "actual": true,
    "code": {
      "text": "Horse"
    },
    "name": "John's herd",
    "quantity": 25,
    "characteristic": [
      {
        "code": {
          "text": "gender"
        },
        "valueCodeableConcept": {
          "text": "mixed"
        },
        "exclude": false
      },
      {
        "code": {
          "text": "owner"
        },
        "valueCodeableConcept": {
          "text": "John Smith"
        },
        "exclude": false
      }
    ]
  }