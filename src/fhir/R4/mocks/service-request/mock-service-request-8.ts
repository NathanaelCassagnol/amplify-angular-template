import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example4.json.html
// Part of an exercise plan

export const mockServiceRequest8: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "benchpress",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: benchpress</p><p><b>status</b>: active</p><p><b>intent</b>: plan</p><p><b>code</b>: Bench Press (regime/therapy)  <span>(Details : {SNOMED CT code '229115003' = 'Bench press', given as 'Bench Press (regime/therapy) '})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: Count 20 times, Do 3 per 1 weeks</p><p><b>patientInstruction</b>: Start with 30kg 10-15 repetitions for three sets and increase in increments of 5kg when you feel ready</p></div>"
    },
    "status": "active",
    "intent": "plan",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "229115003",
          "display": "Bench Press (regime/therapy) "
        }
      ]
    },
    "subject": {
      "reference": "Patient/example"
    },
    "occurrenceTiming": {
      "repeat": {
        "count": 20,
        "countMax": 30,
        "frequency": 3,
        "period": 1,
        "periodUnit": "wk"
      }
    },
    "patientInstruction": "Start with 30kg 10-15 repetitions for three sets and increase in increments of 5kg when you feel ready"
  }