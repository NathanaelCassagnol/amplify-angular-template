import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0313.json.html
// Generic Formulation - Lorazepam 2mg/ml injection

export const mockMedicationGeneric4: Medication = {
    "resourceType": "Medication",
    "id": "med0313",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0313</p><p><b>code</b>: Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span></p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>amount</b>: 1 ml<span> (Details: UCUM code ml = 'ml')</span>/1 vial<span> (Details: http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type code vial = 'Vial')</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Lorazepam (substance) <span>(Details : {SNOMED CT code '387106007' = 'Lorazepam', given as 'Lorazepam (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "400621001",
          "display": "Lorazepam 2mg/ml injection solution 1ml vial (product)"
        }
      ]
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection solution (qualifier value)"
        }
      ]
    },
    "amount": {
      "numerator": {
        "value": 1,
        "unit": "ml",
        "system": "http://unitsofmeasure.org",
        "code": "ml"
      },
      "denominator": {
        "value": 1,
        "system": "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
        "code": "vial"
      }
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387106007",
              "display": "Lorazepam (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 2,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ]
  }