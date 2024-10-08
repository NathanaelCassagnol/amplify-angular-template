import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-HCBS.json.html
// Example of personal care services provided at person's home

export const mockProcedure16: Procedure = {
    "resourceType": "Procedure",
    "id": "HCBS",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Personal care services provided at person's home</b>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<b> Based On</b> : Peter's Long Term Services and Supports (LTSS) care plan</p>\n\t\t\t<p>\n\t\t\t\t<b> Status</b> : completed</p>\n\t\t\t<p>\n\t\t\t\t<b> Beneficiary</b> : Peter James</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Name/Code</b> : Personal care services <span> (Details : {HCPCS code 'T1019' = 'Personal care services, per 15 minutes'})</span>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Date</b> : Apr 5, 2018</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Provider</b> : Adam Careful</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Delivery Address</b> : Peter's home</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Comment</b> : Assisted with bathing and dressing, doing laundry, and meal preparation</p>\n\t\t</div>"
    },
    "basedOn": [
      {
        "display": "Peter's Long Term Service and Supports (LTSS) Care Plan"
      }
    ],
    "status": "completed",
    "code": {
      "coding": [
        {
          "system": "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets/Alpha-Numeric-HCPCS.html",
          "code": "T1019",
          "display": "Personal care services, per 15 minutes, not for an inpatient or resident of a hospital, nursing facility, icf/mr or imd, part of the individualized plan of treatment."
        }
      ],
      "text": "Personal care services"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James"
    },
    "performedDateTime": "2018-04-05",
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Adam Careful"
        }
      }
    ],
    "location": {
      "reference": "Location/ph",
      "display": "Peter's Home"
    },
    "note": [
      {
        "text": "Assisted with bathing and dressing, doing laundry, and meal preparation"
      }
    ]
  }