import { DocumentManifest } from "fhir/R4/types/document-manifest";

// https://hl7.org/fhir/R4/documentmanifest-example.json.html
// XDS SubmissionSet example

export const mockDocumentManifest1: DocumentManifest = {
    "resourceType": "DocumentManifest",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Text</div>"
    },
    "contained": [
      {
        "resourceType": "Practitioner",
        "id": "a1",
        "name": [
          {
            "family": "Dopplemeyer",
            "given": [
              "Sherry"
            ]
          }
        ],
        "telecom": [
          {
            "system": "email",
            "value": "john.doe@healthcare.example.org"
          }
        ]
      }
    ],
    "masterIdentifier": {
      "system": "http://example.org/documents",
      "value": "23425234234-2346"
    },
    "identifier": [
      {
        "system": "http://example.org/documents",
        "value": "23425234234-2347"
      }
    ],
    "status": "current",
    "type": {
      "text": "History and Physical"
    },
    "subject": {
      "reference": "Patient/xcda"
    },
    "created": "2004-12-25T23:50:50-05:00",
    "author": [
      {
        "reference": "#a1"
      }
    ],
    "recipient": [
      {
        "reference": "Practitioner/xcda1"
      }
    ],
    "source": "urn:oid:1.3.6.1.4.1.21367.2009.1.2.1",
    "description": "Physical",
    "content": [
      {
        "reference": "DocumentReference/example"
      }
    ],
    "related": [
      {
        "identifier": {
          "system": "http://example.org/documents",
          "value": "23425234234-9999"
        },
        "ref": {
          "reference": "DocumentReference/example"
        }
      }
    ]
  }