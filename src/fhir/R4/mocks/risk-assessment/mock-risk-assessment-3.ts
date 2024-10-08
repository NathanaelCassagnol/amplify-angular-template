import { RiskAssessment } from "fhir/R4/types/risk-assessment";

// https://hl7.org/fhir/R4/riskassessment-example-cardiac.json.html
// Cardiac risk assessment

export const mockRiskAssessment3: RiskAssessment = {
    "resourceType": "RiskAssessment",
    "id": "cardiac",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tr>\n          <td colspan=\"2\">\n            <h1>Information about your risk score:</h1>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Age:</strong>\n          </td>\n          <td>39</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Gender:</strong>\n          </td>\n          <td>male</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Total Cholesterol:</strong>\n          </td>\n          <td>244 mg/dL</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>HDL Cholesterol:</strong>\n          </td>\n          <td>50 mg/dL\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Smoker:</strong>\n          </td>\n          <td>No</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>Systolic Blood Pressure:</strong>\n          </td>\n          <td>107 mm/Hg</td>\n        </tr>\n        <tr>\n          <td>\n            <strong>On medication for HBP:</strong>\n          </td>\n          <td>No</td>\n        </tr>\n        <tr>\n          <td valign=\"top\">\n            <b>Risk Score*</b>\n          </td>\n          <td>2%<br/>Means 2 of 100 people with this level of risk will have a heart attack in the next 10 years.</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">* Your risk score was calculated using an equation.  Other NCEP products, such as printed ATP III materials, use a point system to determine a risk score that is close to the equation score.</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">To find out what your risk score means and how to lower your risk for a heart attack, go to<br/>\n            <a href=\"http://www.nhlbi.nih.gov/health/public/heart/chol/hbc_what.htm\">&quot;High Blood Cholesterol—What You Need to Know&quot;</a>.<br/>\n            <a href=\"http://www.nhlbi.nih.gov/health/public/heart/chol/chol_tlc.htm\">Your Guide to Lowering Cholesterol with Therapeutic Lifestyle Changes (TLC)</a><br/>\n            <a href=\"http://www.nhlbi.nih.gov/health/public/heart/other/hhw/index.htm\">The Healthy Heart Handbook for Women</a>\n          </td>\n        </tr>\n      </table>\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://example.org",
        "value": "risk-assessment-cardiac"
      }
    ],
    "status": "final",
    "subject": {
      "reference": "Patient/pat2"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "occurrenceDateTime": "2014-07-19T16:04:00Z",
    "performer": {
      "display": "http://cvdrisk.nhlbi.nih.gov/#cholesterol"
    },
    "basis": [
      {
        "reference": "Patient/pat2"
      },
      {
        "reference": "DiagnosticReport/lipids"
      },
      {
        "reference": "Observation/blood-pressure"
      }
    ],
    "prediction": [
      {
        "outcome": {
          "text": "Heart Attack"
        },
        "probabilityDecimal": 0.02,
        "whenRange": {
          "low": {
            "value": 39,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          },
          "high": {
            "value": 49,
            "unit": "years",
            "system": "http://unitsofmeasure.org",
            "code": "a"
          }
        }
      }
    ]
  }