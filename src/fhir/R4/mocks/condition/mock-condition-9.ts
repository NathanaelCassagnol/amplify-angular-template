import { Condition } from "../../types/condition";

// https://hl7.org/fhir/R4/condition-example-f002-lung.json.html
// Real-word condition example (lung)

export const mockCondition9: Condition = {
    "resourceType": "Condition",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Severe <span>(Details : {SNOMED CT code '24484000' = 'Severe', given as 'Severe'})</span></p><p><b>code</b>: NSCLC - Non-small cell lung cancer <span>(Details : {SNOMED CT code '254637007' = 'Non-small cell lung cancer', given as 'NSCLC - Non-small cell lung cancer'})</span></p><p><b>bodySite</b>: Thorax <span>(Details : {SNOMED CT code '51185008' = 'Thorax', given as 'Thorax'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f002</a></p><p><b>onset</b>: 05/05/2011</p><p><b>recordedDate</b>: 03/06/2012</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Stages</h3><table><tr><td>-</td><td><b>Summary</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>stage II <span>(Details : {SNOMED CT code '258219007' = 'Stage 2', given as 'stage II'})</span></td><td>Clinical staging (qualifier value) <span>(Details : {SNOMED CT code '260998006' = 'cS - Clinical staging', given as 'Clinical staging (qualifier value)'})</span></td></tr></table><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>CT of thorax <span>(Details : {SNOMED CT code '169069000' = 'CT of chest', given as 'CT of thorax'})</span></td></tr></table></div>"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
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
            "code": "439401001",
            "display": "diagnosis"
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
          "code": "254637007",
          "display": "NSCLC - Non-small cell lung cancer"
        }
      ]
    },
    "bodySite": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "51185008",
            "display": "Thorax"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "encounter": {
      "reference": "Encounter/f002"
    },
    "onsetDateTime": "2011-05-05",
    "recordedDate": "2012-06-03",
    "asserter": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "stage": [
      {
        "summary": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "258219007",
              "display": "stage II"
            }
          ]
        },
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "260998006",
              "display": "Clinical staging (qualifier value)"
            }
          ]
        }
      }
    ],
    "evidence": [
      {
        "code": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "169069000",
                "display": "CT of thorax"
              }
            ]
          }
        ]
      }
    ]
  }