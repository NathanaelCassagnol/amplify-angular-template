import { DocumentManifest } from "fhir/R4/types/document-manifest";

// https://hl7.org/fhir/R4/documentmanifest-fm-attachment.json.html
// Example of FM attachment

export const mockDocumentManifest2: DocumentManifest = {
    "resourceType": "DocumentManifest",
    "id": "654789",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">A Financial Management Attachment example</div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "org-1",
        "identifier": [
          {
            "system": "http://nationalidentifiers.org/insurers",
            "value": "52345"
          }
        ]
      },
      {
        "resourceType": "DocumentReference",
        "id": "a1",
        "status": "current",
        "content": [
          {
            "attachment": {
              "contentType": "application/pdf",
              "data": "SGVsbG8=",
              "title": "accident notes 20100201.pdf",
              "creation": "2010-02-01T11:50:23-05:00"
            }
          }
        ]
      },
      {
        "resourceType": "DocumentReference",
        "id": "a2",
        "status": "current",
        "content": [
          {
            "attachment": {
              "contentType": "application/pdf",
              "url": "http://happyvalley.com/docs/AB12345",
              "size": 104274,
              "hash": "SGVsbG8gdGhlcmU=",
              "creation": "2010-02-01T10:57:34+01:00"
            }
          }
        ]
      }
    ],
    "identifier": [
      {
        "system": "http://happyvalley.com/supportingdocumentation",
        "value": "52345"
      }
    ],
    "status": "current",
    "created": "2014-09-21T11:50:23-05:00",
    "recipient": [
      {
        "reference": "#org-1"
      }
    ],
    "content": [
      {
        "reference": "#a1"
      },
      {
        "reference": "#a2"
      },
      {
        "reference": "DocumentReference/example"
      },
      {
        "reference": "DiagnosticReport/f001"
      }
    ],
    "related": [
      {
        "identifier": {
          "system": "http://happyvalley.com/claim",
          "value": "12345"
        }
      },
      {
        "identifier": {
          "system": "http://www.BenefitsInc.com/fhir/remittance",
          "value": "R3500"
        }
      }
    ]
  }