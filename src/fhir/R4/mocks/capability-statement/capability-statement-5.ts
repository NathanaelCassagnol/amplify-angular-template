import { CapabilityStatement } from "../../types/capability-statement";

// https://hl7.org/fhir/R4/capabilitystatement-terminology-server.json.html
// Terminology Server Base Capability Statement

export const mockCapabilityStatement5: CapabilityStatement = {
    "resourceType": "CapabilityStatement",
    "id": "terminology-server",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>Terminology Service Capability Statement</h2>\n      <div>\n        <p>Basic capability statement for a Terminology Server. A server can support more fucntionality than defined here, but this is the minimum amount</p>\n\n      </div>\n      <table>\n        <tr>\n          <td>Mode</td>\n          <td>SERVER</td>\n        </tr>\n        <tr>\n          <td>Description</td>\n          <td>RESTful Terminology Server</td>\n        </tr>\n        <tr>\n          <td>Transaction</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System History</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System Search</td>\n          <td/>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <th>\n            <b>Resource Type</b>\n          </th>\n          <th>\n            <b>Profile</b>\n          </th>\n          <th>\n            <b title=\"GET a resource (read interaction)\">Read</b>\n          </th>\n          <th>\n            <b title=\"GET all set of resources of the type (search interaction)\">Search</b>\n          </th>\n          <th>\n            <b title=\"PUT a new resource version (update interaction)\">Update</b>\n          </th>\n          <th>\n            <b title=\"POST a new resource (create interaction)\">Create</b>\n          </th>\n        </tr>\n        <tr>\n          <td>ValueSet</td>\n          <td>\n            <a href=\"StructureDefinition/ValueSet\">StructureDefinition/ValueSet</a>\n          </td>\n          <td>y</td>\n          <td>y</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ConceptMap</td>\n          <td>\n            <a href=\"StructureDefinition/ConceptMap\">StructureDefinition/ConceptMap</a>\n          </td>\n          <td>y</td>\n          <td>y</td>\n          <td/>\n          <td/>\n        </tr>\n      </table>\n    </div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-supported-system",
        "valueUri": "http://loinc.org"
      }
    ],
    "url": "http://hl7.org/fhir/terminology-server",
    "version": "4.0.1",
    "name": "Terminology Service Capability Statement",
    "status": "draft",
    "date": "2015-07-05",
    "publisher": "HL7, Inc",
    "contact": [
      {
        "name": "FHIR Project",
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Basic capability statement for a Terminology Server. A server can support more fucntionality than defined here, but this is the minimum amount",
    "kind": "capability",
    "software": {
      "name": "ACME Terminology Server"
    },
    "fhirVersion": "4.0.1",
    "format": [
      "json",
      "xml"
    ],
    "rest": [
      {
        "mode": "server",
        "documentation": "RESTful Terminology Server",
        "security": {
          "cors": true,
          "service": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/restful-security-service",
                  "code": "Certificates"
                }
              ]
            }
          ]
        },
        "resource": [
          {
            "type": "ValueSet",
            "profile": "StructureDefinition/ValueSet",
            "interaction": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                    "valueCode": "SHALL"
                  }
                ],
                "code": "read",
                "documentation": "Read allows clients to get the logical definitions of the value sets"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                    "valueCode": "SHALL"
                  }
                ],
                "code": "search-type",
                "documentation": "Search allows clients to find value sets on the server"
              }
            ],
            "searchParam": [
              {
                "name": "date",
                "definition": "http://hl7.org/fhir/SearchParameter/ValueSet-date",
                "type": "date"
              },
              {
                "name": "name",
                "definition": "http://hl7.org/fhir/SearchParameter/ValueSet-name",
                "type": "string"
              },
              {
                "name": "reference",
                "definition": "http://hl7.org/fhir/SearchParameter/ValueSet-reference",
                "type": "token"
              },
              {
                "name": "status",
                "definition": "http://hl7.org/fhir/SearchParameter/ValueSet-status",
                "type": "token"
              },
              {
                "name": "url",
                "definition": "http://hl7.org/fhir/SearchParameter/ValueSet-url",
                "type": "uri"
              },
              {
                "name": "version",
                "definition": "http://hl7.org/fhir/SearchParameter/ValueSet-version",
                "type": "token"
              }
            ]
          },
          {
            "type": "ConceptMap",
            "profile": "StructureDefinition/ConceptMap",
            "interaction": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                    "valueCode": "SHALL"
                  }
                ],
                "code": "read",
                "documentation": "Read allows clients to get the logical definitions of the concept maps"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                    "valueCode": "SHALL"
                  }
                ],
                "code": "search-type",
                "documentation": "Search allows clients to find concept maps on the server"
              }
            ],
            "searchParam": [
              {
                "name": "date",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-date",
                "type": "date"
              },
              {
                "name": "name",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-name",
                "type": "string"
              },
              {
                "name": "status",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-status",
                "type": "token"
              },
              {
                "name": "source",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-source",
                "type": "uri"
              },
              {
                "name": "target",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-target",
                "type": "uri"
              },
              {
                "name": "url",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-url",
                "type": "uri"
              },
              {
                "name": "version",
                "definition": "http://hl7.org/fhir/SearchParameter/ConceptMap-version",
                "type": "token"
              }
            ]
          }
        ],
        "operation": [
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                "valueCode": "SHALL"
              }
            ],
            "name": "expand",
            "definition": "OperationDefinition/ValueSet-expand"
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                "valueCode": "SHALL"
              }
            ],
            "name": "lookup",
            "definition": "OperationDefinition/CodeSystem-lookup"
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                "valueCode": "SHALL"
              }
            ],
            "name": "validate-code",
            "definition": "OperationDefinition/ValueSet-validate-code"
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                "valueCode": "SHALL"
              }
            ],
            "name": "translate",
            "definition": "OperationDefinition/ConceptMap-translate"
          },
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                "valueCode": "SHOULD"
              }
            ],
            "name": "closure",
            "definition": "OperationDefinition/ConceptMap-closure"
          }
        ]
      }
    ]
  }