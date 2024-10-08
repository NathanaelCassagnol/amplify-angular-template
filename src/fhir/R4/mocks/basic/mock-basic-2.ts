import { Basic } from "fhir/R4/types/basic";

// https://hl7.org/fhir/R4/basic-example2.json.html
// How 'Basic' can be used for essoteric resources - in this case, a UML class model

export const mockBasic2: Basic = {
    "resourceType": "Basic",
    "id": "classModel",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p><b>Class1</b></p>\n      <ul>\n        <li>Attribute1: 1..*</li>\n        <li>Attribute2: 0..1</li>\n      </ul>\n    </div>"
    },
    "extension": [
      {
        "url": "http://example.org/do-not-use/fhir-extensions/UMLclass",
        "extension": [
          {
            "url": "name",
            "valueString": "Class1"
          },
          {
            "url": "attribute",
            "extension": [
              {
                "url": "name",
                "valueString": "attribute1"
              },
              {
                "url": "minOccurs",
                "valueInteger": 1
              },
              {
                "url": "maxOccurs",
                "valueCode": "*"
              }
            ]
          },
          {
            "url": "attribute",
            "extension": [
              {
                "url": "name",
                "valueString": "attribute2"
              },
              {
                "url": "minOccurs",
                "valueInteger": 0
              },
              {
                "url": "maxOccurs",
                "valueInteger": 1
              }
            ]
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://example.org/do-not-use/fhir-codes#resourceTypes",
          "code": "UMLCLASSMODEL"
        }
      ]
    }
  }