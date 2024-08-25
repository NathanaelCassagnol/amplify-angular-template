import { Medication } from "../../types/medication.types";

// https://hl7.org/fhir/R4/medicationexample0309.json.html
// As needed dosage range - Manufactured Product - Tylenol No 1 Caplet

export const mockMedicationManufactured9: Medication = {
    "resourceType": "Medication",
    "id": "med0309",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0309</p><p><b>contained</b>: </p><p><b>code</b>: Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span></p><p><b>manufacturer</b>: id: org2; name: Johnson and Johnson Consume Inc, McNeil Consumer Healthcare Division</p><p><b>form</b>: Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Acetaminophen 500 MG <span>(Details : {RxNorm code '315266' = 'Acetaminophen 500 MG', given as 'Acetaminophen 500 MG'})</span></p><p><b>strength</b>: 500 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Diphenhydramine Hydrochloride 25 mg <span>(Details : {RxNorm code '901813' = 'diphenhydrAMINE Hydrochloride 25 MG', given as 'Diphenhydramine Hydrochloride 25 mg'})</span></p><p><b>strength</b>: 25 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></p></blockquote><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org2",
        "name": "Johnson and Johnson Consume Inc, McNeil Consumer Healthcare Division"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "50580-506-02",
          "display": "Tylenol PM"
        }
      ]
    },
    "manufacturer": {
      "reference": "#org2"
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385057009",
          "display": "Film-coated tablet (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "315266",
              "display": "Acetaminophen 500 MG"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 500,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "Tab"
          }
        }
      },
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "901813",
              "display": "Diphenhydramine Hydrochloride 25 mg"
            }
          ]
        },
        "strength": {
          "numerator": {
            "value": 25,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 1,
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "Tab"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  }