import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-smartonfhir.json.html
// Template for recording a Smart on FHIR Authorization

export const mockConsent11: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-smartonfhir",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: consent-example-smartonfhir</p><p><b>status</b>: active</p><p><b>scope</b>: Privacy Consent <span>(Details : {http://terminology.hl7.org/CodeSystem/consentscope code 'patient-privacy' = 'Privacy Consent)</span></p><p><b>category</b>: Patient Consent <span>(Details : {LOINC code '59284-0' = 'Patient Consent)</span></p><p><b>patient</b>: <a>Patient/xcda</a></p><p><b>dateTime</b>: 23/06/2016 5:02:33 PM</p><p><b>performer</b>: <a>RelatedPerson/peter</a></p><p><b>organization</b>: <a>Organization/f001</a></p><p><b>policyRule</b>: opt-in <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'OPTIN' = 'opt-in)</span></p><blockquote><p><b>provision</b></p><p><b>period</b>: 23/06/2016 5:02:33 PM --&gt; 23/06/2016 5:32:33 PM</p><h3>Provisions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>"
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
      "reference": "Patient/xcda"
    },
    "dateTime": "2016-06-23T17:02:33+10:00",
    "performer": [
      {
        "reference": "RelatedPerson/peter"
      }
    ],
    "organization": [
      {
        "reference": "Organization/f001"
      }
    ],
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
        "start": "2016-06-23T17:02:33+10:00",
        "end": "2016-06-23T17:32:33+10:00"
      },
      "provision": [
        {
          "type": "permit",
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "class": [
            {
              "system": "http://hl7.org/fhir/resource-types",
              "code": "MedicationRequest"
            }
          ]
        }
      ]
    }
  }