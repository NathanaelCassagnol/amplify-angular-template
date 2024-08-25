import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-f002-excess.json.html
// Real-world patient -base excess

export const mockObservationLab4: Observation = {
    "resourceType": "Observation",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: 6324 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Base excess in Blood by calculation <span>(Details : {LOINC code '11555-0' = 'Base excess in Blood by calculation', given as 'Base excess in Blood by calculation'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 12.6 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>11.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
        "value": "6324"
      }
    ],
    "status": "final",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "11555-0",
          "display": "Base excess in Blood by calculation"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "effectivePeriod": {
      "start": "2013-04-02T10:30:10+01:00",
      "end": "2013-04-05T10:30:10+01:00"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "performer": [
      {
        "reference": "Practitioner/f005",
        "display": "A. Langeveld"
      }
    ],
    "valueQuantity": {
      "value": 12.6,
      "unit": "mmol/l",
      "system": "http://unitsofmeasure.org",
      "code": "mmol/L"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "H",
            "display": "High"
          }
        ]
      }
    ],
    "referenceRange": [
      {
        "low": {
          "value": 7.1,
          "unit": "mmol/l",
          "system": "http://unitsofmeasure.org",
          "code": "mmol/L"
        },
        "high": {
          "value": 11.2,
          "unit": "mmol/l",
          "system": "http://unitsofmeasure.org",
          "code": "mmol/L"
        }
      }
    ]
  }