import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-satO2.json.html
// Oxygen Saturation by Pulse Oximetry Example (DeviceMetricObservation profile)

export const mockObservationVitals11: Observation = {
    "resourceType": "Observation",
    "id": "satO2",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/StructureDefinition/vitalsigns"
      ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: satO2</p><p><b>meta</b>: </p><p><b>identifier</b>: o1223435-10</p><p><b>partOf</b>: <a>Procedure/ob</a></p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Oxygen saturation in Arterial blood <span>(Details : {LOINC code '2708-6' = 'Oxygen saturation in Arterial blood', given as 'Oxygen saturation in Arterial blood'}; {LOINC code '59408-5' = 'Oxygen saturation in Arterial blood by Pulse oximetry', given as 'Oxygen saturation in Arterial blood by Pulse oximetry'}; {urn:iso:std:iso:11073:10101 code '150456' = '150456', given as 'MDC_PULS_OXIM_SAT_O2'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 05/12/2014 9:30:10 AM</p><p><b>value</b>: 95 %<span> (Details: UCUM code % = '%')</span></p><p><b>interpretation</b>: Normal (applies to non-numeric results) <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'N' = 'Normal', given as 'Normal'})</span></p><p><b>device</b>: <a>DeviceMetric/example</a></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>90 %<span> (Details: UCUM code % = '%')</span></td><td>99 %<span> (Details: UCUM code % = '%')</span></td></tr></table></div>"
    },
    "identifier": [
      {
        "system": "http://goodcare.org/observation/id",
        "value": "o1223435-10"
      }
    ],
    "partOf": [
      {
        "reference": "Procedure/ob"
      }
    ],
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
          "code": "2708-6",
          "display": "Oxygen saturation in Arterial blood"
        },
        {
          "system": "http://loinc.org",
          "code": "59408-5",
          "display": "Oxygen saturation in Arterial blood by Pulse oximetry"
        },
        {
          "system": "urn:iso:std:iso:11073:10101",
          "code": "150456",
          "display": "MDC_PULS_OXIM_SAT_O2"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "effectiveDateTime": "2014-12-05T09:30:10+01:00",
    "valueQuantity": {
      "value": 95,
      "unit": "%",
      "system": "http://unitsofmeasure.org",
      "code": "%"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "N",
            "display": "Normal"
          }
        ],
        "text": "Normal (applies to non-numeric results)"
      }
    ],
    "device": {
      "reference": "DeviceMetric/example"
    },
    "referenceRange": [
      {
        "low": {
          "value": 90,
          "unit": "%",
          "system": "http://unitsofmeasure.org",
          "code": "%"
        },
        "high": {
          "value": 99,
          "unit": "%",
          "system": "http://unitsofmeasure.org",
          "code": "%"
        }
      }
    ]
  }