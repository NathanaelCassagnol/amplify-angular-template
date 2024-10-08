import { MedicationStatement } from "fhir/R4/types/medication-statement";

// https://hl7.org/fhir/R4/medicationstatementexample7.json.html
// Patient reports they intend to use Mometasone in the future

export const mockMedicationStatement6: MedicationStatement = {
    "resourceType": "MedicationStatement",
    "id": "example007",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example007</p><p><b>contained</b>: </p><p><b>status</b>: active</p><p><b>medication</b>: id: med0315; Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span>; Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>note</b>: patient plans to start using for seasonal allergies in the Spring when pollen is in the air</p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0315",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "358793",
              "display": "Mometasone Furoate 0.05mg/Actuat"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385157007",
              "display": "Nasal Spray"
            }
          ]
        }
      }
    ],
    "status": "active",
    "medicationReference": {
      "reference": "#med0315"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "informationSource": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "note": [
      {
        "text": "patient plans to start using for seasonal allergies in the Spring when pollen is in the air"
      }
    ]
  }