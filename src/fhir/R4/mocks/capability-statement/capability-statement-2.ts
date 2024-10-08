import { CapabilityStatement } from "../../types/capability-statement";

// https://hl7.org/fhir/R4/capabilitystatement-phr-example.json.html
// PHR Example

export const mockCapabilityStatement2: CapabilityStatement = {
    "resourceType": "CapabilityStatement",
    "id": "phr",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n     \n      <p>Prototype Capability Statement for September 2013 Connectathon</p>\n     \n      <p>The server offers read and search support on the following resource types:</p>\n     \n      <ul>\n      \n        <li>Patient</li>\n      \n        <li>DocumentReference</li>\n      \n        <li>Condition</li>\n      \n        <li>DiagnosticReport</li>\n    \n      </ul>\n    \n    </div>"
    },
    "name": "PHR Template",
    "status": "draft",
    "date": "2013-06-18",
    "publisher": "FHIR Project",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Prototype Capability Statement for September 2013 Connectathon",
    "kind": "capability",
    "software": {
      "name": "ACME PHR Server"
    },
    "fhirVersion": "4.0.1",
    "format": [
      "json",
      "xml"
    ],
    "rest": [
      {
        "mode": "server",
        "documentation": "Protoype server Capability Statement for September 2013 Connectathon",
        "security": {
          "service": [
            {
              "text": "OAuth"
            }
          ],
          "description": "We recommend that PHR servers use standard OAuth using a          standard 3rd party provider. We are not testing the ability to provide an          OAuth authentication/authorization service itself, and nor is providing          any security required for the connectathon at all"
        },
        "resource": [
          {
            "type": "Patient",
            "interaction": [
              {
                "code": "read"
              },
              {
                "code": "search-type",
                "documentation": "When a client searches patients with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required"
              }
            ]
          },
          {
            "type": "DocumentReference",
            "interaction": [
              {
                "code": "read"
              },
              {
                "code": "search-type"
              }
            ],
            "searchParam": [
              {
                "name": "_id",
                "type": "token",
                "documentation": "_id parameter always supported. For the connectathon, servers may elect which search parameters are supported"
              }
            ]
          },
          {
            "type": "Condition",
            "interaction": [
              {
                "code": "read"
              },
              {
                "code": "search-type"
              }
            ],
            "searchParam": [
              {
                "name": "_id",
                "type": "token",
                "documentation": "Standard _id parameter"
              }
            ]
          },
          {
            "type": "DiagnosticReport",
            "interaction": [
              {
                "code": "read"
              },
              {
                "code": "search-type"
              }
            ],
            "searchParam": [
              {
                "name": "_id",
                "type": "token",
                "documentation": "Standard _id parameter"
              },
              {
                "name": "service",
                "type": "token",
                "documentation": "which diagnostic discipline/department created the report"
              }
            ]
          }
        ]
      }
    ]
  }