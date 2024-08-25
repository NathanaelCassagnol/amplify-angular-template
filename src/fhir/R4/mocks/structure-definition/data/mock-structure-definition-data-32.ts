import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/range.profile.json.html
// StructureDefinition for Range

export const mockStructureDefinitionData32: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Range",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/Range",
    "version" : "4.0.1",
    "name" : "Range",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Range Type: A set of ordered Quantities defined by a low and high limit.",
    "purpose" : "Need to be able to specify ranges of values.",
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
    "type" : "Range",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Range",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Range",
        "short" : "Set of values bounded by low and high",
        "definition" : "A set of ordered Quantities defined by a low and high limit.",
        "comment" : "The stated low and high value are assumed to have arbitrarily high precision when it comes to determining which values are in the range. I.e. 1.99 is not in the range 2 -> 3.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Range",
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
          "key" : "rng-2",
          "severity" : "error",
          "human" : "If present, low SHALL have a lower value than high",
          "expression" : "low.empty() or high.empty() or (low <= high)",
          "xpath" : "not(exists(f:low/f:value/@value)) or not(exists(f:high/f:value/@value)) or (number(f:low/f:value/@value) <= number(f:high/f:value/@value))"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "v2",
          "map" : "NR and also possibly SN (but see also quantity)"
        },
        {
          "identity" : "rim",
          "map" : "IVL<QTY[not(type=\"TS\")]> [lowClosed=\"true\" and highClosed=\"true\"]or URG<QTY[not(type=\"TS\")]>"
        }]
      },
      {
        "id" : "Range.id",
        "path" : "Range.id",
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
        "id" : "Range.extension",
        "path" : "Range.extension",
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
        "id" : "Range.low",
        "path" : "Range.low",
        "short" : "Low limit",
        "definition" : "The low limit. The boundary is inclusive.",
        "comment" : "If the low element is missing, the low boundary is not known.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Range.low",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
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
          "identity" : "v2",
          "map" : "NR.1"
        },
        {
          "identity" : "rim",
          "map" : "./low"
        }]
      },
      {
        "id" : "Range.high",
        "path" : "Range.high",
        "short" : "High limit",
        "definition" : "The high limit. The boundary is inclusive.",
        "comment" : "If the high element is missing, the high boundary is not known.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Range.high",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
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
          "identity" : "v2",
          "map" : "NR.2"
        },
        {
          "identity" : "rim",
          "map" : "./high"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Range",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Range",
        "short" : "Set of values bounded by low and high",
        "definition" : "A set of ordered Quantities defined by a low and high limit.",
        "comment" : "The stated low and high value are assumed to have arbitrarily high precision when it comes to determining which values are in the range. I.e. 1.99 is not in the range 2 -> 3.",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "rng-2",
          "severity" : "error",
          "human" : "If present, low SHALL have a lower value than high",
          "expression" : "low.empty() or high.empty() or (low <= high)",
          "xpath" : "not(exists(f:low/f:value/@value)) or not(exists(f:high/f:value/@value)) or (number(f:low/f:value/@value) <= number(f:high/f:value/@value))"
        }],
        "mapping" : [{
          "identity" : "v2",
          "map" : "NR and also possibly SN (but see also quantity)"
        },
        {
          "identity" : "rim",
          "map" : "IVL<QTY[not(type=\"TS\")]> [lowClosed=\"true\" and highClosed=\"true\"]or URG<QTY[not(type=\"TS\")]>"
        }]
      },
      {
        "id" : "Range.low",
        "path" : "Range.low",
        "short" : "Low limit",
        "definition" : "The low limit. The boundary is inclusive.",
        "comment" : "If the low element is missing, the low boundary is not known.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "NR.1"
        },
        {
          "identity" : "rim",
          "map" : "./low"
        }]
      },
      {
        "id" : "Range.high",
        "path" : "Range.high",
        "short" : "High limit",
        "definition" : "The high limit. The boundary is inclusive.",
        "comment" : "If the high element is missing, the high boundary is not known.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Quantity",
          "profile" : ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"]
        }],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "NR.2"
        },
        {
          "identity" : "rim",
          "map" : "./high"
        }]
      }]
    }
  }