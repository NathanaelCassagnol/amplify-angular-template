import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example-f202-malignancy.json.html
// Care plan to address head-neck tumor by chemotherapy

export const mockCarePlan9: CarePlan = {
    "resourceType": "CarePlan",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>contained</b>: , , , , , </p><p><b>status</b>: active</p><p><b>intent</b>: plan</p><p><b>subject</b>: <a>Roel</a></p><p><b>careTeam</b>: id: careteam</p><p><b>addresses</b>: <a>Roel's head-neck tumor</a></p><p><b>goal</b>: id: goal; lifecycleStatus: active; Elimination of the spenoid bone tumor <span>(Details )</span></p><blockquote><p><b>activity</b></p><p><b>outcomeReference</b>: <a>Roel's Chemotherapy</a></p><h3>Details</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Code</b></td><td><b>Status</b></td><td><b>DoNotPerform</b></td><td><b>Product[x]</b></td></tr><tr><td>*</td><td>ServiceRequest</td><td>Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></td><td>in-progress</td><td>false</td><td>id: tpf; TPF <span>(Details )</span></td></tr></table></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "doce",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "108806006",
              "display": "Docetaxel"
            }
          ]
        }
      },
      {
        "resourceType": "Medication",
        "id": "cisp",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "57066004",
              "display": "Cisplatin"
            }
          ]
        }
      },
      {
        "resourceType": "Medication",
        "id": "fluo",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "3127006",
              "display": "Fluorouracil"
            }
          ]
        }
      },
      {
        "resourceType": "Medication",
        "id": "tpf",
        "code": {
          "text": "TPF"
        },
        "ingredient": [
          {
            "itemReference": {
              "reference": "#doce"
            }
          },
          {
            "itemReference": {
              "reference": "#cisp"
            }
          },
          {
            "itemReference": {
              "reference": "#fluo"
            }
          }
        ]
      },
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "28995006",
                    "display": "Treated with"
                  }
                ]
              }
            ],
            "member": {
              "reference": "Practitioner/f201",
              "display": "Dokter Bronsig"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "active",
        "description": {
          "text": "Elimination of the spenoid bone tumor"
        },
        "subject": {
          "reference": "Patient/f201",
          "display": "Roel"
        }
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "Condition/f202",
        "display": "Roel's head-neck tumor"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "outcomeReference": [
          {
            "reference": "Procedure/f201",
            "display": "Roel's Chemotherapy"
          }
        ],
        "detail": {
          "kind": "ServiceRequest",
          "code": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "367336001",
                "display": "Chemotherapy"
              }
            ]
          },
          "status": "in-progress",
          "doNotPerform": false,
          "productReference": {
            "reference": "#tpf"
          }
        }
      }
    ]
  }