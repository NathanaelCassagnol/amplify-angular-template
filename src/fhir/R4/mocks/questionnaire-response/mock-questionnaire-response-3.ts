import { QuestionnaireResponse } from "../../types/questionnaire-response";

// https://hl7.org/fhir/R4/questionnaireresponse-example-bluebook.json.html
// Real-world NSW My Personal Health Record example

export const mockQuestionnaireResponse3: QuestionnaireResponse = {
    "resourceType": "QuestionnaireResponse",
    "id": "bb",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <pre>\n        Cathy Jones, female. Birth weight 3.25 kg at 44.3 cm. \n        Injection of Vitamin K given on 1972-11-30 (first dose) and 1972-12-11 (second dose)\n        Note: Was able to speak Chinese at birth.\n      </pre>\n    </div>"
    },
    "status": "completed",
    "subject": {
      "reference": "http://hl7.org/fhir/Patient/1",
      "type": "Patient"
    },
    "authored": "2013-02-19T14:15:00+10:00",
    "author": {
      "reference": "http://hl7.org/fhir/Practitioner/example",
      "type": "Practitioner"
    },
    "item": [
      {
        "linkId": "birthDetails",
        "text": "Birth details - To be completed by health professional",
        "item": [
          {
            "linkId": "group",
            "item": [
              {
                "linkId": "nameOfChild",
                "text": "Name of child",
                "answer": [
                  {
                    "valueString": "Cathy Jones"
                  }
                ]
              },
              {
                "linkId": "sex",
                "text": "Sex",
                "answer": [
                  {
                    "valueCoding": {
                      "code": "f"
                    }
                  }
                ]
              }
            ]
          },
          {
            "linkId": "neonatalInformation",
            "text": "Neonatal Information",
            "item": [
              {
                "linkId": "birthWeight",
                "text": "Birth weight (kg)",
                "answer": [
                  {
                    "valueDecimal": 3.25
                  }
                ]
              },
              {
                "linkId": "birthLength",
                "text": "Birth length (cm)",
                "answer": [
                  {
                    "valueDecimal": 44.3
                  }
                ]
              },
              {
                "linkId": "vitaminKgiven",
                "text": "Vitamin K given",
                "answer": [
                  {
                    "valueCoding": {
                      "code": "INJECTION"
                    },
                    "item": [
                      {
                        "linkId": "vitaminKgivenDoses",
                        "item": [
                          {
                            "linkId": "vitaminKDose1",
                            "text": "1st dose",
                            "answer": [
                              {
                                "valueDate": "1972-11-30"
                              }
                            ]
                          },
                          {
                            "linkId": "vitaminKDose2",
                            "text": "2nd dose",
                            "answer": [
                              {
                                "valueDate": "1972-12-11"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "linkId": "hepBgiven",
                "text": "Hep B given y / n",
                "answer": [
                  {
                    "valueBoolean": true,
                    "item": [
                      {
                        "linkId": "hepBgivenDate",
                        "text": "Date given",
                        "answer": [
                          {
                            "valueDate": "1972-12-04"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "linkId": "abnormalitiesAtBirth",
                "text": "Abnormalities noted at birth",
                "answer": [
                  {
                    "valueString": "Already able to speak Chinese"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }