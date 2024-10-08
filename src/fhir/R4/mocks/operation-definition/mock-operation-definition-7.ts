import { OperationDefinition } from "fhir/R4/types/operation-definition";

// https://hl7.org/fhir/R4/operation-library-data-requirements.json.html
// Operation Definition

export const mockOperationDefinition7: OperationDefinition = {
    "resourceType" : "OperationDefinition",
    "id" : "Library-data-requirements",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 2
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "trial-use"
    }],
    "url" : "http://hl7.org/fhir/OperationDefinition/Library-data-requirements",
    "version" : "4.0.1",
    "name" : "Data Requirements",
    "status" : "draft",
    "kind" : "operation",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 (FHIR Project)",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      },
      {
        "system" : "email",
        "value" : "fhir@lists.hl7.org"
      }]
    }],
    "description" : "The data-requirements operation aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition",
    "code" : "data-requirements",
    "comment" : "The effect of invoking this operation is to determine the aggregate set of data requirements and dependencies for a given target resource. The result is a Library resource with a type of module-definition that contains all the parameter definitions and data requirements of the target resource and any libraries referenced by it. Implementations SHOULD aggregate data requirements intelligently (i.e. by collapsing overlapping data requirements)",
    "resource" : ["Library"],
    "system" : true,
    "type" : false,
    "instance" : true,
    "parameter" : [{
      "name" : "target",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The target of the data requirements operation",
      "type" : "string"
    },
    {
      "name" : "return",
      "use" : "out",
      "min" : 1,
      "max" : "1",
      "documentation" : "The result of the requirements gathering",
      "type" : "Library"
    }]
  }