import { MedicationStatement } from "fhir/R4/types/medication-statement";

// https://hl7.org/fhir/R4/medicationstatementexample5.json.html
// Patient reports they previous said they took Amoxycillin but really didn't

export const mockMedicationStatement4: MedicationStatement = {
    "resourceType": "MedicationStatement",
    "id": "example005",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example005</p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: Amoxicillin (product) <span>(Details : {SNOMED CT code '27658006' = 'p-Hydroxyampicillin', given as 'Amoxicillin (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>Encounter/f203</a></p><p><b>effective</b>: 23/01/2014</p><p><b>dateAsserted</b>: 22/02/2015</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>note</b>: Patient indicated that they thought it was Amoxicillin they were taking but it was really Erythromycin</p></div>"
    },
    "basedOn": [
      {
        "reference": "CarePlan/gpvisit"
      }
    ],
    "status": "entered-in-error",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "27658006",
          "display": "Amoxicillin (product)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "context": {
      "reference": "Encounter/f203"
    },
    "effectiveDateTime": "2014-01-23",
    "dateAsserted": "2015-02-22",
    "informationSource": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "note": [
      {
        "text": "Patient indicated that they thought it was Amoxicillin they were taking but it was really Erythromycin"
      }
    ]
  }