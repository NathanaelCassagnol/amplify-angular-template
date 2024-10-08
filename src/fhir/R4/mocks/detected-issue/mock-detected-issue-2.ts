import { DetectedIssue } from "../../types/detected-issue";

// https://hl7.org/fhir/R4/detectedissue-example-dup.json.html
// Diagnostic order is placed when a recent image of the same body site already exists

export const mockDetectedIssue2: DetectedIssue = {
    "resourceType": "DetectedIssue",
    "id": "duplicate",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Similar test was performed within the past 14 days</p>\n      <ul>\n        <li>\n          <a href=\"ServiceRequest/id\">Chest CT - ordered May 8, 2013 by Dr. Adam Careful</a>\n        </li>\n        <li>\n          <a href=\"ImagingStudy/example\">Image 1 from Series 3: CT Images on Patient MINT (MINT1234) taken at 1-Jan 2011 01:20 AM</a>\n        </li>\n      </ul>\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://example.org",
        "value": "12345"
      }
    ],
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "DUPTHPY",
          "display": "Duplicate Therapy Alert"
        }
      ]
    },
    "patient": {
      "reference": "Patient/dicom"
    },
    "identifiedDateTime": "2013-05-08",
    "author": {
      "reference": "Device/software"
    },
    "implicated": [
      {
        "reference": "ServiceRequest/di",
        "display": "Chest CT - ordered May 8, 2013 by Dr. Adam Careful"
      },
      {
        "reference": "ImagingStudy/example",
        "display": "Image 1 from Series 3: CT Images on Patient MINT (MINT1234) taken at 1-Jan 2011 01:20 AM"
      }
    ],
    "detail": "Similar test was performed within the past 14 days",
    "reference": "http://www.tmhp.com/RadiologyClinicalDecisionSupport/2011/CHEST%20IMAGING%20GUIDELINES%202011.pdf"
  }