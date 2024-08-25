import { RelatedPerson } from "../../types/related-person";

// https://hl7.org/fhir/R4/relatedperson-example-newborn-mom.json.html
// Mother of Newborn Example for Newborn Example

export const mockRelatedPerson1: RelatedPerson = {
    "resourceType": "RelatedPerson",
    "id": "newborn-mom",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: newborn-mom</p><p><b>identifier</b>: Social Security number = 444222222</p><p><b>active</b>: true</p><p><b>patient</b>: <a>Patient/newborn</a></p><p><b>relationship</b>: Natural Mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'NMTH' = 'natural mother', given as 'natural mother'})</span></p><p><b>name</b>: Eve Everywoman (OFFICIAL)</p><p><b>telecom</b>: ph: 555-555-2003(WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 31/05/1973</p><p><b>address</b>: 2222 Home Street (HOME)</p></div>"
    },
    "identifier": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "SS"
            }
          ]
        },
        "system": "http://hl7.org/fhir/sid/us-ssn",
        "value": "444222222"
      }
    ],
    "active": true,
    "patient": {
      "reference": "Patient/newborn"
    },
    "relationship": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
            "code": "NMTH",
            "display": "natural mother"
          }
        ],
        "text": "Natural Mother"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Everywoman",
        "given": [
          "Eve"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "555-555-2003",
        "use": "work"
      }
    ],
    "gender": "female",
    "birthDate": "1973-05-31",
    "address": [
      {
        "use": "home",
        "line": [
          "2222 Home Street"
        ]
      }
    ]
  }