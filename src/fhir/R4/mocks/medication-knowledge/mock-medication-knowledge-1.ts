import { MedicationKnowledge } from "fhir/R4/types/medication-knowledge";

// https://hl7.org/fhir/R4/medicationknowledge-example.json.html
// Example of medicationknowledge

export const mockMedicationKnowledge1: MedicationKnowledge = {
    "resourceType": "MedicationKnowledge",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>contained</b>: </p><p><b>code</b>: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>status</b>: active</p><p><b>manufacturer</b>: id: org4; name: Pfizer Laboratories Div Pfizer Inc</p><p><b>doseForm</b>: Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>amount</b>: 50 mg/ml</p><p><b>synonym</b>: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)</p></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org4",
        "name": "Pfizer Laboratories Div Pfizer Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0069-2587-10",
          "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
        }
      ]
    },
    "status": "active",
    "manufacturer": {
      "reference": "#org4"
    },
    "doseForm": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection Solution (qualifier value)"
        }
      ]
    },
    "amount": {
      "value": 50,
      "unit": "mg/ml"
    },
    "synonym": [
      "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
    ]
  }