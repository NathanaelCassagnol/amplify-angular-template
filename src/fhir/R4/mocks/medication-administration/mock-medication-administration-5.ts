import { MedicationAdministration } from "fhir/R4/types/medication-administration";

// https://hl7.org/fhir/R4/medicationadministration0304.json.html
// Intravenous Chemotherapy (Inpatient order) - Alemtuzumab - completed

export const mockMedicationAdministration5: MedicationAdministration = {
    "resourceType": "MedicationAdministration",
    "id": "medadmin0304",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medadmin0304</p><p><b>contained</b>: </p><p><b>status</b>: completed</p><p><b>medication</b>: id: med0303; Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>encounter who leads to this prescription</a></p><p><b>effective</b>: 15/01/2015 4:30:00 AM --&gt; 15/01/2015 2:30:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Patrick Pump</a></td></tr></table><p><b>reasonReference</b>: <a>Condition/f202</a></p><p><b>request</b>: <a>MedicationRequest/medrx0319</a></p><h3>Dosages</h3><table><tr><td>-</td><td><b>Text</b></td><td><b>Route</b></td><td><b>Method</b></td><td><b>Dose</b></td></tr><tr><td>*</td><td>Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk</td><td>Intravenous route (qualifier value) <span>(Details : {SNOMED CT code '47625008' = 'Intravenous route', given as 'Intravenous route (qualifier value)'})</span></td><td>Inject - dosing instruction imperative (qualifier value) <span>(Details : {SNOMED CT code '422145002' = 'Inject', given as 'Inject - dosing instruction imperative (qualifier value)'})</span></td><td>3 mg<span> (Details: UCUM code mg = 'mg')</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0303",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "1594660",
              "display": "Alemtuzumab 10mg/ml (Lemtrada)"
            }
          ]
        }
      }
    ],
    "status": "completed",
    "medicationReference": {
      "reference": "#med0303"
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
        "actor": {
          "reference": "Practitioner/f007",
          "display": "Patrick Pump"
        }
      }
    ],
    "reasonReference": [
      {
        "reference": "Condition/f202"
      }
    ],
    "request": {
      "reference": "MedicationRequest/medrx0319"
    },
    "dosage": {
      "text": "Rapid daily-dose escalation, until tolerated, from 3 mg/d, and then 10 mg/d, to the recommended maintenance dose of 30 mg IV over 120 min, 3 times per wk on alternate days for up to 12 wk",
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "47625008",
            "display": "Intravenous route (qualifier value)"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "422145002",
            "display": "Inject - dosing instruction imperative (qualifier value)"
          }
        ]
      },
      "dose": {
        "value": 3,
        "unit": "mg",
        "system": "http://unitsofmeasure.org",
        "code": "mg"
      }
    }
  }