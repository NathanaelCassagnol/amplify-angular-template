import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-Emergency.json.html
// Consent withholding access to data for Treatment exept for Emergency Treatment

export const mockConsent3: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-Emergency",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>\n\tWithhold Authorization for Treatment rule for Emegency Treatment\n\t</p>\n      <p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have no data at the Good Health Psychiatric Hospital \n   available rule for Emergency treatment use.\n   An overall Deny consent Directive, with an exception &quot;Permit&quot; of purposeOfUse &quot;ETREAT&quot; \n   at &quot;Good Health&quot; hospital, and exception &quot;Deny&quot; all other purposeOfUse from good health hospital.\n   </p>\n    </div>"
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
            "code": "EMRGONLY"
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
        }
      ],
      "purpose": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "ETREAT"
        }
      ],
      "provision": [
        {
          "type": "deny",
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
            }
          ]
        }
      ]
    }
  }