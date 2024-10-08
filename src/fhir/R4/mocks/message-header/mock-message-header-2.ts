import { Bundle } from "fhir/R4/types/bundle.types";

// https://hl7.org/fhir/R4/message-request-link.json.html
// A request to link two patients

export const mockMessageHeader2Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "10bb101f-a121-4264-a920-67be9cb82c74",
    "type": "message",
    "timestamp": "2015-07-14T11:15:33+10:00",
    "entry": [
      {
        "fullUrl": "urn:uuid:267b18ce-3d37-4581-9baa-6fada338038b",
        "resource": {
          "resourceType": "MessageHeader",
          "id": "267b18ce-3d37-4581-9baa-6fada338038b",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n             \n            <p>This message is a request to link Patient records 654321 (Patient Donald DUCK @ Acme Healthcare, Inc) and 123456 (Patient Donald D DUCK @ Acme Healthcare, Inc)</p>\n           \n          </div>"
          },
          "eventCoding": {
            "system": "http://example.org/fhir/message-events",
            "code": "patient-link"
          },
          "source": {
            "endpoint": "http://example.org/clients/ehr-lite"
          },
          "responsible": {
            "reference": "http://acme.com/ehr/fhir/Practitioner/2323-33-4"
          },
          "focus": [
            {
              "reference": "http://acme.com/ehr/fhir/Patient/pat1"
            },
            {
              "reference": "http://acme.com/ehr/fhir/Patient/pat12"
            }
          ]
        }
      },
      {
        "fullUrl": "http://acme.com/ehr/fhir/Patient/pat1",
        "resource": {
          "resourceType": "Patient",
          "id": "pat1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            \n            <p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p>\n          \n          </div>"
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
              "value": "654321"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Donald",
              "given": [
                "Duck"
              ]
            }
          ],
          "gender": "male",
          "contact": [
            {
              "relationship": [
                {
                  "coding": [
                    {
                      "system": "http://example.org/fhir/CodeSystem/patient-contact-relationship",
                      "code": "E"
                    }
                  ]
                }
              ],
              "organization": {
                "reference": "Organization/1",
                "display": "Walt Disney Corporation"
              }
            }
          ],
          "managingOrganization": {
            "reference": "Organization/1",
            "display": "ACME Healthcare, Inc"
          }
        }
      },
      {
        "fullUrl": "http://acme.com/ehr/fhir/Patient/pat12",
        "resource": {
          "resourceType": "Patient",
          "id": "pat2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            \n            <p>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</p>\n          \n          </div>"
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
          "managingOrganization": {
            "reference": "Organization/1",
            "display": "ACME Healthcare, Inc"
          }
        }
      }
    ]
  }