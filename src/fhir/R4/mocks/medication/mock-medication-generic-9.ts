import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0320.json.html
// Generic Formulation - Azithromycin 250mg oral capsule - includes a reference to a substance in the Ingredient element

export const mockMedicationGeneric9: Medication = {
    "resourceType": "Medication",
    "id": "med0320",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0320</p><p><b>contained</b>: </p><p><b>code</b>: Azithromycin 250mg capsule (product) <span>(Details : {SNOMED CT code '324252006' = 'Azithromycin 250mg capsule', given as 'Azithromycin 250mg capsule (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Azithromycin (substance) <span>(Details : {SNOMED CT code '387531004' = 'Azithromycin', given as 'Azithromycin (substance)'})</span></td><td>250 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "sub03",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387531004",
              "display": "Azithromycin (substance)"
            }
          ]
        }
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "324252006",
          "display": "Azithromycin 250mg capsule (product)"
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
            "value": 250,
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