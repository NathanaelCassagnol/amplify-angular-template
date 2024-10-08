import { RiskAssessment } from "fhir/R4/types/risk-assessment";

// https://hl7.org/fhir/R4/riskassessment-example-breastcancer.json.html
// Breast cancer risk assessment

export const mockRiskAssessment5: RiskAssessment = {
    "resourceType": "RiskAssessment",
    "id": "breastcancer-risk",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tr>\n          <td colspan=\"2\">\n            <h1>Information about your risk score:</h1>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Birthdate:</strong>\n          </td>\n          <td>1981-01-01</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Gender:</strong>\n          </td>\n          <td>female</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Ethnicity:</strong>\n          </td>\n          <td>Unknown / Not Reported</td>\n        </tr>\n      </table>\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://example.org",
        "value": "risk-assessment-breastcancer1"
      }
    ],
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
    "performer": {
      "reference": "Practitioner/example"
    },
    "basis": [
      {
        "reference": "Observation/example-genetics-brcapat"
      }
    ],
    "prediction": [
      {
        "outcome": {
          "text": "Unknown risk of developing breast cancer"
        }
      }
    ],
    "note": [
      {
        "text": "This risk assessment is based on BRCA1 and BRCA2 genetic mutation test"
      }
    ]
  }