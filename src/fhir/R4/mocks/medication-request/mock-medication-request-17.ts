import { MedicationRequest } from "fhir/R4/types/medication-request";

// https://hl7.org/fhir/R4/medicationrequest0316.json.html
// Request for Intravenous Chemotherapy (inpatient order) - Brentuximab Vedotin - completed

export const mockMedicationRequest17: MedicationRequest = {
    "resourceType": "MedicationRequest",
    "id": "medrx0316",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medrx0316</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>medication</b>: id: med0306; Adcetris <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris'})</span>; Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>encounter</b>: <a>encounter who leads to this prescription</a></p><p><b>authoredOn</b>: 15/01/2015</p><p><b>requester</b>: <a>Patrick Pump</a></p><p><b>instantiatesUri</b>: <a>http://www.bccancer.bc.ca/chemotherapy-protocols-site/Documents/Lymphoma-Myeloma/ULYBRENTUX%20Protocol_1Jun2017.pdf</a></p><p><b>dosageInstruction</b>: </p></div>"
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
              "display": "Adcetris"
            }
          ]
        },
        "form": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "421637006",
              "display": "Lyophilized powder for injectable solution (qualifier value) "
            }
          ]
        },
        "batch": {
          "lotNumber": "12345",
          "expirationDate": "2019-10-31"
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
    "status": "completed",
    "intent": "order",
    "medicationReference": {
      "reference": "#med0306"
    },
    "subject": {
      "reference": "Patient/pat1",
      "display": "Donald Duck"
    },
    "encounter": {
      "reference": "Encounter/f001",
      "display": "encounter who leads to this prescription"
    },
    "authoredOn": "2015-01-15",
    "requester": {
      "reference": "Practitioner/f007",
      "display": "Patrick Pump"
    },
    "instantiatesUri": [
      "http://www.bccancer.bc.ca/chemotherapy-protocols-site/Documents/Lymphoma-Myeloma/ULYBRENTUX%20Protocol_1Jun2017.pdf"
    ],
    "dosageInstruction": [
      {
        "sequence": 1,
        "text": "1.8 mg/kg IV infusion over 20 minutes every 3 weeks for 16 cycles",
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
            },
            "rateRatio": {
              "numerator": {
                "value": 1.8,
                "system": "http://unitsofmeasure.org",
                "code": "mg/kg"
              },
              "denominator": {
                "value": 20,
                "system": "http://unitsofmeasure.org",
                "code": "min"
              }
            }
          }
        ],
        "maxDosePerLifetime": {
          "value": 400,
          "unit": "mg",
          "system": "http://unitsofmeasure.org",
          "code": "mg"
        }
      }
    ]
  }