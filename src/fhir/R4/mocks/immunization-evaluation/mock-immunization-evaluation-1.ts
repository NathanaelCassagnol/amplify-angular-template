import { ImmunizationEvaluation } from "fhir/R4/types/immunization-evaluation";

// https://hl7.org/fhir/R4/immunizationevaluation-example.json.html
// Example of a valid dose

export const mockImmunizationEvaluation1: ImmunizationEvaluation = {
    "resourceType": "ImmunizationEvaluation",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>patient</b>: <a>Patient/example</a></p><p><b>date</b>: 10/01/2013</p><p><b>authority</b>: <a>Organization/hl7</a></p><p><b>targetDisease</b>: Gestational rubella syndrome <span>(Details : {SNOMED CT code '1857005' = 'Gestational rubella syndrome)</span></p><p><b>immunizationEvent</b>: <a>Immunization/example</a></p><p><b>doseStatus</b>: Valid <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status code 'valid' = 'Valid', given as 'Valid'})</span></p><p><b>series</b>: Vaccination Series 1</p><p><b>doseNumber</b>: 1</p><p><b>seriesDoses</b>: 3</p></div>"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
      }
    ],
    "status": "completed",
    "patient": {
      "reference": "Patient/example"
    },
    "date": "2013-01-10",
    "authority": {
      "reference": "Organization/hl7"
    },
    "targetDisease": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "1857005"
        }
      ]
    },
    "immunizationEvent": {
      "reference": "Immunization/example"
    },
    "doseStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status",
          "code": "valid",
          "display": "Valid"
        }
      ]
    },
    "series": "Vaccination Series 1",
    "doseNumberPositiveInt": 1,
    "seriesDosesPositiveInt": 3
  }