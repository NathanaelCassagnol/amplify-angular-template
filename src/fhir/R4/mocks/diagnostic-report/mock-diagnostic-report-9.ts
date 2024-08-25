import { DiagnosticReport } from "../../types/diagnostic-report";

// https://hl7.org/fhir/R4/diagnosticreport-example-ultrasound.json.html
// Abdominal Ultrasound example

export const mockDiagnosticReport9: DiagnosticReport = {
    "resourceType": "DiagnosticReport",
    "id": "ultrasound",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ultrasound</p><p><b>status</b>: final</p><p><b>category</b>: Radiology <span>(Details : {SNOMED CT code '394914008' = 'Radiology - speciality', given as 'Radiology'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'RAD' = 'Radiology)</span></p><p><b>code</b>: Abdominal Ultrasound <span>(Details : {SNOMED CT code '45036003' = 'Ultrasonography of abdomen', given as 'Ultrasonography of abdomen'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 01/12/2012 12:00:00 PM</p><p><b>issued</b>: 01/12/2012 12:00:00 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><h3>Media</h3><table><tr><td>-</td><td><b>Comment</b></td><td><b>Link</b></td></tr><tr><td>*</td><td>A comment about the image</td><td><a>WADO example image</a></td></tr></table><p><b>conclusion</b>: Unremarkable study</p></div>"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394914008",
            "display": "Radiology"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
            "code": "RAD"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "45036003",
          "display": "Ultrasonography of abdomen"
        }
      ],
      "text": "Abdominal Ultrasound"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2012-12-01T12:00:00+01:00",
    "issued": "2012-12-01T12:00:00+01:00",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "media": [
      {
        "comment": "A comment about the image",
        "link": {
          "reference": "Media/1.2.840.11361907579238403408700.3.1.04.19970327150033",
          "display": "WADO example image"
        }
      }
    ],
    "conclusion": "Unremarkable study"
  }