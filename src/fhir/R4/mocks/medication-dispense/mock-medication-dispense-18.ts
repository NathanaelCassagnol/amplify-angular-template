import { MedicationDispense } from "fhir/R4/types/medication-dispense";

// https://hl7.org/fhir/R4/medicationdispense0317.json.html
// Dispense for Brentuximab Vedotin (NDC code) - IV Chemo - stopped

export const mockMedicationDispense18: MedicationDispense = {
    "resourceType": "MedicationDispense",
    "id": "meddisp0317",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: meddisp0317</p><p><b>contained</b>: </p><p><b>status</b>: stopped</p><p><b>medication</b>: Brentixumab Vedotin (Adcetris). Generated Summary: id: med0306; Adcetris (Brentuximab Vedotin 50mg/10.5ml) <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris (Brentuximab Vedotin 50mg/10.5ml)'})</span>; Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><p><b>subject</b>: <a>Donald Duck </a></p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Practitioner/f006</a></td></tr></table><p><b>authorizingPrescription</b>: <a>MedicationRequest/medrx0316</a></p><p><b>type</b>: Trial Fill <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'TF' = 'Trial Fill', given as 'Trial Fill'})</span></p><p><b>quantity</b>: 3 415818005<span> (Details: SNOMED CT code 415818005 = '415818005')</span></p><p><b>daysSupply</b>: 1 Day<span> (Details: UCUM code d = 'd')</span></p><p><b>whenPrepared</b>: 25/06/2015 7:13:00 AM</p><p><b>whenHandedOver</b>: 26/06/2015 7:13:00 AM</p><p><b>dosageInstruction</b>: </p></div>"
    },
    "contained": [
      {
        "resourceType": "Medication",
        "id": "med0306",
        "code": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/ndc",
              "code": "51144-050-01",
              "display": "Adcetris (Brentuximab Vedotin 50mg/10.5ml)"
            }
          ]
        },
        "manufacturer": {
          "reference": "Organization/mmanu"
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421637006",
              "display": "Lyophilized powder for injectable solution (qualifier value) "
            }
          ]
        }
      }
    ],
    "status": "stopped",
    "medicationReference": {
      "reference": "#med0306",
      "display": "Brentixumab Vedotin (Adcetris)"
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
        "reference": "MedicationRequest/medrx0316"
      }
    ],
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "TF",
          "display": "Trial Fill"
        }
      ]
    },
    "quantity": {
      "value": 3,
      "system": "http://snomed.info/sct",
      "code": "415818005"
    },
    "daysSupply": {
      "value": 1,
      "unit": "Day",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    },
    "whenPrepared": "2015-06-25T07:13:00+05:00",
    "whenHandedOver": "2015-06-26T07:13:00+05:00",
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "1.8 mg/kg IV infusion over 30 minutes every 3 weeks for 16 cycles",
        "timing": {
          "repeat": {
            "count": 16,
            "frequency": 1,
            "period": 3,
            "periodUnit": "wk"
          }
        },
        "route": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "255560000",
              "display": "Intravenous"
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
              "value": 1.8,
              "unit": "mg/kg",
              "system": "http://unitsofmeasure.org",
              "code": "mg/kg"
            }
          }
        ]
      }
    ]
  }