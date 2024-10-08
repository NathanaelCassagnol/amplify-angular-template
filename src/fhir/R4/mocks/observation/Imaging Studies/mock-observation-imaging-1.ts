import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-bmd.json.html
// Example of an encoded BMD measurements of left femur

export const mockObservationImaging1: Observation = {
    "resourceType": "Observation",
    "id": "bmd",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bmd</p><p><b>status</b>: final</p><p><b>code</b>: BMD - Left Femur <span>(Details : {LOINC code '24701-5' = 'Femur DXA Bone density', given as 'Femur DXA Bone density'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Imaging Diagnostics</a></p><p><b>value</b>: 0.887 g/cm²<span> (Details: UCUM code g/cm-2 = 'g/cm-2')</span></p><p><b>bodySite</b>: Left Femur <span>(Details : {SNOMED CT code '71341001:272741003=7771000' = 'Femur where Laterality = Left)</span></p></div>"
    },
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "24701-5",
          "display": "Femur DXA Bone density"
        }
      ],
      "text": "BMD - Left Femur"
    },
    "subject": {
      "reference": "Patient/pat2"
    },
    "performer": [
      {
        "reference": "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
        "display": "Acme Imaging Diagnostics"
      }
    ],
    "valueQuantity": {
      "value": 0.887,
      "unit": "g/cm²",
      "system": "http://unitsofmeasure.org",
      "code": "g/cm-2"
    },
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "71341001:272741003=7771000"
        }
      ],
      "text": "Left Femur"
    }
  }