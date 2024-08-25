import { NutritionOrder } from "fhir/R4/types/nutrition-order";

// https://hl7.org/fhir/R4/nutritionorder-example-diabeticsupplement.json.html
// Nutrition Order Diabetic Supplement Example

export const mockNutritionOrder8: NutritionOrder = {
    "resourceType": "NutritionOrder",
    "id": "diabeticsupplement",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: diabeticsupplement</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Kosher <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'kosher' = 'Kosher)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><h3>Supplements</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>ProductName</b></td><td><b>Schedule</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>Adult diabetic formula <span>(Details : {SNOMED CT code '443051000124104' = 'Adult diabetic specialty formula (product)', given as 'Adult diabetes specialty formula'}; {http://goodhealthhospital.org/supplement-type-codes code '1010' = '1010', given as 'Adult diabetic formula'})</span></td><td>Glucerna</td><td>Starting 10/02/2015 3:00:00 PM, Do Once per 24 hours</td><td>1 8 oz bottle</td></tr></table></div>"
    },
    "identifier": [
      {
        "system": "http://goodhealthhospital.org/nutrition-requests",
        "value": "123"
      }
    ],
    "status": "active",
    "intent": "order",
    "patient": {
      "reference": "Patient/example",
      "display": "Peter Chalmers"
    },
    "encounter": {
      "reference": "Encounter/example",
      "display": "Inpatient"
    },
    "dateTime": "2014-09-17",
    "orderer": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "allergyIntolerance": [
      {
        "reference": "AllergyIntolerance/example",
        "display": "Cashew Nuts"
      }
    ],
    "foodPreferenceModifier": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/diet",
            "code": "kosher"
          }
        ]
      }
    ],
    "excludeFoodModifier": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "version": "20140730",
            "code": "227493005",
            "display": "Cashew Nut"
          }
        ]
      }
    ],
    "supplement": [
      {
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "443051000124104",
              "display": "Adult diabetes specialty formula"
            },
            {
              "system": "http://goodhealthhospital.org/supplement-type-codes",
              "code": "1010",
              "display": "Adult diabetic formula"
            }
          ],
          "text": "Adult diabetic formula"
        },
        "productName": "Glucerna",
        "schedule": [
          {
            "repeat": {
              "boundsPeriod": {
                "start": "2015-02-10T15:00:00Z"
              },
              "frequency": 1,
              "period": 24,
              "periodUnit": "h"
            }
          },
          {
            "repeat": {
              "duration": 1,
              "durationUnit": "h",
              "when": [
                "HS"
              ]
            }
          }
        ],
        "quantity": {
          "value": 1,
          "unit": "8 oz bottle"
        }
      }
    ]
  }