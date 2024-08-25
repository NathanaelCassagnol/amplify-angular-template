import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministration0307.json.html
// Lorazepam with a Device

export const mockMedicationAdministration8: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadmin0307",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0307</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0313; Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span>; Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Performer <span>(Details : {http://terminology.hl7.org/CodeSystem/med-admin-perform-function code 'performer' = 'Performer', given as 'Performer'})</span></td><td><a>Patrick Pump</a></td></tr></table><p><b>request</b>: <a>MedicationRequest/medrx0315</a></p><p><b>device</b>: <a>Device/f001</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td><td><b>Rate[x]</b></td></tr><tr><td>*</td><td>0.05 - 0.1mg/kg IV over 2-5 minutes every 15 minutes as needed</td><td>Intravenous <span>(Details : {SNOMED CT code '255560000' = 'Intravenous', given as 'Intravenous'})</span></td><td>Push - dosing instruction imperative (qualifier value) <span>(Details : {SNOMED CT code '420620005' = 'Push', given as 'Push - dosing instruction imperative (qualifier value)'})</span></td><td>7 mg<span> (Details: UCUM code mg = 'mg')</span></td><td>4 min<span> (Details: UCUM code min = 'min')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0313",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "400621001",
              "display": "Lorazepam 2mg/ml injection solution 1ml vial (product)"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385219001",
              "display": "Injection solution (qualifier value)"
            }
          ]
        },
        "ingredient": [
          {
            "itemCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "387106007",
                  "display": "Lorazepam (substance)"
                }
              ]
            },
            "strength": {
              "numerator": {
                "value": 2,
                "system": "http://unitsofmeasure.org",
                "code": "mg"
              },
              "denominator": {
                "value": 1,
                "system": "http://unitsofmeasure.org",
                "code": "mL"
              }
            }
          }
        ]
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0313"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "context": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "effectivePeriod": {
      "start": "2015-01-15T04:30:00+01:00",
      "end": "2015-01-15T14:30:00+01:00"
    },
    "performer": [
      {
        "function": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
              "code": "performer",
              "display": "Performer"
            }
          ]
        },
        "actor": {
          "reference": "Practitioner/f007",
          "display": "Patrick Pump"
        }
      }
    ],
    "request": {
      "reference": "MedicationRequest/medrx0315"
    },
    "device": [
      {
        "reference": "Device/f001"
      }
    ],
    "dosage": {
      "text": "0.05 - 0.1mg/kg IV over 2-5 minutes every 15 minutes as needed",
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "255560000",
            "display": "Intravenous"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "420620005",
            "display": "Push - dosing instruction imperative (qualifier value)"
          }
        ]
      },
      "dose": {
        "value": 7,
        "unit": "mg",
        "system": "http://unitsofmeasure.org",
        "code": "mg"
      },
      "rateQuantity": {
        "value": 4,
        "unit": "min",
        "system": "http://unitsofmeasure.org",
        "code": "min"
      }
    }
  }