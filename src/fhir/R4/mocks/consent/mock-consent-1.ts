import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example.json.html
// General Consent Example

export const mockConsent1: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-basic",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\tAuthorize Normal access for Treatment\n\t\t\t</p>\n\t\t\t<p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have all of the PHI collected at the Good Health Psychiatric Hospital \n   available for normal treatment use.\n\t\t\t</p>\n\t\t</div>"
    },
    "status": "active",
    "scope": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/consentscope",
          "code": "patient-privacy"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "59284-0"
          }
        ]
      }
    ],
    "patient": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "dateTime": "2016-05-11",
    "organization": [
      {
        "reference": "Organization/f001"
      }
    ],
    "sourceAttachment": {
      "title": "The terms of the consent in lawyer speak."
    },
    "policyRule": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "OPTIN"
        }
      ]
    },
    "provision": {
      "period": {
        "start": "1964-01-01",
        "end": "2016-01-01"
      }
    }
  }