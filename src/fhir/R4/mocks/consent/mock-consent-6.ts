import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-notOrg.json.html
// Withhold or withdraw consent for disclosure to a specific provider organization

export const mockConsent6: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-notOrg",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 3) Withhold or withdraw consent for disclosure to a specific provider organization  \n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; ex-spouse is a Physician that is employed by Good Health Clinic.  P. decides\n   that he would like to withdraw/withhold consent to disclose any instance of his health information \n   to Good Health Clinic.\n   </p>\n   </div>"
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
          "code": "OPTIN"
        }
      ]
    },
    "provision": {
      "type": "deny",
      "actor": [
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
            "reference": "Organization/f001"
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
        },
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentaction",
              "code": "correct"
            }
          ]
        }
      ]
    }
  }