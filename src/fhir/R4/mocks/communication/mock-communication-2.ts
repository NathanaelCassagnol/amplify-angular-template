import { Communication } from "fhir/R4/types/communication";

// https://hl7.org/fhir/R4/communication-example-fm-solicited-attachment.json.html
// An example of a response to a request for additional information

export const mockCommunication2: Communication = {
    "resourceType": "Communication",
    "id": "fm-solicited",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Attachment in response to a Request</div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "provider",
        "identifier": [
          {
            "system": "http://www.jurisdiction.com/provideroffices",
            "value": "3456"
          }
        ]
      },
      {
        "resourceType": "Organization",
        "id": "payor",
        "identifier": [
          {
            "system": "http://www.jurisdiction.com/insurer",
            "value": "123456"
          }
        ]
      },
      {
        "resourceType": "CommunicationRequest",
        "id": "request",
        "identifier": [
          {
            "system": "http://www.jurisdiction.com/insurer/123456",
            "value": "ABC123"
          }
        ],
        "status": "completed",
        "subject": {
          "reference": "Patient/1"
        }
      }
    ],
    "identifier": [
      {
        "system": "http://www.providerco.com/communication",
        "value": "12345"
      }
    ],
    "basedOn": [
      {
        "reference": "#request"
      }
    ],
    "status": "completed",
    "category": [
      {
        "coding": [
          {
            "system": "http://acme.org/messagetypes",
            "code": "SolicitedAttachment"
          }
        ]
      }
    ],
    "subject": {
      "reference": "Patient/1"
    },
    "sent": "2016-06-12T18:01:10-08:00",
    "recipient": [
      {
        "reference": "#payor"
      }
    ],
    "sender": {
      "reference": "#provider"
    },
    "payload": [
      {
        "contentAttachment": {
          "contentType": "application/pdf",
          "data": "SGVsbG8=",
          "title": "accident notes 20100201.pdf",
          "creation": "2010-02-01T11:50:23-05:00"
        }
      },
      {
        "contentAttachment": {
          "contentType": "application/pdf",
          "url": "http://happyvalley.com/docs/AB12345",
          "size": 104274,
          "hash": "SGVsbG8gdGhlcmU=",
          "creation": "2010-02-01T10:57:34+01:00"
        }
      }
    ]
  }