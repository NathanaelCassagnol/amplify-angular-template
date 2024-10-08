import { CapabilityStatement } from "../../types/capability-statement";

// https://hl7.org/fhir/R4/capabilitystatement-base2.json.html
// Base Capability Statement

export const mockCapabilityStatement4: CapabilityStatement = {
    "resourceType" : "CapabilityStatement",
    "id" : "base2",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "url" : "http://hl7.org/fhir/CapabilityStatement/base2",
    "version" : "4.0.1",
    "name" : "Base FHIR Capability Statement (Empty)",
    "status" : "draft",
    "experimental" : true,
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "FHIR Project Team",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "This is the base Capability Statement for FHIR. It represents a server that provides the none of the functionality defined by FHIR. It is provided to use as a template for system designers to build their own Capability Statements from. A capability statement has to contain something, so this contains a read of a Capability Statement",
    "kind" : "capability",
    "software" : {
      "name" : "Insert your software name here..."
    },
    "fhirVersion" : "4.0.1",
    "format" : ["xml",
    "json"],
    "rest" : [{
      "mode" : "server",
      "documentation" : "An empty Capability Statement",
      "security" : {
        "cors" : true,
        "service" : [{
          "coding" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/restful-security-service",
            "code" : "SMART-on-FHIR",
            "display" : "SMART-on-FHIR"
          }],
          "text" : "See http://docs.smarthealthit.org/"
        }],
        "description" : "This is the Capability Statement to declare that the server supports SMART-on-FHIR. See the SMART-on-FHIR docs for the extension that would go with such a server"
      },
      "resource" : [{
        "type" : "CapabilityStatement",
        "interaction" : [{
          "code" : "read",
          "documentation" : "Read CapabilityStatement Resource"
        }]
      }]
    }]
  }