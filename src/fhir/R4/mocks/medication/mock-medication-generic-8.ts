import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0321.json.html
// Generic Formulation - Oral Chemotherapy Example - Capecitabine – includes a reference to a substance in the Ingredient element

export const mockMedicationGeneric8: Medication = {
    "resourceType": "Medication",
    "id": "med0321",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0321</p><p><b>contained</b>: </p><p><b>code</b>: Capecitabine (product) <span>(Details : {SNOMED CT code '108761006' = 'Capecitabine', given as 'Capecitabine (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Capecitabine (substance) <span>(Details : {SNOMED CT code '386906001' = 'Capecitabine', given as 'Capecitabine (substance)'})</span></td><td>500 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span> (Details: SNOMED CT code 385055001 = 'Tablet')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "sub03",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "386906001",
              "display": "Capecitabine (substance)"
            }
          ]
        }
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "108761006",
          "display": "Capecitabine (product)"
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
            "value": 500,
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