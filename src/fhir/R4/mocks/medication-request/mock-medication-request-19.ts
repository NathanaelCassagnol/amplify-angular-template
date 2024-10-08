import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0318.json.html
// Request for Intravenous Antibiotic - Vancomycin - active - with link to encounter, reasonCode, and note

export const mockMedicationRequest19: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0318",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0318</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0301; Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Traveller's Diarrhea (disorder) <span>(Details : {SNOMED CT code '11840006' = 'Traveler's diarrhea', given as 'Traveller's Diarrhea (disorder)'})</span></p><p><b>note</b>: culture expected back in 12 hours - may switch depending on results</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0301",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0069-2587-10",
              "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0301"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "11840006",
            "display": "Traveller's Diarrhea (disorder)"
          }
        ]
      }
    ],
    "note": [
      {
        "text": "culture expected back in 12 hours - may switch depending on results"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "500mg IV q6h x 3 days",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 6,
            "periodUnit": "h"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255560000",
              "display": "Intravenous"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "420620005",
              "display": "Push - dosing instruction imperative (qualifier value)"
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