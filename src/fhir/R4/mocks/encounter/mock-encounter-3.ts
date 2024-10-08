import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-f201-20130404.json.html
// Real-world encounter example

export const mockEncounter3: Encounter = {
    "resourceType": "Encounter",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: Encounter_Roel_20130404 (TEMP)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Consultation <span>(Details : {SNOMED CT code '11429006' = 'Consultation', given as 'Consultation'})</span></p><p><b>priority</b>: Normal <span>(Details : {SNOMED CT code '17621005' = 'Normal', given as 'Normal'})</span></p><p><b>subject</b>: <a>Roel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>Practitioner/f201</a></td></tr></table><p><b>reasonCode</b>: The patient had fever peaks over the last couple of days. He is worried about these peaks. <span>(Details )</span></p><p><b>serviceProvider</b>: <a>Organization/f201</a></p></div>"
    },
    "identifier": [
      {
        "use": "temp",
        "value": "Encounter_Roel_20130404"
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
            "code": "11429006",
            "display": "Consultation"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "17621005",
          "display": "Normal"
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
    "reasonCode": [
      {
        "text": "The patient had fever peaks over the last couple of days. He is worried about these peaks."
      }
    ],
    "serviceProvider": {
      "reference": "Organization/f201"
    }
  }