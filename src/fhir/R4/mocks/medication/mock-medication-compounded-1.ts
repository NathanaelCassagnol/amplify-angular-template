import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0317.json.html
// Compounded Preparation - KCl in D5W Admixture - includes a reference to a substance in the ingredient element

export const mockMedicationCompounded1: Medication = {
    "resourceType": "Medication",
    "id": "med0317",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0317</p><p><b>form</b>: Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Potassium Chloride <span>(Details : {RxNorm code '204520' = 'Potassium Chloride 2 MEQ/ML Injectable Solution', given as 'Potassium Chloride'})</span></p><p><b>strength</b>: 2 meq<span> (Details: UCUM code meq = 'meq')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Sodium Chloride 0.9% injectable solution <span>(Details : {RxNorm code '313002' = 'Sodium Chloride 0.154 MEQ/ML Injectable Solution', given as 'Sodium Chloride 0.9% injectable solution'})</span></p><p><b>strength</b>: 0.9 g<span> (Details: UCUM code g = 'g')</span>/100 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection Solution (qualifier value)"
        }
      ],
      "text": "Injection Solution (qualifier value)"
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "204520",
              "display": "Potassium Chloride"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 2,
            "system": "http://unitsofmeasure.org",
            "code": "meq"
          },
          "denominator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      },
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "313002",
              "display": "Sodium Chloride 0.9% injectable solution"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 0.9,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 100,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ]
  }