import { Immunization } from "fhir/R4/types/immunization";

// https://hl7.org/fhir/R4/immunization-example-refused.json.html
// Not Given Immunization Example

export const mockImmunization2: Immunization = {
    "resourceType": "Immunization",
    "id": "notGiven",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: notGiven</p><p><b>status</b>: not-done</p><p><b>statusReason</b>: medical precaution <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'MEDPREC' = 'medical precaution', given as 'medical precaution'})</span></p><p><b>vaccineCode</b>: DTP <span>(Details : {http://hl7.org/fhir/sid/cvx code '01' = 'DTP', given as 'DTP'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>occurrence</b>: 10/01/2013</p><p><b>primarySource</b>: true</p></div>"
    },
    "status": "not-done",
    "statusReason": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "MEDPREC",
          "display": "medical precaution"
        }
      ]
    },
    "vaccineCode": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/cvx",
          "code": "01",
          "display": "DTP"
        }
      ]
    },
    "patient": {
      "reference": "Patient/example"
    },
    "occurrenceDateTime": "2013-01-10",
    "primarySource": true
  }