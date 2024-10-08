import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0311.json.html
// Generic Formulation - Prednisone 5mg tablet

export const mockMedicationGeneric2: Medication = {
    "resourceType": "Medication",
    "id": "med0311",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0311</p><p><b>contained</b>: </p><p><b>code</b>: Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Prednisone (substance) <span>(Details : {SNOMED CT code '116602009' = 'Prednisone', given as 'Prednisone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "sub03",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "116602009",
              "display": "Prednisone (substance)"
            }
          ]
        }
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "373994007",
          "display": "Prednisone 5mg tablet (Product)"
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
        "itemReference": {
          "reference": "#sub03"
        },
        "strength": {
          "numerator": {
            "value": 5,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "TAB"
          }
        }
      }
    ]
  }