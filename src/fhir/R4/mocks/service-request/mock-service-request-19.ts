import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-pgx.json.html
// PGx Phenotype example

export const mockServiceRequest19: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "example-pgx",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: CYP2D6 gene targeted mutation analysis <span>(Details : {LOINC code '47403-1' = 'CYP2D6 gene mutation analysis in Blood or Tissue by Molecular genetics method Narrative', given as 'CYP2D6 gene targeted mutation analysis'})</span></p><p><b>subject</b>: <a>Patient/899962</a></p><p><b>authoredOn</b>: 10/10/2016 3:00:00 PM</p><p><b>requester</b>: <a>Practitioner/12345</a></p></div>"
    },
    "status": "active",
    "intent": "original-order",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "47403-1",
          "display": "CYP2D6 gene targeted mutation analysis"
        }
      ]
    },
    "subject": {
      "reference": "Patient/899962"
    },
    "authoredOn": "2016-10-10T15:00:00-07:00",
    "requester": {
      "reference": "Practitioner/12345"
    }
  }