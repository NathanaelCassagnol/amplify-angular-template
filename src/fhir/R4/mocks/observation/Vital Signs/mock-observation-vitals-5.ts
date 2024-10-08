import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-body-temperature.json.html
// Simple Body Temperature Example

export const mockObservationVitals5: Observation = {
    "resourceType": "Observation",
    "id": "body-temperature",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: body-temperature</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Body temperature <span>(Details : {LOINC code '8310-5' = 'Body temperature', given as 'Body temperature'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 36.5 C<span> (Details: UCUM code Cel = 'Cel')</span></p></div>"
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
          "code": "8310-5",
          "display": "Body temperature"
        }
      ],
      "text": "Body temperature"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "1999-07-02",
    "valueQuantity": {
      "value": 36.5,
      "unit": "C",
      "system": "http://unitsofmeasure.org",
      "code": "Cel"
    }
  }