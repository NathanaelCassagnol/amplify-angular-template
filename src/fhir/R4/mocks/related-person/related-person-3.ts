import { RelatedPerson } from "../../types/related-person";

// https://hl7.org/fhir/R4/relatedperson-example-f001-sarah.json.html
// Sarah Abels

export const mockRelatedPerson3: RelatedPerson = {
    "resourceType": "RelatedPerson",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n     Sarah Abels\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "BSN"
        },
        "system": "urn:oid:2.16.840.1.113883.2.4.6.3"
      }
    ],
    "patient": {
      "reference": "Patient/f001"
    },
    "relationship": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "SIGOTHR"
          }
        ]
      }
    ],
    "name": [
      {
        "use": "usual",
        "family": "Abels",
        "given": [
          "Sarah"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "0690383372",
        "use": "mobile"
      },
      {
        "system": "email",
        "value": "s.abels@kpn.nl",
        "use": "home"
      }
    ],
    "gender": "female"
  }