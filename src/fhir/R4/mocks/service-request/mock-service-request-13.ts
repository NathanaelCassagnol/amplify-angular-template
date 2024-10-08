import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-appendectomy.json.html
// Example of an order for an appendectomy procedure that is primarily narrative

export const mockServiceRequest13: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "appendectomy-narrative",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>Date: 2013-03-16</p>\n\t\t\t<p>Patient:: Paula Patient</p>\n\t\t\t<p>Ordered by: Angela Care, MD</p>\n\t\t\t<p>Procedure: Routine Appendectomy</p>\n\t\t\t<p>Surgeon: Dr Cecil Surgeon</p>\n\t\t</div>"
    },
    "status": "completed",
    "intent": "order",
    "code": {
      "text": "Appendectomy"
    },
    "subject": {
      "display": "Paula Patient"
    }
  }