import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-f201-fever.json.html
// Real-word condition example (fever)

export const mockCondition3: Condition = {
    "resourceType": "Condition",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: 12345</p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span></p><p><b>code</b>: Fever <span>(Details : {SNOMED CT code '386661006' = 'Fever', given as 'Fever'})</span></p><p><b>bodySite</b>: Entire body as a whole <span>(Details : {SNOMED CT code '38266002' = 'Body as a whole', given as 'Entire body as a whole'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Encounter/f201</a></p><p><b>onset</b>: 02/04/2013</p><p><b>abatement</b>: around April 9, 2013</p><p><b>recordedDate</b>: 04/04/2013</p><p><b>recorder</b>: <a>Practitioner/f201</a></p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>degrees C <span>(Details : {SNOMED CT code '258710007' = 'degrees C', given as 'degrees C'})</span></td><td><a>Temperature</a></td></tr></table></div>"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "resolved"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "55607006",
            "display": "Problem"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "problem-list-item"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "255604002",
          "display": "Mild"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "386661006",
          "display": "Fever"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "38266002",
            "display": "Entire body as a whole"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "encounter": {
      "reference": "Encounter/f201"
    },
    "onsetDateTime": "2013-04-02",
    "abatementString": "around April 9, 2013",
    "recordedDate": "2013-04-04",
    "recorder": {
      "reference": "Practitioner/f201"
    },
    "asserter": {
      "reference": "Practitioner/f201"
    },
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "258710007",
                "display": "degrees C"
              }
            ]
          }
        ],
        "detail": [
          {
            "reference": "Observation/f202",
            "display": "Temperature"
          }
        ]
      }
    ]
  }