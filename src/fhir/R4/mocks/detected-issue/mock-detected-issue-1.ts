import { DetectedIssue } from "../../types/detected-issue";

// https://hl7.org/fhir/R4/detectedissue-example.json.html
// Drug-drug interaction between prescription and medication statement

export const mockDetectedIssue1: DetectedIssue = {
    "resourceType": "DetectedIssue",
    "id": "ddi",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p><b>Severity: High</b> - Risk of internal bleeding</p>\n      <p>Those who take acetaminophen along with the widely used blood-thinning drug warfarin may face the risk of serious internal bleeding. People on warfarin who take acetaminophen for at least seven days in a row should be closely watched for bleeding.</p>\n      <ul>\n        <li><a href=\"MedicationStatement/tylenol\">500 mg Acetaminophen tablet 1/day, PRN since 2010</a></li>\n        <li><a href=\"MedicationRequest/warfarin\">Warfarin 1 MG TAB prescribed Jan. 5, 2014</a></li>\n      </ul>\n      <p>Mitigation: Jan 5, 2014 by Dr. Adam Careful: </p>\n      <p>Asked patient to discontinue regular use of Tylenol and to consult with clinician if they need to resume to allow appropriate INR monitoring</p>\n    </div>"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "DRG",
          "display": "Drug Interaction Alert"
        }
      ]
    },
    "severity": "high",
    "identifiedDateTime": "2014-01-05",
    "author": {
      "reference": "Device/software"
    },
    "implicated": [
      {
        "reference": "MedicationStatement/example001",
        "display": "500 mg Acetaminophen tablet 1/day, PRN since 2010"
      },
      {
        "reference": "MedicationRequest/medrx0331",
        "display": "Warfarin 1 MG TAB prescribed Jan. 15, 2015"
      }
    ],
    "detail": "Risk of internal bleeding.  Those who take acetaminophen along with the widely used blood-thinning drug warfarin may face the risk of serious internal bleeding. People on warfarin who take acetaminophen for at least seven days in a row should be closely watched for bleeding.",
    "mitigation": [
      {
        "action": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "13",
              "display": "Stopped Concurrent Therapy"
            }
          ],
          "text": "Asked patient to discontinue regular use of Tylenol and to consult with clinician if they need to resume to allow appropriate INR monitoring"
        },
        "date": "2014-01-05",
        "author": {
          "reference": "Practitioner/example",
          "display": "Dr. Adam Careful"
        }
      }
    ]
  }