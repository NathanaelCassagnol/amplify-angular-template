import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/message-response-link.json.html
// A response to a request to link two patients

export const mockBundle3: Bundle = {
    "resourceType": "Bundle",
    "id": "3a0707d3-549e-4467-b8b8-5a2ab3800efe",
    "type": "message",
    "timestamp": "2015-07-14T11:15:33+10:00",
    "entry": [
      {
        "fullUrl": "urn:uuid:d9d296d8-5afd-42e1-a0ce-3344e0e003ed",
        "resource": {
          "resourceType": "MessageHeader",
          "id": "caf609cf-c3a7-4be3-a3aa-356b9bb69d4f",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n             \n            <p>This message is a request to link Patient records 654321 (Patient Donald DUCK @ Acme Healthcare, Inc) and 123456 (Patient Donald D DUCK @ Acme Healthcare, Inc)</p>\n           \n          </div>"
          },
          "eventCoding": {
            "system": "http://example.org/fhir/message-events",
            "code": "patient-link"
          },
          "source": {
            "endpoint": "http://acme.com/ehr/fhir"
          },
          "response": {
            "identifier": "efdd254b-0e09-4164-883e-35cf3871715f",
            "code": "ok",
            "details": {
              "reference": "OperationOutcome/03f9aa7d-b395-47b9-84e0-053678b6e4e3"
            }
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
        "fullUrl": "urn:uuid:03f9aa7d-b395-47b9-84e0-053678b6e4e3",
        "resource": {
          "resourceType": "OperationOutcome",
          "id": "03f9aa7d-b395-47b9-84e0-053678b6e4e3",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            MPI approval rating: 80%\n          </div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "text": "MPI approval rating: 80%"
              }
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
          },
          "link": [
            {
              "other": {
                "reference": "Patient/pat2"
              },
              "type": "seealso"
            }
          ]
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
      }
    ]
  }