import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0328.json.html
// Request referencing Medication Resource for Nasal Spray - Nasonex

export const mockMedicationRequest29: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0328",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0328</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0315; Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span>; Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>dosageInstruction</b>: </p><h3>DispenseRequests</h3><table><tr><td>-</td><td><b>ValidityPeriod</b></td><td><b>NumberOfRepeatsAllowed</b></td><td><b>Quantity</b></td><td><b>ExpectedSupplyDuration</b></td></tr><tr><td>*</td><td>15/01/2015 --&gt; 15/01/2016</td><td>3</td><td>30 ml<span> (Details: UCUM code ml = 'ml')</span></td><td>30 days<span> (Details: UCUM code d = 'd')</span></td></tr></table><h3>Substitutions</h3><table><tr><td>-</td><td><b>Allowed[x]</b></td><td><b>Reason</b></td></tr><tr><td>*</td><td>true</td><td>formulary policy <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'FP' = 'formulary policy', given as 'formulary policy'})</span></td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0315",
        "code": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "358793",
              "display": "Mometasone Furoate 0.05mg/Actuat"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "385157007",
              "display": "Nasal Spray"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "use": "official",
        "system": "http://www.bmc.nl/portal/prescriptions",
        "value": "12345689"
      }
    ],
    "status": "active",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0315"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "Use 1 spray twice daily",
        "timing": {
          "repeat": {
            "frequency": 2,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "doseAndRate": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  "code": "ordered",
                  "display": "Ordered"
                }
              ]
            },
            "doseQuantity": {
              "value": 1,
              "unit": "ea",
              "system": "http://unitsofmeasure.org",
              "code": "ea"
            }
          }
        ]
      }
    ],
    "dispenseRequest": {
      "validityPeriod": {
        "start": "2015-01-15",
        "end": "2016-01-15"
      },
      "numberOfRepeatsAllowed": 3,
      "quantity": {
        "value": 30,
        "unit": "ml",
        "system": "http://unitsofmeasure.org",
        "code": "ml"
      },
      "expectedSupplyDuration": {
        "value": 30,
        "unit": "days",
        "system": "http://unitsofmeasure.org",
        "code": "d"
      }
    },
    "substitution": {
      "allowedBoolean": true,
      "reason": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "FP",
            "display": "formulary policy"
          }
        ]
      }
    }
  }