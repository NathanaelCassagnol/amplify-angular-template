import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/ratio.profile.json.html
// StructureDefinition for Ratio

export const mockStructureDefinitionData33: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Ratio",
    "meta" : {
      "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
    },
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "normative"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      "valueCode" : "4.0.0"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/Ratio",
    "version" : "4.0.1",
    "name" : "Ratio",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Ratio Type: A relationship of two Quantity values - expressed as a numerator and a denominator.",
    "purpose" : "Need to able to capture ratios for some measurements (titers) and some rates (costs).",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    },
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Ratio",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Ratio",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Ratio",
        "short" : "A ratio of two Quantity values - a numerator and a denominator",
        "definition" : "A relationship of two Quantity values - expressed as a numerator and a denominator.",
        "comment" : "The Ratio datatype should only be used to express a relationship of two numbers if the relationship cannot be suitably expressed using a Quantity and a common unit.  Where the denominator value is known to be fixed to \"1\", Quantity should be used instead of Ratio.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Ratio",
          "min" : 0,
          "max" : "*"
        },
        "condition" : ["ele-1"],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "rat-1",
          "severity" : "error",
          "human" : "Numerator and denominator SHALL both be present, or both are absent. If both are absent, there SHALL be some extension present",
          "expression" : "(numerator.empty() xor denominator.exists()) and (numerator.exists() or extension.exists())",
          "xpath" : "(count(f:numerator) = count(f:denominator)) and ((count(f:numerator) > 0) or (count(f:extension) > 0))"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "v2",
          "map" : "N/A"
        },
        {
          "identity" : "rim",
          "map" : "RTO"
        }]
      },
      {
        "id" : "Ratio.id",
        "path" : "Ratio.id",
        "representation" : ["xmlAttr"],
        "short" : "Unique id for inter-element referencing",
        "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Element.id",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "string"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Ratio.extension",
        "path" : "Ratio.extension",
        "slicing" : {
          "discriminator" : [{
            "type" : "value",
            "path" : "url"
          }],
          "description" : "Extensions are always sliced by (at least) url",
          "rules" : "open"
        },
        "short" : "Additional content defined by implementations",
        "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
        "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
        "alias" : ["extensions",
        "user content"],
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Element.extension",
          "min" : 0,
          "max" : "*"
        },
        "type" : [{
          "code" : "Extension"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "ext-1",
          "severity" : "error",
          "human" : "Must have either extensions or value[x], not both",
          "expression" : "extension.exists() != value.exists()",
          "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
          "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
        }],
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        }]
      },
      {
        "id" : "Ratio.numerator",
        "path" : "Ratio.numerator",
        "short" : "Numerator value",
        "definition" : "The value of the numerator.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Ratio.numerator",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : ".numerator"
        }]
      },
      {
        "id" : "Ratio.denominator",
        "path" : "Ratio.denominator",
        "short" : "Denominator value",
        "definition" : "The value of the denominator.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Ratio.denominator",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : false,
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : ".denominator"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Ratio",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Ratio",
        "short" : "A ratio of two Quantity values - a numerator and a denominator",
        "definition" : "A relationship of two Quantity values - expressed as a numerator and a denominator.",
        "comment" : "The Ratio datatype should only be used to express a relationship of two numbers if the relationship cannot be suitably expressed using a Quantity and a common unit.  Where the denominator value is known to be fixed to \"1\", Quantity should be used instead of Ratio.",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "rat-1",
          "severity" : "error",
          "human" : "Numerator and denominator SHALL both be present, or both are absent. If both are absent, there SHALL be some extension present",
          "expression" : "(numerator.empty() xor denominator.exists()) and (numerator.exists() or extension.exists())",
          "xpath" : "(count(f:numerator) = count(f:denominator)) and ((count(f:numerator) > 0) or (count(f:extension) > 0))"
        }],
        "mapping" : [{
          "identity" : "v2",
          "map" : "N/A"
        },
        {
          "identity" : "rim",
          "map" : "RTO"
        }]
      },
      {
        "id" : "Ratio.numerator",
        "path" : "Ratio.numerator",
        "short" : "Numerator value",
        "definition" : "The value of the numerator.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : ".numerator"
        }]
      },
      {
        "id" : "Ratio.denominator",
        "path" : "Ratio.denominator",
        "short" : "Denominator value",
        "definition" : "The value of the denominator.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity"
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "rim",
          "map" : ".denominator"
        }]
      }]
    }
  }