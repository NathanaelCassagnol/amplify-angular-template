import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-colonoscopy.json.html
// Example of an order for a colonoscopy procedure with complication

export const mockServiceRequest12: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "colonoscopy",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: colonoscopy</p><p><b>identifier</b>: 45678</p><p><b>requisition</b>: req12345</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Colonoscopy <span>(Details : {SNOMED CT code '73761001' = 'Colonoscopy', given as 'Colonoscopy (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 05/03/2017</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>performer</b>: <a>Dr Adam Careful</a></p></div>"
    },
    "identifier": [
      {
        "value": "45678"
      }
    ],
    "requisition": {
      "system": "http://bumc.org/requisitions",
      "value": "req12345"
    },
    "status": "completed",
    "intent": "order",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "73761001",
          "display": "Colonoscopy (procedure)"
        }
      ],
      "text": "Colonoscopy"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "authoredOn": "2017-03-05",
    "requester": {
      "reference": "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
      "display": "Dr. Beverly Crusher"
    },
    "performer": [
      {
        "reference": "Practitioner/example",
        "display": "Dr Adam Careful"
      }
    ]
  }