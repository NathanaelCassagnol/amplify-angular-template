import { VisionPrescription } from "fhir/R4/types/vision-prescription";

// https://hl7.org/fhir/R4/visionprescription-example.json.html
// General Glasses Example

export const mockVisionPrescription1: VisionPrescription = {
    "resourceType": "VisionPrescription",
    "id": "33123",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>OD -2.00 SPH         +2.00 add    0.5 p.d. BD</p>\n\t\t\t<p>OS -1.00 -0.50 x 180 +2.00 add    0.5 p.d. BU</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "system": "http://www.happysight.com/prescription",
        "value": "15013"
      }
    ],
    "status": "active",
    "created": "2014-06-15",
    "patient": {
      "reference": "Patient/example"
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
              "code": "lens"
            }
          ]
        },
        "eye": "right",
        "sphere": -2.00,
        "prism": [
          {
            "amount": 0.5,
            "base": "down"
          }
        ],
        "add": 2.00
      },
      {
        "product": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
              "code": "lens"
            }
          ]
        },
        "eye": "left",
        "sphere": -1.00,
        "cylinder": -0.50,
        "axis": 180,
        "prism": [
          {
            "amount": 0.5,
            "base": "up"
          }
        ],
        "add": 2.00
      }
    ]
  }