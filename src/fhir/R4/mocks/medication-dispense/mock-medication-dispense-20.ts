import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0319.json.html
// Dispense for Azithromycin (NDC code) - completed with multiple dosage lines

export const mockMedicationDispense20: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0319",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0319</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: Azithromycin 250mg capsule (product). Generated Summary: id: med0320; Azithromycin 250mg tablet, film coated (Aidarex Pharmaceuticals LLC) <span>(Details : {http://hl7.org/fhir/sid/ndc code '33261-403-02' = 'n/a', given as 'Azithromycin 250mg tablet, film coated (Aidarex Pharmaceuticals LLC)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0302</a></p><p><b>type</b>: First Fill - Complete <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'FFC' = 'First Fill - Complete', given as 'First Fill - Complete'})</span></p><p><b>quantity</b>: 6 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p><p><b>daysSupply</b>: 5 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 16/03/2015 5:13:00 PM</p><p><b>whenHandedOver</b>: 17/03/2015 5:13:00 PM</p><p><b>note</b>: Patient told to take with food</p><p><b>dosageInstruction</b>: , </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0320",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "33261-403-02",
              "display": "Azithromycin 250mg tablet, film coated (Aidarex Pharmaceuticals LLC)"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0320",
      "display": "Azithromycin 250mg capsule (product)"
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
        "reference": "MedicationRequest/medrx0302"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "FFC",
          "display": "First Fill - Complete"
        }
      ]
    },
    "quantity": {
      "value": 6,
      "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      "code": "TAB"
    },
    "daysSupply": {
      "value": 5,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-03-16T17:13:00+05:00",
    "whenHandedOver": "2015-03-17T17:13:00+05:00",
    "note": [
      {
        "text": "Patient told to take with food"
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Two tablets at once",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
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
                  "code": "ordered",
                  "display": "Ordered"
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
        "sequence": 2,
        "text": "One tablet daily for 4 days",
        "additionalInstruction": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "311504000",
                "display": "With or after food"
              }
            ]
          }
        ],
        "timing": {
          "repeat": {
            "frequency": 4,
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
              "unit": "TAB",
              "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              "code": "TAB"
            }
          }
        ]
      }
    ]
  }