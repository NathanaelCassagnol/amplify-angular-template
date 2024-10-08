import { Substance } from "../../types/substance.types";

// https://hl7.org/fhir/R4/substance-example-amoxicillin-clavulanate.json.html
// Amoxicillin-Clavulanate Example

export const mockSubstance6: Substance = {
    "resourceType": "Substance",
    "id": "f205",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>contained</b>: , </p><p><b>category</b>: Drug or Medicament <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'drug' = 'Drug or Medicament', given as 'Drug or Medicament'})</span></p><p><b>code</b>: Amoxicillin + clavulanate potassium 875mg/125mg tablet (product) <span>(Details : {SNOMED CT code '392259005' = 'Co-amoxiclav 875mg/125mg tablet', given as 'Amoxicillin + clavulanate potassium 875mg/125mg tablet (product)'})</span></p><p><b>description</b>: Augmentin 875</p><blockquote><p><b>ingredient</b></p><p><b>quantity</b>: 875 mg<span> (Details: UCUM code mg = 'mg')</span>/1000 mg<span> (Details: UCUM code mg = 'mg')</span></p><p><b>substance</b>: id: ingr1; Amoxicillin (substance) <span>(Details : {SNOMED CT code '372687004' = 'Amoxicillin', given as 'Amoxicillin (substance)'})</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>quantity</b>: 125 mg<span> (Details: UCUM code mg = 'mg')</span>/1000 mg<span> (Details: UCUM code mg = 'mg')</span></p><p><b>substance</b>: id: ingr2; Clavulanate potassium (substance) <span>(Details : {SNOMED CT code '395938000' = 'Clavulanate potassium', given as 'Clavulanate potassium (substance)'})</span></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "Substance",
        "id": "ingr1",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "372687004",
              "display": "Amoxicillin (substance)"
            }
          ]
        }
      },
      {
        "resourceType": "Substance",
        "id": "ingr2",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "395938000",
              "display": "Clavulanate potassium (substance)"
            }
          ]
        }
      }
    ],
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/substance-category",
            "code": "drug",
            "display": "Drug or Medicament"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "392259005",
          "display": "Amoxicillin + clavulanate potassium 875mg/125mg tablet (product)"
        }
      ]
    },
    "description": "Augmentin 875",
    "ingredient": [
      {
        "quantity": {
          "numerator": {
            "value": 875,
            "unit": "mg",
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1000,
            "unit": "mg",
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          }
        },
        "substanceReference": {
          "reference": "#ingr1"
        }
      },
      {
        "quantity": {
          "numerator": {
            "value": 125,
            "unit": "mg",
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1000,
            "unit": "mg",
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          }
        },
        "substanceReference": {
          "reference": "#ingr2"
        }
      }
    ]
  }