import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0312.json.html
// Generic Formulation - Nystatin 100,000 u/ml suspension

export const mockMedicationGeneric3: Medication = {
    "resourceType": "Medication",
    "id": "med0312",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0312</p><p><b>contained</b>: </p><p><b>code</b>: Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>form</b>: Oral suspension (qualifier value) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Oral suspension (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub02; Nystatin (substance) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Nystatin (substance)'})</span></td><td>100000 [IU]<span> (Details: UCUM code [IU] = 'IU')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "sub02",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387048002",
              "display": "Nystatin (substance)"
            }
          ]
        }
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "324689003",
          "display": "Nystatin 100,000 units/ml oral suspension (product)"
        }
      ]
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "387048002",
          "display": "Oral suspension (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemReference": {
          "reference": "#sub02"
        },
        "strength": {
          "numerator": {
            "value": 100000,
            "system": "http://unitsofmeasure.org",
            "code": "[IU]"
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