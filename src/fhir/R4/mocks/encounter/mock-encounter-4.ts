import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-f202-20130128.json.html
// Real-world encounter example (with primaryDiagnosis extension added)

export const mockEncounter4: Encounter = {
    "resourceType": "Encounter",
    "id": "f202",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>identifier</b>: Encounter_Roel_20130128 (TEMP)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></p><p><b>priority</b>: Urgent <span>(Details : {SNOMED CT code '103391001' = 'Urgency', given as 'Urgent'})</span></p><p><b>subject</b>: <a>Roel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>Practitioner/f201</a></td></tr></table><p><b>length</b>: 56 minutes<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: The patient is treated for a tumor. <span>(Details )</span></p><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: Complications from Roel's TPF chemotherapy on January 28th, 2013</p><p><b>use</b>: Admission diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code 'AD' = 'Admission diagnosis', given as 'Admission diagnosis'})</span></p><p><b>rank</b>: 2</p></blockquote><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: The patient is treated for a tumor</p><p><b>use</b>: Chief complaint <span>(Details : {http://terminology.hl7.org/CodeSystem/diagnosis-role code 'CC' = 'Chief complaint', given as 'Chief complaint'})</span></p><p><b>rank</b>: 1</p></blockquote><p><b>serviceProvider</b>: <a>Organization/f201</a></p></div>"
    },
    "identifier": [
      {
        "use": "temp",
        "value": "Encounter_Roel_20130128"
      }
    ],
    "status": "finished",
    "class": {
      "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      "code": "AMB",
      "display": "ambulatory"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "367336001",
            "display": "Chemotherapy"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103391001",
          "display": "Urgent"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f201"
        }
      }
    ],
    "length": {
      "value": 56,
      "unit": "minutes",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "text": "The patient is treated for a tumor."
      }
    ],
    "diagnosis": [
      {
        "condition": {
          "display": "Complications from Roel's TPF chemotherapy on January 28th, 2013"
        },
        "use": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "AD",
              "display": "Admission diagnosis"
            }
          ]
        },
        "rank": 2
      },
      {
        "condition": {
          "display": "The patient is treated for a tumor"
        },
        "use": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "CC",
              "display": "Chief complaint"
            }
          ]
        },
        "rank": 1
      }
    ],
    "serviceProvider": {
      "reference": "Organization/f201"
    }
  }