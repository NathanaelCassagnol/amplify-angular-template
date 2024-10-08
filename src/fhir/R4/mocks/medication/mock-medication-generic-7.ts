import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0316.json.html
// Generic Formulation - Fully populated example of a Medication - Chlorthalidone

export const mockMedicationGeneric7: Medication = {
    "resourceType": "Medication",
    "id": "med0316",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0316</p><p><b>contained</b>: </p><p><b>code</b>: Chlorthalidone 50mg tablet (product) <span>(Details : {SNOMED CT code '317935006' = 'Chlortalidone 50mg tablet', given as 'Chlorthalidone 50mg tablet (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub04; Chlorthalidone (substance) <span>(Details : {SNOMED CT code '387324004' = 'Chlorthalidone', given as 'Chlorthalidone (substance)'})</span></td><td>50 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "sub04",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387324004",
              "display": "Chlorthalidone (substance)"
            }
          ]
        }
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "317935006",
          "display": "Chlorthalidone 50mg tablet (product)"
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
          "reference": "#sub04"
        },
        "strength": {
          "numerator": {
            "value": 50,
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