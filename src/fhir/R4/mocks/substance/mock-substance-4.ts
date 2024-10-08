import { Substance } from "../../types/substance.types";

// https://hl7.org/fhir/R4/substance-example-f203-potassium.json.html
// Potassium Example

export const mockSubstance4: Substance = {
    "resourceType": "Substance",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>identifier</b>: 1234</p><p><b>category</b>: Chemical <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'chemical' = 'Chemical', given as 'Chemical'})</span></p><p><b>code</b>: Potassium <span>(Details : {SNOMED CT code '88480006' = 'Potassium', given as 'Potassium'})</span></p></div>"
    },
    "identifier": [
      {
        "system": "http://acme.org/identifiers/substances",
        "value": "1234"
      }
    ],
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/substance-category",
            "code": "chemical",
            "display": "Chemical"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "88480006",
          "display": "Potassium"
        }
      ]
    }
  }