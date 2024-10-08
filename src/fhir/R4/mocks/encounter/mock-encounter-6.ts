import { Encounter } from "../../types/encounter";

// https://hl7.org/fhir/R4/encounter-example-f001-heart.json.html
// Real-world encounter example

export const mockEncounter6: Encounter = {
    "resourceType": "Encounter",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: v1451 (OFFICIAL)</p><p><b>status</b>: finished</p><p><b>class</b>: ambulatory (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code AMB = 'ambulatory', stated as 'ambulatory')</p><p><b>type</b>: Patient-initiated encounter <span>(Details : {SNOMED CT code '270427003' = 'Patient-initiated encounter', given as 'Patient-initiated encounter'})</span></p><p><b>priority</b>: Non-urgent cardiological admission <span>(Details : {SNOMED CT code '310361003' = 'Non-urgent cardiological admission', given as 'Non-urgent cardiological admission'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><h3>Participants</h3><table><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a>P. Voigt</a></td></tr></table><p><b>length</b>: 140 min<span> (Details: UCUM code min = 'min')</span></p><p><b>reasonCode</b>: Heart valve replacement <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement', given as 'Heart valve replacement'})</span></p><h3>Hospitalizations</h3><table><tr><td>-</td><td><b>PreAdmissionIdentifier</b></td><td><b>AdmitSource</b></td><td><b>DischargeDisposition</b></td></tr><tr><td>*</td><td>93042 (OFFICIAL)</td><td>Referral by physician <span>(Details : {SNOMED CT code '305956004' = 'Referral from physician', given as 'Referral by physician'})</span></td><td>Discharge to home <span>(Details : {SNOMED CT code '306689006' = 'Discharge to home', given as 'Discharge to home'})</span></td></tr></table><p><b>serviceProvider</b>: <a>Burgers University Medical Center</a></p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.amc.nl/zorgportal/identifiers/visits",
        "value": "v1451"
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
          "code": "310361003",
          "display": "Non-urgent cardiological admission"
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
          "reference": "Practitioner/f002",
          "display": "P. Voigt"
        }
      }
    ],
    "length": {
      "value": 140,
      "unit": "min",
      "system": "http://unitsofmeasure.org",
      "code": "min"
    },
    "reasonCode": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "34068001",
            "display": "Heart valve replacement"
          }
        ]
      }
    ],
    "hospitalization": {
      "preAdmissionIdentifier": {
        "use": "official",
        "system": "http://www.amc.nl/zorgportal/identifiers/pre-admissions",
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
      "reference": "Organization/f001",
      "display": "Burgers University Medical Center"
    }
  }