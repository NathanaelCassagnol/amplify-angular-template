import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0319.json.html
// Compounded Preparation - HC 1%, Salicylic Acid 5% in Glaxal Base - includes a reference to a substance in the ingredient element

export const mockMedicationCompounded3: Medication = {
    "resourceType": "Medication",
    "id": "med0319",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0319</p><p><b>form</b>: Ointment <span>(Details : {SNOMED CT code '385101003' = 'Ointment', given as 'Ointment'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Salicyclic Acid (substance) <span>(Details : {SNOMED CT code '387253001' = 'Salicylic acid', given as 'Salicyclic Acid (substance)'})</span></p><p><b>strength</b>: 5 g<span> (Details: UCUM code g = 'g')</span>/100 g<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Hydrocortisone (substance) <span>(Details : {SNOMED CT code '396458002' = 'Hydrocortisone', given as 'Hydrocortisone (substance)'})</span></p><p><b>strength</b>: 1 g<span> (Details: UCUM code g = 'g')</span>/100 g<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: White Petrolatum (substance) <span>(Details : {SNOMED CT code '126066007' = 'White petroleum', given as 'White Petrolatum (substance)'})</span></p><p><b>strength</b>: 94 g<span> (Details: UCUM code g = 'g')</span>/100 g<span> (Details: UCUM code g = 'g')</span></p></blockquote></div>"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385101003",
          "display": "Ointment"
        }
      ],
      "text": "Ointment"
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "387253001",
              "display": "Salicyclic Acid (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 5,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 100,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          }
        }
      },
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "396458002",
              "display": "Hydrocortisone (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 1,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 100,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          }
        }
      },
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "126066007",
              "display": "White Petrolatum (substance)"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 94,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 100,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          }
        }
      }
    ]
  }