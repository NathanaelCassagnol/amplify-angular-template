import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/period.profile.json.html
// StructureDefinition for Period

export const mockStructureDefinitionData27: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Period",
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
    "url" : "http://hl7.org/fhir/StructureDefinition/Period",
    "version" : "4.0.1",
    "name" : "Period",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Period Type: A time period defined by a start and end date and optionally time.",
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
    "type" : "Period",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Period",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Period",
        "short" : "Time range defined by start and end date/time",
        "definition" : "A time period defined by a start and end date and optionally time.",
        "comment" : "A Period specifies a range of time; the context of use will specify whether the entire range applies (e.g. \"the patient was an inpatient of the hospital for this time range\") or one value from the range applies (e.g. \"give to the patient between these two times\").\n\nPeriod is not used for a duration (a measure of elapsed time). See [Duration](datatypes.html#Duration).",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Period",
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
          "key" : "per-1",
          "severity" : "error",
          "human" : "If present, start SHALL have a lower value than end",
          "expression" : "start.hasValue().not() or end.hasValue().not() or (start <= end)",
          "xpath" : "not(exists(f:start/@value)) or not(exists(f:end/@value)) or (xs:dateTime(f:start/@value) <= xs:dateTime(f:end/@value))"
        }],
        "isModifier" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "n/a"
        },
        {
          "identity" : "v2",
          "map" : "DR"
        },
        {
          "identity" : "rim",
          "map" : "IVL<TS>[lowClosed=\"true\" and highClosed=\"true\"] or URG<TS>[lowClosed=\"true\" and highClosed=\"true\"]"
        }]
      },
      {
        "id" : "Period.id",
        "path" : "Period.id",
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
        "id" : "Period.extension",
        "path" : "Period.extension",
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
        "id" : "Period.start",
        "path" : "Period.start",
        "short" : "Starting time with inclusive boundary",
        "definition" : "The start of the period. The boundary is inclusive.",
        "comment" : "If the low element is missing, the meaning is that the low boundary is not known.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Period.start",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "dateTime"
        }],
        "condition" : ["per-1"],
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
          "map" : "DR.1"
        },
        {
          "identity" : "rim",
          "map" : "./low"
        }]
      },
      {
        "id" : "Period.end",
        "path" : "Period.end",
        "short" : "End time with inclusive boundary, if not ongoing",
        "definition" : "The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
        "comment" : "The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Period.end",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "dateTime"
        }],
        "meaningWhenMissing" : "If the end of the period is missing, it means that the period is ongoing",
        "condition" : ["per-1"],
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
          "map" : "DR.2"
        },
        {
          "identity" : "rim",
          "map" : "./high"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Period",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "normative"
        },
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
          "valueCode" : "4.0.0"
        }],
        "path" : "Period",
        "short" : "Time range defined by start and end date/time",
        "definition" : "A time period defined by a start and end date and optionally time.",
        "comment" : "A Period specifies a range of time; the context of use will specify whether the entire range applies (e.g. \"the patient was an inpatient of the hospital for this time range\") or one value from the range applies (e.g. \"give to the patient between these two times\").\n\nPeriod is not used for a duration (a measure of elapsed time). See [Duration](datatypes.html#Duration).",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "per-1",
          "severity" : "error",
          "human" : "If present, start SHALL have a lower value than end",
          "expression" : "start.hasValue().not() or end.hasValue().not() or (start <= end)",
          "xpath" : "not(exists(f:start/@value)) or not(exists(f:end/@value)) or (xs:dateTime(f:start/@value) <= xs:dateTime(f:end/@value))"
        }],
        "mapping" : [{
          "identity" : "v2",
          "map" : "DR"
        },
        {
          "identity" : "rim",
          "map" : "IVL<TS>[lowClosed=\"true\" and highClosed=\"true\"] or URG<TS>[lowClosed=\"true\" and highClosed=\"true\"]"
        }]
      },
      {
        "id" : "Period.start",
        "path" : "Period.start",
        "short" : "Starting time with inclusive boundary",
        "definition" : "The start of the period. The boundary is inclusive.",
        "comment" : "If the low element is missing, the meaning is that the low boundary is not known.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "dateTime"
        }],
        "condition" : ["per-1"],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "DR.1"
        },
        {
          "identity" : "rim",
          "map" : "./low"
        }]
      },
      {
        "id" : "Period.end",
        "path" : "Period.end",
        "short" : "End time with inclusive boundary, if not ongoing",
        "definition" : "The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
        "comment" : "The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "dateTime"
        }],
        "meaningWhenMissing" : "If the end of the period is missing, it means that the period is ongoing",
        "condition" : ["per-1"],
        "isSummary" : true,
        "mapping" : [{
          "identity" : "v2",
          "map" : "DR.2"
        },
        {
          "identity" : "rim",
          "map" : "./high"
        }]
      }]
    }
  }