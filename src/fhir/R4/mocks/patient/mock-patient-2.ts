import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-b.json.html
// Patient 2 for linking

export const mockPatient2: Patient = {
    "resourceType": "Patient",
    "id": "pat2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p>\n\t\t</div>"
    },
    "identifier": [
      {
        "use": "usual",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "MR"
            }
          ]
        },
        "system": "urn:oid:0.1.2.3.4.5.6.7",
        "value": "123456"
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "family": "Donald",
        "given": [
          "Duck",
          "D"
        ]
      }
    ],
    "gender": "other",
    "_gender": {
      "extension": [
        {
          "url": "http://example.org/Profile/administrative-status",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0001",
                "code": "A",
                "display": "Ambiguous"
              }
            ]
          }
        }
      ]
    },
    "photo": [
      {
        "contentType": "image/gif",
        "data": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
      }
    ],
    "managingOrganization": {
      "reference": "Organization/1",
      "display": "ACME Healthcare, Inc"
    },
    "link": [
      {
        "other": {
          "reference": "Patient/pat1"
        },
        "type": "seealso"
      }
    ]
  }