import { RiskAssessment } from "fhir/R4/types/risk-assessment";

// https://hl7.org/fhir/R4/riskassessment-example-prognosis.json.html
// Patient prognosis

export const mockRiskAssessment2: RiskAssessment = {
    "resourceType": "RiskAssessment",
    "id": "prognosis",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Moderate risk of permanent weakness of the left arm, but otherwise no permanent disability</p>\n    </div>"
    },
    "status": "final",
    "subject": {
      "reference": "Patient/example"
    },
    "occurrenceDateTime": "2010-11-22",
    "condition": {
      "reference": "Condition/stroke",
      "display": "Ischemic Stroke"
    },
    "prediction": [
      {
        "outcome": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249943000:363698007=72098002,260868000=6934004"
            }
          ],
          "text": "permanent weakness of the left arm"
        },
        "qualitativeRisk": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/risk-probability",
              "code": "moderate",
              "display": "moderate likelihood"
            }
          ]
        }
      }
    ]
  }