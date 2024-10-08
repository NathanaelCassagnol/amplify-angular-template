import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0310.json.html
// Generic Formulation - Oxycodone

export const mockMedicationGeneric1: Medication = {
    "resourceType": "Medication",
    "id": "med0310",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0310</p><p><b>contained</b>: </p><p><b>code</b>: Oral Form Oxycodone (product) <span>(Details : {SNOMED CT code '430127000' = 'Oral form oxycodone', given as 'Oral Form Oxycodone (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Oxycodone (substance) <span>(Details : {SNOMED CT code '55452001' = 'Oxycodone', given as 'Oxycodone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "sub03",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "55452001",
              "display": "Oxycodone (substance)"
            }
          ]
        }
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "430127000",
          "display": "Oral Form Oxycodone (product)"
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