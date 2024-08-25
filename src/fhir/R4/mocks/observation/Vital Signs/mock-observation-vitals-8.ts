import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-head-circumference.json.html
// Simple Head Circumference Example

export const mockObservationVitals8: Observation = {
    "resourceType": "Observation",
    "id": "head-circumference",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: head-circumference</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Head Circumference <span>(Details : {LOINC code '9843-4' = 'Head Occipital-frontal circumference', given as 'Head Occipital-frontal circumference'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 51.2 cm<span> (Details: UCUM code cm = 'cm')</span></p></div>"
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
          "code": "9843-4",
          "display": "Head Occipital-frontal circumference"
        }
      ],
      "text": "Head Circumference"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "valueQuantity": {
      "value": 51.2,
      "unit": "cm",
      "system": "http://unitsofmeasure.org",
      "code": "cm"
    }
  }