import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0330.json.html
// Dispense for Warfarin 5mg (NDC Code) where the product is dispensed as multiple strengths based on prescribe dosage

export const mockMedicationDispense30: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0330",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0330</p><p><b>contained</b>: </p><p><b>status</b>: in-progress</p><p><b>medication</b>: Coumadin 5mg tablet. Generated Summary: id: med0351; Coumadin 5mg tablet <span>(Details : {http://hl7.org/fhir/sid/ndc code '0056-1072-70' = 'n/a', given as 'Coumadin 5mg tablet'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0331</a></p><p><b>type</b>: Daily Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'DF' = 'Daily Fill', given as 'Daily Fill'})</span></p><p><b>quantity</b>: 1 415818006<span> (Details: SNOMED CT code 415818006 = 'Vial')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0351",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "0056-1072-70",
              "display": "Coumadin 5mg tablet"
            }
          ]
        }
      }
    ],
    "status": "in-progress",
    "medicationReference": {
      "reference": "#med0351",
      "display": "Coumadin 5mg tablet"
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
        "reference": "MedicationRequest/medrx0331"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "DF",
          "display": "Daily Fill"
        }
      ]
    },
    "quantity": {
      "value": 1,
      "system": "http://snomed.info/sct",
      "code": "415818006"
    },
    "daysSupply": {
      "value": 1,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "7mg (=one 5mg tablet PLUS one 2mg tablet) once daily",
        "additionalInstruction": [
          {
            "text": "Take along with one 5mg Coumadin tablet for a total daily dose of 7mg as prescribed by physician"
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 1,
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
              "value": 5,
              "unit": "mg",
              "system": "http://unitsofmeasure.org",
              "code": "mg"
            }
          }
        ]
      }
    ]
  }