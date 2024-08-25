import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0305.json.html
// Dispense for Prednisone (RxNorm code) Tapering Dose - entered-in-error with multiple Dosage lines that include coded additionalInstructions and multiple EventHistory elements

export const mockMedicationDispense6: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0305",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0305</p><p><b>contained</b>: </p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: Prednisone. Generated Summary: id: med0311; Prednisone 5mg Oral Tablet 48 Count Pack <span>(Details : {RxNorm code '763179' = 'predniSONE 5 MG Oral Tablet 48 Count Pack', given as 'Prednisone 5mg Oral Tablet 48 Count Pack'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0303</a></p><p><b>type</b>: First Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FF' = 'First Fill', given as 'First Fill'})</span></p><p><b>quantity</b>: 49 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 21 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 15/01/2015 10:20:00 AM</p><p><b>whenHandedOver</b>: 15/01/2015 4:20:00 PM</p><p><b>dosageInstruction</b>: , , </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0311",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "763179",
              "display": "Prednisone 5mg Oral Tablet 48 Count Pack"
            }
          ]
        }
      }
    ],
    "status": "entered-in-error",
    "medicationReference": {
      "reference": "#med0311",
      "display": "Prednisone"
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
        "reference": "MedicationRequest/medrx0303"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FF",
          "display": "First Fill"
        }
      ]
    },
    "quantity": {
      "value": 49,
      "unit": "TAB",
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 21,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-01-15T10:20:00Z",
    "whenHandedOver": "2015-01-15T16:20:00Z",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Take 4 tablets daily for 7 days starting January 16, 2015",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after Food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-16",
              "end": "2015-01-20"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 4,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ]
      },
      {
        "sequence": 2,
        "text": "Take 2 tablets daily for 7 days starting January 23, 2015",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after Food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-23",
              "end": "2015-01-30"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 2,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ]
      },
      {
        "sequence": 3,
        "text": "Take 1 tablets daily for 7 days starting January 31, 2015",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after Food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "boundsPeriod": {
              "start": "2015-01-31",
              "end": "2015-02-06"
            },
            "frequency": 1,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "26643006",
              "display": "Oral Route"
            }
          ]
        },
        "method": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421521009",
              "display": "Swallow - dosing instruction imperative (qualifier value)"
            }
          ]
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "calculated",
                  "display": "Calculated"
                }
              ]
            },
            "doseQuantity": {
              "value": 1,
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ]
      }
    ]
  }