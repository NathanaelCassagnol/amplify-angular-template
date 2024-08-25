import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0316.json.html
// Dispense for Insulin (Lantus) (NDC code) - in-progress with SC dosage

export const mockMedicationDispense17: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0316",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0316</p><p><b>status</b>: in-progress</p><p><b>medication</b>: Lantus 100 unit/ml injectable solution <span>(Details : {RxNorm code '285018' = 'Lantus 100 UNT/ML Injectable Solution', given as 'Lantus 100 unit/ml injectable solution'})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0320</a></p><p><b>type</b>: Refill - Part Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'RFP' = 'Refill - Part Fill', given as 'Refill - Part Fill'})</span></p><p><b>quantity</b>: 10 ml<span> (Details: UCUM code ml = 'ml')</span></p><p><b>daysSupply</b>: 30 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "status": "in-progress",
    "medicationCodeableConcept": {
      "coding": [
        {
          "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
          "code": "285018",
          "display": "Lantus 100 unit/ml injectable solution"
        }
      ]
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck "
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f006"
        }
      }
    ],
    "authorizingPrescription": [
      {
        "reference": "MedicationRequest/medrx0320"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "RFP",
          "display": "Refill - Part Fill"
        }
      ]
    },
    "quantity": {
      "value": 10,
      "system": "http://unitsofmeasure.org",
      "code": "ml"
    },
    "daysSupply": {
      "value": 30,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-06-25T07:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "20 Units SC three times daily",
        "timing": {
          "repeat": {
            "frequency": 3,
            "period": 1,
            "periodUnit": "d"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "263887005",
              "display": "Subcutaneous (qualifier value)"
            }
          ]
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
              "value": 20,
              "unit": "U",
              "system": "http://unitsofmeasure.org",
              "code": "U"
            }
          }
        ]
      }
    ]
  }