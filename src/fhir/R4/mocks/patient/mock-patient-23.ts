import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-infant-fetal.json.html
// Pre-birth fetal infant Example

export const mockPatient23: Patient = {
    "resourceType": "Patient",
    "id": "infant-fetal",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infant-fetal</p><p><b>identifier</b>: Medical record number = MRN657865757378</p><p><b>gender</b>: male</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Relationship</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td>*</td><td>Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'}; {http://terminology.hl7.org/CodeSystem/v2-0131 code 'N' = 'Next-of-Kin; {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother)</span></td><td>Leia Organa (MAIDEN)</td><td>ph: +31201234567(MOBILE)</td></tr></table></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
        "valueString": "Organa"
      }
    ],
    "identifier": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "MR"
            }
          ]
        },
        "system": "http://coruscanthealth.org/main-hospital/patient-identifier",
        "value": "MRN657865757378"
      }
    ],
    "gender": "male",
    "contact": [
      {
        "relationship": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "72705000",
                "display": "Mother"
              },
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                "code": "N"
              },
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                "code": "MTH"
              }
            ]
          }
        ],
        "name": {
          "use": "maiden",
          "family": "Organa",
          "given": [
            "Leia"
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "+31201234567",
            "use": "mobile"
          }
        ]
      }
    ]
  }