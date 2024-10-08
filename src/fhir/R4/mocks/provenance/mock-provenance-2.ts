import { Provenance } from "fhir/R4/types/provenance";

// https://hl7.org/fhir/R4/provenance-example-sig.json.html
// Provenance holding a signature

export const mockProvenance2: Provenance = {
    "resourceType": "Provenance",
    "id": "signature",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">procedure record authored on 27-June 2015 by Harold Hippocrates, MD Content extracted from Referral received 26-June</div>"
    },
    "target": [
      {
        "reference": "DocumentReference/example"
      }
    ],
    "recorded": "2015-08-27T08:39:24+10:00",
    "reason": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            "code": "TREAT",
            "display": "treatment"
          }
        ]
      }
    ],
    "activity": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-DocumentCompletion",
          "code": "AU",
          "display": "authenticated"
        }
      ]
    },
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
              "code": "VERF"
            }
          ]
        },
        "who": {
          "identifier": {
            "system": "urn:ietf:rfc:3986",
            "value": "mailto://hhd@ssa.gov"
          }
        }
      }
    ],
    "signature": [
      {
        "type": [
          {
            "system": "urn:iso-astm:E1762-95:2013",
            "code": "1.2.840.10065.1.12.1.5",
            "display": "Verification Signature"
          }
        ],
        "when": "2015-08-27T08:39:24+10:00",
        "who": {
          "reference": "Practitioner/xcda-author"
        },
        "targetFormat": "application/fhir+xml",
        "sigFormat": "application/signature+xml",
        "data": "Li4u"
      }
    ]
  }