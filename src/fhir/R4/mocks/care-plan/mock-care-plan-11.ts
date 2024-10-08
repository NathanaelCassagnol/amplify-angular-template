import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example-obesity-narrative.json.html
// Primarily narrative care plan to address obesity

export const mockCarePlan11: CarePlan = {
    "resourceType": "CarePlan",
    "id": "obesity-narrative",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p> Care plan to address obesity.  Goal is a target weight of 160 to 180 lbs.  Activities include diet and exercise.</p>\n    </div>"
    },
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    }
  }