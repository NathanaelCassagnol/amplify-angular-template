import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-f202-malignancy.json.html
// Real-word condition example (malignancy)

export const mockCondition4: Condition = {
    "resourceType": "Condition",
    "id": "f202",
    "meta": {
      "security": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "TBOO",
          "display": "taboo"
        }
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>meta</b>: </p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Encounter Diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'encounter-diagnosis' = 'Encounter Diagnosis)</span></p><p><b>severity</b>: Severe <span>(Details : {SNOMED CT code '24484000' = 'Severe', given as 'Severe'})</span></p><p><b>code</b>: Malignant neoplastic disease <span>(Details : {SNOMED CT code '363346000' = 'Malignant tumour', given as 'Malignant neoplastic disease'})</span></p><p><b>bodySite</b>: Entire head and neck <span>(Details : {SNOMED CT code '361355005' = 'Entire head and neck', given as 'Entire head and neck'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>onset</b>: 52 years<span> (Details: UCUM code a = 'a')</span></p><p><b>abatement</b>: 54 years<span> (Details: UCUM code a = 'a')</span></p><p><b>recordedDate</b>: 01/12/2012</p><h3>Evidences</h3><table><tr><td>-</td><td><b>Detail</b></td></tr><tr><td>*</td><td><a>Erasmus' diagnostic report of Roel's tumor</a></td></tr></table></div>"
    },
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
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "encounter-diagnosis"
          }
        ]
      }
    ],
    "severity": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "24484000",
          "display": "Severe"
        }
      ]
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "363346000",
          "display": "Malignant neoplastic disease"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "361355005",
            "display": "Entire head and neck"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "onsetAge": {
      "value": 52,
      "unit": "years",
      "system": "http://unitsofmeasure.org",
      "code": "a"
    },
    "abatementAge": {
      "value": 54,
      "unit": "years",
      "system": "http://unitsofmeasure.org",
      "code": "a"
    },
    "recordedDate": "2012-12-01",
    "evidence": [
      {
        "detail": [
          {
            "reference": "DiagnosticReport/f201",
            "display": "Erasmus' diagnostic report of Roel's tumor"
          }
        ]
      }
    ]
  }