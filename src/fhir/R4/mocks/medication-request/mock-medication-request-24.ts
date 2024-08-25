import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0323.json.html
// Request for TPN Solution - completed

export const mockMedicationRequest24: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0323",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0323</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0318; Injection emulsion <span>(Details : {SNOMED CT code '385221006' = 'Injection emulsion', given as 'Injection emulsion'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0318",
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385221006",
              "display": "Injection emulsion"
            }
          ]
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://hl7.org/fhir/sid/ndc",
                  "code": "0338-1134-03",
                  "display": "Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml"
                }
              ]
            }
          },
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://hl7.org/fhir/sid/ndc",
                  "code": "0409-5779-01",
                  "display": "TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL"
                }
              ]
            }
          },
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://hl7.org/fhir/sid/ndc",
                  "code": "0338-0519-02",
                  "display": "Intralipid 20% IV Fat Emulsion"
                }
              ]
            }
          }
        ],
        "batch": {
          "lotNumber": "123455",
          "expirationDate": "2016-07-09"
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
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0318"
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
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "1000mL infused at 50ml/hour for 4 hours - hung at 2200 hours",
        "timing": {
          "event": [
            "2015-01-15T22:00:00+11:00"
          ],
          "repeat": {
            "frequency": 1,
            "period": 24,
            "periodUnit": "h"
          }
        },
        "site": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "6073002",
              "display": "Structure of ligament of left superior vena cava"
            }
          ]
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
          "text": "PICC line"
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
              "value": 1000,
              "unit": "mL",
              "system": "http://unitsofmeasure.org",
              "code": "mL"
            },
            "rateRatio": {
              "numerator": {
                "value": 50,
                "unit": "mL",
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              },
              "denominator": {
                "value": 1,
                "unit": "h",
                "system": "http://unitsofmeasure.org",
                "code": "h"
              }
            }
          }
        ]
      }
    ]
  }