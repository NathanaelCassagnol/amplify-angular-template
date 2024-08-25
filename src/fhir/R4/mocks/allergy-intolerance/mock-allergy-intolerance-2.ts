import { AllergyIntolerance } from "../../types/allergy-intolerance.types";

// A typical Medication allergy from a clinical system
// https://hl7.org/fhir/R4/allergyintolerance-medication.json.html

export const mockAllergyIntolerance2: AllergyIntolerance = {
    "resourceType": "AllergyIntolerance",
    "id": "medication",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medication</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code 'active' = 'Active', given as 'Active'})</span></p><p><b>verificationStatus</b>: Unconfirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code 'unconfirmed' = 'Unconfirmed', given as 'Unconfirmed'})</span></p><p><b>category</b>: medication</p><p><b>criticality</b>: high</p><p><b>code</b>: Penicillin G <span>(Details : {RxNorm code '7980' = 'Penicillin G', given as 'Penicillin G'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>recordedDate</b>: 01/03/2010</p><p><b>recorder</b>: <a>Practitioner/13</a></p><h3>Reactions</h3><table><tr><td>-</td><td><b>Manifestation</b></td></tr><tr><td>*</td><td>Hives <span>(Details : {SNOMED CT code '247472004' = 'Weal', given as 'Hives'})</span></td></tr></table></div>"
    },
    "clinicalStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
          "code": "active",
          "display": "Active"
        }
      ]
    },
    "verificationStatus": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
          "code": "unconfirmed",
          "display": "Unconfirmed"
        }
      ]
    },
    "category": [
      "medication"
    ],
    "criticality": "high",
    "code": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "7980",
          "display": "Penicillin G"
        }
      ]
    },
    "patient": {
      "reference": "Patient/example"
    },
    "recordedDate": "2010-03-01",
    "recorder": {
      "reference": "Practitioner/13"
    },
    "reaction": [
      {
        "manifestation": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "247472004",
                "display": "Hives"
              }
            ]
          }
        ]
      }
    ]
  }