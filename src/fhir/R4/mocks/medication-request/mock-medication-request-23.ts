import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0322.json.html
// Request for Intravenous Admixture - Potassium Chloride in D5W - completed with reason code

export const mockMedicationRequest23: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0322",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0322</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: Potassium Chloride 20mEq in 1L Normal Saline. Generated Summary: id: med0317; Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>reasonCode</b>: Disorder of Electrolytes (disorder) <span>(Details : {SNOMED CT code '237840007' = 'Disorder of electrolytes', given as 'Disorder of Electrolytes (disorder)'})</span></p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0317",
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385219001",
              "display": "Injection Solution (qualifier value)"
            }
          ],
          "text": "Injection Solution (qualifier value)"
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                  "code": "204520",
                  "display": "Potassium Chloride"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 2,
                "system": "http://unitsofmeasure.org",
                "code": "mEq"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          },
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                  "code": "313002",
                  "display": "Sodium Chloride 0.9% injectable solution"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 0.9,
                "system": "http://unitsofmeasure.org",
                "code": "g"
              },
              "denominator": {
                "value": 100,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          }
        ]
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
      "reference": "#med0317",
      "display": "Potassium Chloride 20mEq in 1L Normal Saline"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
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
            "code": "237840007",
            "display": "Disorder of Electrolytes (disorder)"
          }
        ]
      }
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "KCl 20 mEq in 1 L 0.9%NS IV at 100 ml/hr",
        "timing": {
          "repeat": {
            "frequency": 1,
            "period": 1,
            "periodUnit": "h"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "47625008",
              "display": "Intravenous route (qualifier value)"
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
              "value": 20,
              "unit": "mEq",
              "system": "http://unitsofmeasure.org",
              "code": "mEq"
            },
            "rateRatio": {
              "numerator": {
                "value": 100,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "h"
              }
            }
          }
        ]
      }
    ]
  }