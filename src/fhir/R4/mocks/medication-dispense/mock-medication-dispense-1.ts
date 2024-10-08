import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispenseexample8.json.html
// Dispense for Oral Chemotherapy - Capecitabine (RxNorm code)

export const mockMedicationDispense1: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp008",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp008</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: medexample015; Capecitabine 500mg oral tablet (Xeloda) <span>(Details : {RxNorm code '213293' = 'Xeloda 500 MG Oral Tablet', given as 'Capecitabine 500mg oral tablet (Xeloda)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0309</a></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "medexample015",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "213293",
              "display": "Capecitabine 500mg oral tablet (Xeloda)"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#medexample015"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0309"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "timing": {
          "repeat": {
            "frequency": 2,
            "period": 21,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "394899003",
              "display": "oral administration of treatment"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 500,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ]
  }