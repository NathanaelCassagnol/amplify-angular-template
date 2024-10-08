import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-f003-abscess.json.html
// Real-world encounter example

export const mockEncounter8: Encounter = {
    "resourceType": "Encounter",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: v6751 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Non-urgent ear, nose and throat admission <span>(Details : {SNOMED CT code '103391001' = 'Urgency', given as 'Non-urgent ear, nose and throat admission'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>E.M. van den Broek</a></td></tr></table><p><b>length</b>: 90 min<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: Retropharyngeal abscess <span>(Details : {SNOMED CT code '18099001' = 'Retropharyngeal abscess', given as 'Retropharyngeal abscess'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>93042 (OFFICIAL)</td><td>Referral by physician <span>(Details : {SNOMED CT code '305956004' = 'Referral from physician', given as 'Referral by physician'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>Organization/f001</a></p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/encounters",
        "value": "v6751"
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
            "code": "270427003",
            "display": "Patient-initiated encounter"
          }
        ]
      }
    ],
    "priority": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "103391001",
          "display": "Non-urgent ear, nose and throat admission"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "participant": [
      {
        "individual": {
          "reference": "Practitioner/f001",
          "display": "E.M. van den Broek"
        }
      }
    ],
    "length": {
      "value": 90,
      "unit": "min",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "18099001",
            "display": "Retropharyngeal abscess"
          }
        ]
      }
    ],
    "hospitalization": {
      "preAdmissionIdentifier": {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
        "value": "93042"
      },
      "admitSource": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "305956004",
            "display": "Referral by physician"
          }
        ]
      },
      "dischargeDisposition": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "306689006",
            "display": "Discharge to home"
          }
        ]
      }
    },
    "serviceProvider": {
      "reference": "Organization/f001"
    }
  }