import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-grantor.json.html
// Patient grants access to a specified individual for read-only access

export const mockConsent9: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-grantor",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">The following scenario is based on a question asked on John Moehrke's blog in the \n\t<a href=\"http://healthcaresecprivacy.blogspot.com/2016/04/consent-given-to-authorized.html\">Consent given to authorized representative</a>\n    <p>\nThis is a case where a Patient is giving a limited (read-only) access to an individual.\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to provide XXX with read-only access to the data at Good Health Psychiatric Hospital \n   available for patient requested access use.\n   </p>\n   </div>"
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
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code": "INFAO"
          }
        ]
      }
    ],
    "patient": {
      "reference": "Patient/f001",
      "display": "P. van de Heuvel"
    },
    "dateTime": "2015-11-18",
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
          "code": "OPTOUT"
        }
      ]
    },
    "provision": {
      "actor": [
        {
          "role": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "CST"
              }
            ]
          },
          "reference": {
            "reference": "Organization/f001"
          }
        },
        {
          "role": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "PRCP"
              }
            ]
          },
          "reference": {
            "reference": "Patient/example",
            "display": "Good Health Clinic"
          }
        }
      ],
      "action": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentaction",
              "code": "access"
            }
          ]
        }
      ]
    }
  }