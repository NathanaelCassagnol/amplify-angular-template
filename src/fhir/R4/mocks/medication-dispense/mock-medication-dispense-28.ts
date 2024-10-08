import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0328.json.html
// Dispense for Nasonex Inhaler (RxNorm Code) - in progress with additionalInstructions as text

export const mockMedicationDispense28: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0328",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0328</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Nasonex 0.05mg/ACTUAT Nasal Inhaler <span>(Details : {RxNorm code '1797870' = 'NASONEX 50 MCG/ACTUAT Metered Dose Nasal Spray', given as 'Nasonex 0.05mg/ACTUAT Nasal Inhaler'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0321</a></p><p><b>type</b>: Emergency Supply <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'EM' = 'Emergency Supply', given as 'Emergency Supply'})</span></p><p><b>quantity</b>: 30 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "status": "in-progress",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "1797870",
          "display": "Nasonex 0.05mg/ACTUAT Nasal Inhaler"
        }
      ]
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
        "reference": "MedicationRequest/medrx0321"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EM",
          "display": "Emergency Supply"
        }
      ]
    },
    "quantity": {
      "value": 30,
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Use two sprays twice daily",
        "additionalInstruction": [
          {
            "text": "Shake Well"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 2,
            "period": 1,
            "periodUnit": "d"
          }
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
              "value": 1,
              "unit": "ea",
              "system": "http://unitsofmeasure.org",
              "code": "ea"
            }
          }
        ]
      }
    ]
  }