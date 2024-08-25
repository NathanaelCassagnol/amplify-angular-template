import { NutritionOrder } from "fhir/R4/types/nutrition-order";

// https://hl7.org/fhir/R4/nutritionorder-example-enteralcontinuous.json.html
// Nutrition Order Enteral Continuous Feeding Example

export const mockNutritionOrder12: NutritionOrder = {
    "resourceType": "NutritionOrder",
    "id": "enteralcontinuous",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: enteralcontinuous</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><blockquote><p><b>enteralFormula</b></p><p><b>baseFormulaType</b>: Diabetic specialty enteral formula <span>(Details : {SNOMED CT code '6547210000124112' = '6547210000124112', given as 'Diabetic specialty enteral formula'})</span></p><p><b>baseFormulaProductName</b>:  Acme Diabetes Formula</p><p><b>caloricDensity</b>: 1 calories per milliliter<span> (Details: UCUM code cal/mL = 'cal/mL')</span></p><p><b>routeofAdministration</b>: Instillation, nasogastric tube <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'NGT' = 'Instillation, nasogastric tube', given as 'Instillation, nasogastric tube'})</span></p><blockquote><p><b>administration</b></p><p><b>schedule</b>: Starting 17/09/2014 7:00:00 AM, Do Once</p><p><b>rate</b>: 60 ml/hr<span> (Details: UCUM code mL/h = 'mL/h')</span></p></blockquote><blockquote><p><b>administration</b></p><p><b>schedule</b>: Starting 17/09/2014 11:00:00 AM, Do Once</p><p><b>rate</b>: 80 ml/hr<span> (Details: UCUM code mL/h = 'mL/h')</span></p></blockquote><blockquote><p><b>administration</b></p><p><b>schedule</b>: Starting 17/09/2014 3:00:00 PM, Do Once</p><p><b>rate</b>: 100 ml/hr<span> (Details: UCUM code mL/h = 'mL/h')</span></p></blockquote><p><b>maxVolumeToDeliver</b>: 880 milliliter/day<span> (Details: UCUM code mL/d = 'mL/d')</span></p><p><b>administrationInstruction</b>: Hold feedings from 7 pm to 7 am. Add MCT oil to increase calories from 1.0 cal/mL to 1.5 cal/mL</p></blockquote></div>"
    },
    "identifier": [
      {
        "system": "http://www.acme.org/nutritionorders",
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
    "enteralFormula": {
      "baseFormulaType": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "6547210000124112",
            "display": "Diabetic specialty enteral formula"
          }
        ]
      },
      "baseFormulaProductName": " Acme Diabetes Formula",
      "caloricDensity": {
        "value": 1,
        "unit": "calories per milliliter",
        "system": "http://unitsofmeasure.org",
        "code": "cal/mL"
      },
      "routeofAdministration": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
            "code": "NGT",
            "display": "Instillation, nasogastric tube"
          }
        ]
      },
      "administration": [
        {
          "schedule": {
            "repeat": {
              "boundsPeriod": {
                "start": "2014-09-17T07:00:00Z"
              }
            }
          },
          "rateQuantity": {
            "value": 60,
            "unit": "ml/hr",
            "system": "http://unitsofmeasure.org",
            "code": "mL/h"
          }
        },
        {
          "schedule": {
            "repeat": {
              "boundsPeriod": {
                "start": "2014-09-17T11:00:00Z"
              }
            }
          },
          "rateQuantity": {
            "value": 80,
            "unit": "ml/hr",
            "system": "http://unitsofmeasure.org",
            "code": "mL/h"
          }
        },
        {
          "schedule": {
            "repeat": {
              "boundsPeriod": {
                "start": "2014-09-17T15:00:00Z"
              }
            }
          },
          "rateQuantity": {
            "value": 100,
            "unit": "ml/hr",
            "system": "http://unitsofmeasure.org",
            "code": "mL/h"
          }
        }
      ],
      "maxVolumeToDeliver": {
        "value": 880,
        "unit": "milliliter/day",
        "system": "http://unitsofmeasure.org",
        "code": "mL/d"
      },
      "administrationInstruction": "Hold feedings from 7 pm to 7 am. Add MCT oil to increase calories from 1.0 cal/mL to 1.5 cal/mL"
    }
  }