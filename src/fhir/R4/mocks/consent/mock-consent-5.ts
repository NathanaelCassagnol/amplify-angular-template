import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-notTime.json.html
// Withhold or withdraw consent for disclosure of a specific timeframe

export const mockConsent5: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-notTime",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 6. Withhold or withdraw consent for disclosure of records related published during a timeframe\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to withhold disclosure of all data from a timeframe to any provider. \n   </p>\n   </div>"
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
      "period": {
        "start": "2015-01-01",
        "end": "2015-02-01"
      }
    }
  }