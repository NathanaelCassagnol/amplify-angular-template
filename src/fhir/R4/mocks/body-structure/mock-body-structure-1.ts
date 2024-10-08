import { BodyStructure } from "../../types/body-structure";

// https://hl7.org/fhir/R4/bodystructure-example-fetus.json.html
// This example demonstrates using the bodystructure resource to identify a fetus within systems that choose not to treat a fetus as a Patient

export const mockBodyStructure1: BodyStructure = {
    "resourceType": "BodyStructure",
    "id": "fetus",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fetus</p><p><b>identifier</b>: 12345</p><p><b>location</b>: Fetus <span>(Details : {SNOMED CT code '83418008' = 'Fetus', given as 'Entire fetus (body structure)'})</span></p><p><b>description</b>: EDD 1/1/2017 confirmation by LMP</p><p><b>patient</b>: <a>Patient/example</a></p></div>"
    },
    "identifier": [
      {
        "system": "http://goodhealth.org/bodystructure/identifiers",
        "value": "12345"
      }
    ],
    "location": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "83418008",
          "display": "Entire fetus (body structure)"
        }
      ],
      "text": "Fetus"
    },
    "description": "EDD 1/1/2017 confirmation by LMP",
    "patient": {
      "reference": "Patient/example"
    }
  }