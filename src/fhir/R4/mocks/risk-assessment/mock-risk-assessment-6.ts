import { RiskAssessment } from "fhir/R4/types/risk-assessment";

// https://hl7.org/fhir/R4/riskassessment-riskexample.json.html
// Example risk assessment

export const mockRiskAssessment6: RiskAssessment = {
    "resourceType": "RiskAssessment",
    "id": "riskexample",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Risk assessment for reference only</div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://example.org",
        "value": "risk-assessment-breastcancer1"
      }
    ],
    "basedOn": {
      "reference": "ImmunizationRecommendation/example"
    },
    "parent": {
      "reference": "DiagnosticReport/example"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://browser.ihtsdotools.org/",
          "code": "709510001",
          "display": "Assessment of risk for disease (procedure)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "encounter": {
      "reference": "Encounter/example",
      "display": "Encounter with patient @example"
    },
    "occurrenceDateTime": "2017-10-10",
    "condition": {
      "reference": "Condition/example"
    },
    "performer": {
      "reference": "Practitioner/example"
    },
    "basis": [
      {
        "reference": "DiagnosticReport/example"
      },
      {
        "reference": "Observation/example"
      }
    ],
    "prediction": [
      {
        "outcome": {
          "text": "Breast Cancer"
        },
        "probabilityDecimal": 0.000368,
        "whenRange": {
          "low": {
            "value": 54,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          },
          "high": {
            "value": 57,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          }
        }
      }
    ],
    "note": [
      {
        "text": "This risk assessment is for reference only"
      }
    ]
  }