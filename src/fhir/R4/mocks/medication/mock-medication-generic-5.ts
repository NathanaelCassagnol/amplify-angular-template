import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0314.json.html
// Generic Formulation - Alprazolam 0.25mg tablet

export const mockMedicationGeneric5: Medication = {
    "resourceType": "Medication",
    "id": "med0314",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0314</p><p><b>code</b>: Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alprazolam (substance) <span>(Details : {SNOMED CT code '386983007' = 'Alprazolam', given as 'Alprazolam (substance)'})</span></td><td>0.25 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span> (Details: SNOMED CT code 385055001 = 'Tablet')</span></td></tr></table></div>"
    },
    "code": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "308047",
          "display": "Alprazolam 0.25mg Oral Tablet"
        }
      ]
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385055001",
          "display": "Tablet dose form (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "386983007",
              "display": "Alprazolam (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 0.25,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "unit": "Tablet",
            "system": "http://snomed.info/sct",
            "code": "385055001"
          }
        }
      }
    ]
  }