import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0315.json.html
// Generic Formulation - Mometasone Furoate 0.05mg/Actuat

export const mockMedicationGeneric6: Medication = {
    "resourceType": "Medication",
    "id": "med0315",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0315</p><p><b>code</b>: Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span></p><p><b>form</b>: Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p></div>"
    },
    "code": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "358793",
          "display": "Mometasone Furoate 0.05mg/Actuat"
        }
      ]
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385157007",
          "display": "Nasal Spray"
        }
      ]
    }
  }