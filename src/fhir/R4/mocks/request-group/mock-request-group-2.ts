import { RequestGroup } from "fhir/R4/types/request-group";

// https://hl7.org/fhir/R4/requestgroup-kdn5-example.json.html
// Example realization of the KDN5 PlanDefinition example

export const mockRequestGroup2: RequestGroup = {
    "resourceType": "RequestGroup",
    "id": "kdn5-example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Administer gemcitabine and carboplatin.</div>"
    },
    "contained": [
      {
        "resourceType": "MedicationRequest",
        "id": "1111",
        "status": "unknown",
        "intent": "proposal",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "12574",
              "display": "gemcitabine"
            }
          ],
          "text": "gemcitabine"
        },
        "subject": {
          "reference": "Patient/example"
        },
        "dosageInstruction": [
          {
            "text": "1250 mg/m² IV over 30 minutes",
            "timing": {
              "repeat": {
                "duration": 30,
                "durationUnit": "min"
              }
            },
            "route": {
              "text": "IV"
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
                  "value": 1250,
                  "unit": "mg/m²"
                }
              }
            ]
          }
        ]
      },
      {
        "resourceType": "MedicationRequest",
        "id": "2222",
        "status": "unknown",
        "intent": "proposal",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "40048",
              "display": "Carboplatin"
            }
          ],
          "text": "CARBOplatin"
        },
        "subject": {
          "reference": "Patient/example"
        },
        "dosageInstruction": [
          {
            "text": "AUC 5 IV over 30 minutes",
            "timing": {
              "repeat": {
                "duration": 30,
                "durationUnit": "min"
              }
            },
            "route": {
              "text": "IV"
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
                  "extension": [
                    {
                      "url": "http://example.org/fhir/AUC-dose",
                      "valueInteger": 5
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ],
    "identifier": [
      {
        "value": "requestgroup-kdn5"
      }
    ],
    "instantiatesCanonical": [
      "PlanDefinition/KDN5"
    ],
    "status": "draft",
    "intent": "plan",
    "priority": "routine",
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "authoredOn": "2017-03-06T17:31:00Z",
    "author": {
      "reference": "Practitioner/1"
    },
    "action": [
      {
        "selectionBehavior": "exactly-one",
        "action": [
          {
            "selectionBehavior": "all",
            "action": [
              {
                "groupingBehavior": "sentence-group",
                "selectionBehavior": "exactly-one",
                "action": [
                  {
                    "id": "cycle-definition-1",
                    "textEquivalent": "21-day cycle for 6 cycles",
                    "timingTiming": {
                      "repeat": {
                        "count": 6,
                        "duration": 21,
                        "durationUnit": "d"
                      }
                    },
                    "action": [
                      {
                        "id": "action-1",
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/timing-daysOfCycle",
                            "extension": [
                              {
                                "url": "day",
                                "valueInteger": 1
                              },
                              {
                                "url": "day",
                                "valueInteger": 8
                              }
                            ]
                          }
                        ],
                        "textEquivalent": "Gemcitabine 1250 mg/m² IV over 30 minutes on days 1 and 8",
                        "resource": {
                          "reference": "#1111"
                        }
                      },
                      {
                        "id": "action-2",
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/timing-daysOfCycle",
                            "extension": [
                              {
                                "url": "day",
                                "valueInteger": 1
                              }
                            ]
                          }
                        ],
                        "textEquivalent": "CARBOplatin AUC 5 IV over 30 minutes on Day 1",
                        "relatedAction": [
                          {
                            "actionId": "action-1",
                            "relationship": "concurrent-with-start"
                          }
                        ],
                        "resource": {
                          "reference": "#2222"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }