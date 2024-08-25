import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-response.json.html
// Response for the example transaction

export const mockBundle6: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-response",
    "meta": {
      "lastUpdated": "2014-08-18T01:43:33Z"
    },
    "type": "transaction-response",
    "entry": [
      {
        "fullUrl": "http://example.org/fhir/Patient/12423",
        "resource": {
          "resourceType": "Patient",
          "id": "12423",
          "meta": {
            "versionId": "1",
            "lastUpdated": "2014-08-18T01:43:31Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Some narrative</div>"
          },
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Chalmers",
              "given": [
                "Peter",
                "James"
              ]
            }
          ],
          "gender": "male",
          "birthDate": "1974-12-25"
        },
        "response": {
          "status": "201 Created",
          "location": "Patient/12423/_history/1",
          "etag": "W/\"1\"",
          "lastModified": "2014-08-18T01:43:33Z",
          "outcome": {
            "resourceType": "OperationOutcome",
            "issue": [
              {
                "severity": "warning",
                "code": "not-found",
                "details": {
                  "text": "The Managing organization was not known and was deleted"
                },
                "expression": [
                  "Patient.managingOrganization"
                ]
              }
            ]
          }
        }
      },
      {
        "response": {
          "status": "200 OK"
        }
      },
      {
        "response": {
          "status": "200 OK",
          "location": "Patient/123/_history/4",
          "etag": "W/\"4\""
        }
      },
      {
        "response": {
          "status": "201 Created",
          "location": "Patient/12424/_history/1",
          "etag": "W/\"1\""
        }
      },
      {
        "response": {
          "status": "200 ok",
          "location": "Patient/123a/_history/3",
          "etag": "W/\"3\""
        }
      },
      {
        "response": {
          "status": "202 Accepted"
        }
      },
      {
        "response": {
          "status": "DELETE"
        }
      },
      {
        "fullUrl": "urn:uuid:7f9724ed-ef8d-4434-aacb-41869db83233",
        "resource": {
          "resourceType": "Parameters",
          "parameter": [
            {
              "name": "name",
              "valueString": "LOINC"
            }
          ]
        },
        "response": {
          "status": "200 ok"
        }
      },
      {
        "fullUrl": "urn:uuid:e7bcef8e-5ef9-4d2b-87d5-b42b1eec9125",
        "resource": {
          "resourceType": "Bundle",
          "id": "fb6ed6cb-324e-4588-87cd-0c92c68986ca",
          "type": "searchset"
        },
        "response": {
          "status": "200 OK"
        }
      },
      {
        "response": {
          "status": "304 Not Modified"
        }
      }
    ]
  }