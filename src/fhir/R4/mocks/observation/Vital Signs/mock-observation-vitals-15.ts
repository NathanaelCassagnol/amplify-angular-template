import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-vitals-panel.json.html
// Simple Panel of Heart Rate, Repiratory Rate. Blood Pressure and Body Temperature

export const mockObservationVitals15: Observation = {
    "resourceType": "Observation",
    "id": "vitals-panel",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vitals-panel</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Vital signs Panel <span>(Details : {LOINC code '85353-1' = 'Vital signs, weight, height, head circumference, oxygen saturation &amp; BMI panel', given as 'Vital signs, weight, height, head circumference, oxygen saturation and BMI panel'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>hasMember</b>: </p><ul><li><a>Respiratory Rate</a></li><li><a>Heart Rate</a></li><li><a>Blood Pressure</a></li><li><a>Body Temperature</a></li></ul></div>"
    },
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ],
        "text": "Vital Signs"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "85353-1",
          "display": "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
        }
      ],
      "text": "Vital signs Panel"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "hasMember": [
      {
        "reference": "Observation/respiratory-rate",
        "display": "Respiratory Rate"
      },
      {
        "reference": "Observation/heart-rate",
        "display": "Heart Rate"
      },
      {
        "reference": "Observation/blood-pressure",
        "display": "Blood Pressure"
      },
      {
        "reference": "Observation/body-temperature",
        "display": "Body Temperature"
      }
    ]
  }