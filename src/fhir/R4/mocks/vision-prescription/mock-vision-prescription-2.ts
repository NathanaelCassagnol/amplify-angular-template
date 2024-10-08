import { VisionPrescription } from "fhir/R4/types/vision-prescription";

// https://hl7.org/fhir/R4/visionprescription-example-1.json.html
// General Contacts Example

export const mockVisionPrescription2: VisionPrescription = {
  "resourceType": "VisionPrescription",
  "id": "33124",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Sample Contract Lens prescription</div>"
  },
  "identifier": [
    {
      "system": "http://www.happysight.com/prescription",
      "value": "15014"
    }
  ],
  "status": "active",
  "created": "2014-06-15",
  "patient": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/f001"
  },
  "dateWritten": "2014-06-15",
  "prescriber": {
    "reference": "Practitioner/example"
  },
  "lensSpecification": [
    {
      "product": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
            "code": "contact"
          }
        ]
      },
      "eye": "right",
      "cylinder": -2.25,
      "axis": 160,
      "add": 1.75,
      "power": -2.75,
      "backCurve": 8.7,
      "diameter": 14.0,
      "duration": {
        "value": 1,
        "unit": "month",
        "system": "http://unitsofmeasure.org",
        "code": "month"
      },
      "color": "green",
      "brand": "OphthaGuard",
      "note": [
        {
          "text": "Shade treatment for extreme light sensitivity"
        }
      ]
    },
    {
      "product": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
            "code": "contact"
          }
        ]
      },
      "eye": "left",
      "cylinder": -3.50,
      "axis": 160,
      "add": 1.75,
      "power": -2.75,
      "backCurve": 8.7,
      "diameter": 14.0,
      "duration": {
        "value": 1,
        "unit": "month",
        "system": "http://unitsofmeasure.org",
        "code": "month"
      },
      "color": "green",
      "brand": "OphthaGuard",
      "note": [
        {
          "text": "Shade treatment for extreme light sensitivity"
        }
      ]
    }
  ]
}