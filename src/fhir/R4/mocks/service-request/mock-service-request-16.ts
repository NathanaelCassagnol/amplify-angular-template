import { ServiceRequest } from "fhir/R4/types/service-request";

// https://hl7.org/fhir/R4/servicerequest-example-edu.json.html
// Example of an order for patient education

export const mockServiceRequest16: ServiceRequest = {
    "resourceType": "ServiceRequest",
    "id": "education",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: education</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>category</b>: Education <span>(Details : {SNOMED CT code '311401005' = 'Patient education', given as 'Patient education (procedure)'})</span></p><p><b>code</b>: Health education - breast examination <span>(Details : {SNOMED CT code '48023004' = 'Breast self-examination technique education', given as 'Breast self-examination technique education (procedure)'})</span></p><p><b>subject</b>: Jane Doe</p><p><b>occurrence</b>: 16/08/2014</p><p><b>authoredOn</b>: 16/08/2016</p><p><b>requester</b>: Angela Care, MD</p><p><b>performer</b>: Pamela Educator, RN</p><p><b>reasonCode</b>: early detection of breast mass <span>(Details )</span></p></div>"
    },
    "status": "completed",
    "intent": "order",
    "category": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "311401005",
            "display": "Patient education (procedure)"
          }
        ],
        "text": "Education"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "48023004",
          "display": "Breast self-examination technique education (procedure)"
        }
      ],
      "text": "Health education - breast examination"
    },
    "subject": {
      "display": "Jane Doe"
    },
    "occurrenceDateTime": "2014-08-16",
    "authoredOn": "2016-08-16",
    "requester": {
      "display": "Angela Care, MD"
    },
    "performer": [
      {
        "display": "Pamela Educator, RN"
      }
    ],
    "reasonCode": [
      {
        "text": "early detection of breast mass"
      }
    ]
  }