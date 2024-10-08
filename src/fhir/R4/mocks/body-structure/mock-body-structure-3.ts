import { BodyStructure } from "../../types/body-structure";

// https://hl7.org/fhir/R4/bodystructure-example-skin-patch.json.html
// This example demonstrates using the bodystructure resource to identify skin patches or other portions of a person or animal that are a focus of a clinical trial and that are subject to repeated observations and/or procedures over time

export const mockBodyStructure3: BodyStructure = {
    "resourceType": "BodyStructure",
    "id": "skin-patch",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: skin-patch</p><p><b>identifier</b>: 12345</p><p><b>active</b>: false</p><p><b>morphology</b>: Skin patch <span>(Details )</span></p><p><b>location</b>: Forearm <span>(Details : {SNOMED CT code '14975008' = 'Forearm', given as 'Forearm'})</span></p><p><b>locationQualifier</b>: Left <span>(Details : {SNOMED CT code '419161000' = 'Unilateral left', given as 'Unilateral left'})</span>, Volar <span>(Details : {SNOMED CT code '263929005' = 'Volar', given as 'Volar'})</span></p><p><b>description</b>: inner surface (volar) of the left forearm</p><p><b>patient</b>: <a>Patient/example</a></p></div>"
    },
    "identifier": [
      {
        "system": "http://goodhealth.org/bodystructure/identifiers",
        "value": "12345"
      }
    ],
    "active": false,
    "morphology": {
      "text": "Skin patch"
    },
    "location": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "14975008",
          "display": "Forearm"
        }
      ],
      "text": "Forearm"
    },
    "locationQualifier": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "419161000",
            "display": "Unilateral left"
          }
        ],
        "text": "Left"
      },
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "263929005",
            "display": "Volar"
          }
        ],
        "text": "Volar"
      }
    ],
    "description": "inner surface (volar) of the left forearm",
    "patient": {
      "reference": "Patient/example"
    }
  }