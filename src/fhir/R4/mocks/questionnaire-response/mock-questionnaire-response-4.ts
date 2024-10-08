import { QuestionnaireResponse } from "../../types/questionnaire-response";

// https://hl7.org/fhir/R4/questionnaireresponse-example-gcs.json.html
// Glasgow Coma Score example answers

export const mockQuestionnaireResponse4: QuestionnaireResponse = {
    "resourceType": "QuestionnaireResponse",
    "id": "gcs",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gcs</p><p><b>questionnaire</b>: <a>Questionnaire/gcs</a></p><p><b>status</b>: completed</p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>authored</b>: 11/12/2014 4:44:16 AM</p><p><b>source</b>: <a>Practitioner/f007</a></p><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.1</p><h3>Answers</h3><table><tr><td>-</td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Confused (Details: LOINC code LA6560-2 = 'Confused', stated as 'Confused')</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.2</p><h3>Answers</h3><table><tr><td>-</td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Localizing pain (Details: LOINC code LA6566-9 = 'Localizing pain', stated as 'Localizing pain')</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 1.3</p><h3>Answers</h3><table><tr><td>-</td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Eyes open spontaneously (Details: LOINC code LA6556-0 = 'Eyes open spontaneously', stated as 'Eyes open spontaneously')</td></tr></table></blockquote></div>"
    },
    "questionnaire": "Questionnaire/gcs",
    "status": "completed",
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "authored": "2014-12-11T04:44:16Z",
    "source": {
      "reference": "Practitioner/f007"
    },
    "item": [
      {
        "linkId": "1.1",
        "answer": [
          {
            "valueCoding": {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 4
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6560-2",
              "display": "Confused"
            }
          }
        ]
      },
      {
        "linkId": "1.2",
        "answer": [
          {
            "valueCoding": {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 5
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6566-9",
              "display": "Localizing pain"
            }
          }
        ]
      },
      {
        "linkId": "1.3",
        "answer": [
          {
            "valueCoding": {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 4
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6556-0",
              "display": "Eyes open spontaneously"
            }
          }
        ]
      }
    ]
  }