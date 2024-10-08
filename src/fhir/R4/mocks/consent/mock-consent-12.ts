import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-signature.json.html
// Consent Example with a signature

export const mockConsent12: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-signature",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: consent-example-signature</p><p><b>identifier</b>: 494e0c7a-a69e-4fb4-9d02-6aae747790d7</p><p><b>status</b>: active</p><p><b>scope</b>: Privacy Consent <span>(Details : {http://terminology.hl7.org/CodeSystem/consentscope code 'patient-privacy' = 'Privacy Consent)</span></p><p><b>category</b>: Notice of Privacy Practices <span>(Details : {http://terminology.hl7.org/CodeSystem/consentcategorycodes code 'npp' = 'Notice of Privacy Practices)</span></p><p><b>patient</b>: <a>Patient/72</a></p><p><b>dateTime</b>: 26/05/2016 12:41:10 AM</p><p><b>performer</b>: <a>Patient/72</a></p><p><b>organization</b>: <a>Organization/f001</a></p><p><b>policyRule</b>: opt-in <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'OPTIN' = 'opt-in)</span></p><blockquote><p><b>provision</b></p><p><b>period</b>: 10/10/2015 --&gt; 10/10/2016</p><h3>Actors</h3><table><tr><td>-</td><td><b>Role</b></td><td><b>Reference</b></td></tr><tr><td>*</td><td>primary information recipient <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ParticipationType code 'PRCP' = 'primary information recipient)</span></td><td><a>Practitioner/13</a></td></tr></table><h3>Provisions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>"
    },
    "identifier": [
      {
        "system": "urn:oid:2.16.840.1.113883.3.72.5.9.1",
        "value": "494e0c7a-a69e-4fb4-9d02-6aae747790d7"
      }
    ],
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
            "system": "http://terminology.hl7.org/CodeSystem/consentcategorycodes",
            "code": "npp"
          }
        ]
      }
    ],
    "patient": {
      "reference": "Patient/72"
    },
    "dateTime": "2016-05-26T00:41:10-04:00",
    "performer": [
      {
        "reference": "Patient/72"
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
        "start": "2015-10-10",
        "end": "2016-10-10"
      },
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
            "reference": "Practitioner/13"
          }
        }
      ],
      "provision": [
        {
          "type": "permit",
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "AUT"
                  }
                ]
              },
              "reference": {
                "reference": "Practitioner/xcda-author"
              }
            }
          ],
          "class": [
            {
              "system": "urn:ietf:bcp:13",
              "code": "application/hl7-cda+xml"
            }
          ],
          "code": [
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "34133-9"
                }
              ]
            },
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "18842-5"
                }
              ]
            }
          ]
        }
      ]
    }
  }