import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0302.json.html
// IV Injection with a Rate Example - Manufactured Product - Piperacillin

export const mockMedicationManufactured2: Medication = {
    "resourceType": "Medication",
    "id": "med0302",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0302</p><p><b>contained</b>: </p><p><b>code</b>: Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>manufacturer</b>: id: org7; name: Wyeth Pharmaceuticals Inc</p><p><b>form</b>: Injection solution (qualifier vallue) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier vallue)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Piperacillin Sodium <span>(Details : {RxNorm code '203134' = 'Piperacillin Sodium', given as 'Piperacillin Sodium'})</span></p><p><b>strength</b>: 4 g<span> (Details: UCUM code g = 'g')</span>/20 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Tazobactam Sodium <span>(Details : {RxNorm code '221167' = 'TAZOBACTAM SODIUM', given as 'Tazobactam Sodium'})</span></p><p><b>strength</b>: 0.5 g<span> (Details: UCUM code g = 'g')</span>/20 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org7",
        "name": "Wyeth Pharmaceuticals Inc"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0206-8862-02",
          "display": "Zosyn (piperacillin/tazobactam) 4.5gm injection"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org7"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection solution (qualifier vallue)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "203134",
              "display": "Piperacillin Sodium"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 4,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 20,
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
              "code": "221167",
              "display": "Tazobactam Sodium"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 0.5,
            "system": "http://unitsofmeasure.org",
            "code": "g"
          },
          "denominator": {
            "value": 20,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ]
  }