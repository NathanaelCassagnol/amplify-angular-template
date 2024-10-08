import { Basic } from "fhir/R4/types/basic";

// https://hl7.org/fhir/R4/basic-example.json.html
// How 'basic' can be used for future resources - in this case referral

export const mockBasic1: Basic = {
    "resourceType": "Basic",
    "id": "referral",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p><b>Patient:</b>Roel</p>\n      <p><b>Requestor:</b>Dokter Bronsig</p>\n      <p><b>Type:</b>Consultation</p>\n      <p><b>Target Date:</b>April 1 - April 31</p>\n      <p>COMPLETED</p>\n      <b>The patient had fever peaks over the last couple of days. He is worried about these peaks.</b>\n    </div>"
    },
    "extension": [
      {
        "url": "http://example.org/do-not-use/fhir-extensions/referral#requestingPractitioner",
        "valueReference": {
          "reference": "Practitioner/f201",
          "display": "Dokter Bronsig"
        }
      },
      {
        "url": "http://example.org/do-not-use/fhir-extensions/referral#notes",
        "valueString": "The patient had fever peaks over the last couple of days. He is worried about these peaks."
      },
      {
        "url": "http://example.org/do-not-use/fhir-extensions/referral#fulfillingEncounter",
        "valueReference": {
          "reference": "Encounter/f201"
        }
      }
    ],
    "modifierExtension": [
      {
        "url": "http://example.org/do-not-use/fhir-extensions/referral#referredForService",
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "11429006",
              "display": "Consultation"
            }
          ]
        }
      },
      {
        "url": "http://example.org/do-not-use/fhir-extensions/referral#targetDate",
        "valuePeriod": {
          "start": "2013-04-01",
          "end": "2013-04-15"
        }
      },
      {
        "url": "http://example.org/do-not-use/fhir-extensions/referral#status",
        "valueCode": "complete"
      }
    ],
    "identifier": [
      {
        "system": "http://goodhealth.org/basic/identifiers",
        "value": "19283746"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/basic-resource-type",
          "code": "referral"
        }
      ]
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "created": "2013-05-14",
    "author": {
      "reference": "Practitioner/example"
    }
  }