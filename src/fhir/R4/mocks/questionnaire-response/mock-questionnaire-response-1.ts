import { QuestionnaireResponse } from "../../types/questionnaire-response";

// https://hl7.org/fhir/R4/questionnaireresponse-example.json.html
// General questionnaire response example

export const mockQuestionnaireResponse1: QuestionnaireResponse = {
    "resourceType": "QuestionnaireResponse",
    "id": "3141",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <pre>\n            Comorbidity? YES\n              Cardial Comorbidity? YES\n                Angina? YES\n                MI? NO\n              Vascular Comorbidity?\n                (no answers)\n              ...\n            Histopathology\n              Abdominal\n                pT category: 1a\n              ...\n          </pre>\n    </div>"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "patsub",
        "identifier": [
          {
            "system": "http://cancer.questionnaire.org/systems/id/patientnr",
            "value": "A34442332"
          },
          {
            "type": {
              "text": "Dutch BSN"
            },
            "system": "urn:oid:2.16.840.1.113883.2.4.6.3",
            "value": "188912345"
          }
        ],
        "gender": "male",
        "birthDate": "1972-11-30"
      },
      {
        "resourceType": "ServiceRequest",
        "id": "order",
        "status": "unknown",
        "intent": "order",
        "subject": {
          "reference": "#patsub"
        },
        "requester": {
          "reference": "Practitioner/example"
        }
      },
      {
        "resourceType": "Practitioner",
        "id": "questauth",
        "identifier": [
          {
            "type": {
              "text": "AUMC, Den Helder"
            },
            "system": "http://cancer.questionnaire.org/systems/id/org",
            "value": "AUMC"
          }
        ]
      }
    ],
    "identifier": {
      "system": "http://example.org/fhir/NamingSystem/questionnaire-ids",
      "value": "Q12349876"
    },
    "basedOn": [
      {
        "reference": "#order"
      }
    ],
    "partOf": [
      {
        "reference": "Procedure/f201"
      }
    ],
    "status": "completed",
    "subject": {
      "reference": "#patsub"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "authored": "2013-02-19T14:15:00-05:00",
    "author": {
      "reference": "#questauth"
    },
    "item": [
      {
        "linkId": "1",
        "item": [
          {
            "linkId": "1.1",
            "answer": [
              {
                "valueCoding": {
                  "system": "http://cancer.questionnaire.org/system/code/yesno",
                  "code": "1",
                  "display": "Yes"
                },
                "item": [
                  {
                    "linkId": "1.1.1",
                    "item": [
                      {
                        "linkId": "1.1.1.1",
                        "answer": [
                          {
                            "valueCoding": {
                              "system": "http://cancer.questionnaire.org/system/code/yesno",
                              "code": "1"
                            }
                          }
                        ]
                      },
                      {
                        "linkId": "1.1.1.2",
                        "answer": [
                          {
                            "valueCoding": {
                              "system": "http://cancer.questionnaire.org/system/code/yesno",
                              "code": "1"
                            }
                          }
                        ]
                      },
                      {
                        "linkId": "1.1.1.3",
                        "answer": [
                          {
                            "valueCoding": {
                              "system": "http://cancer.questionnaire.org/system/code/yesno",
                              "code": "0"
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
    ]
  }