import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example3.json.html
// An example of an order to not turn a patient

export const mockServiceRequest7: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "do-not-turn",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: do-not-turn</p><p><b>identifier</b>: 20170201-0002</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>priority</b>: stat</p><p><b>doNotPerform</b>: true</p><p><b>code</b>: Turning patient in bed (procedure) <span>(Details : {SNOMED CT code '359962006' = 'Turning patient in bed', given as 'Turning patient in bed (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 01/02/2017 5:23:07 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>reasonReference</b>: Patient has a spinal fracture</p></div>"
    },
    "identifier": [
      {
        "system": "http://goodhealth.org/placer-ids",
        "value": "20170201-0002"
      }
    ],
    "status": "active",
    "intent": "order",
    "priority": "stat",
    "doNotPerform": true,
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "359962006",
          "display": "Turning patient in bed (procedure)"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "authoredOn": "2017-02-01T17:23:07Z",
    "requester": {
      "reference": "Practitioner/example",
      "display": "Dr Adam Careful"
    },
    "reasonReference": [
      {
        "display": "Patient has a spinal fracture"
      }
    ]
  }