import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/age.profile.json.html
// StructureDefinition for Age

export const mockStructureDefinitionData2: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Age",
    "meta" : {
      "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
    },
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "trial-use"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/Age",
    "version" : "4.0.1",
    "name" : "Age",
    "status" : "draft",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "HL7 FHIR Standard",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    }],
    "description" : "Base StructureDefinition for Age Type: A duration of time during which an organism (or a process) has existed.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    },
    {
      "identity" : "v2",
      "uri" : "http://hl7.org/v2",
      "name" : "HL7 v2 Mapping"
    }],
    "kind" : "complex-type",
    "abstract" : false,
    "type" : "Age",
    "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Quantity",
    "derivation" : "specialization",
    "snapshot" : {
      "element" : [{
        "id" : "Age",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "Age",
        "short" : "A duration of time during which an organism (or a process) has existed",
        "definition" : "A duration of time during which an organism (or a process) has existed.",
        "comment" : "The context of use may frequently define what kind of quantity this is and therefore what kind of units can be used. The context of use may also restrict the values for the comparator.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Age",
          "min" : 0,
          "max" : "*"
        },
        "constraint" : [{
          "key" : "age-1",
          "severity" : "error",
          "human" : "There SHALL be a code if there is a value and it SHALL be an expression of time.  If system is present, it SHALL be UCUM.  If value is present, it SHALL be positive.",
          "expression" : "(code.exists() or value.empty()) and (system.empty() or system = %ucum) and (value.empty() or value.hasValue().not() or value > 0)",
          "xpath" : "(f:code or not(f:value)) and (not(exists(f:system)) or f:system/@value='http://unitsofmeasure.org') and (not(f:value/@value) or f:value/@value >=0)"
        },
        {
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        },
        {
          "key" : "qty-3",
          "severity" : "error",
          "human" : "If a code for the unit is present, the system SHALL also be present",
          "expression" : "code.empty() or system.exists()",
          "xpath" : "not(exists(f:code)) or exists(f:system)",
          "source" : "http://hl7.org/fhir/StructureDefinition/Quantity"
        }],
        "isModifier" : false,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            "valueCanonical" : "http://hl7.org/fhir/ValueSet/all-time-units"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "AgeUnits"
          }],
          "strength" : "extensible",
          "description" : "Appropriate units for Age.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/age-units"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "SN (see also Range) or CQ"
        },
        {
          "identity" : "rim",
          "map" : "PQ, IVL<PQ>, MO, CO, depending on the values"
        },
        {
          "identity" : "rim",
          "map" : "PQ"
        }]
      },
      {
        "id" : "Age.id",
        "path" : "Age.id",
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
        "id" : "Age.extension",
        "path" : "Age.extension",
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
        "id" : "Age.value",
        "path" : "Age.value",
        "short" : "Numerical value (with implicit precision)",
        "definition" : "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
        "comment" : "The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).",
        "requirements" : "Precision is handled implicitly in almost all cases of measurement.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Quantity.value",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "decimal"
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
          "map" : "SN.2  / CQ - N/A"
        },
        {
          "identity" : "rim",
          "map" : "PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value"
        }]
      },
      {
        "id" : "Age.comparator",
        "path" : "Age.comparator",
        "short" : "< | <= | >= | > - how to understand the value",
        "definition" : "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
        "requirements" : "Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Quantity.comparator",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "code"
        }],
        "meaningWhenMissing" : "If there is no comparator, then there is no modification of the value",
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : true,
        "isModifierReason" : "This is labeled as \"Is Modifier\" because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value",
        "isSummary" : true,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "QuantityComparator"
          }],
          "strength" : "required",
          "description" : "How the Quantity should be understood and represented.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/quantity-comparator|4.0.1"
        },
        "mapping" : [{
          "identity" : "v2",
          "map" : "SN.1  / CQ.1"
        },
        {
          "identity" : "rim",
          "map" : "IVL properties"
        }]
      },
      {
        "id" : "Age.unit",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          "valueBoolean" : true
        }],
        "path" : "Age.unit",
        "short" : "Unit representation",
        "definition" : "A human-readable form of the unit.",
        "requirements" : "There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Quantity.unit",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "string"
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
          "map" : "(see OBX.6 etc.) / CQ.2"
        },
        {
          "identity" : "rim",
          "map" : "PQ.unit"
        }]
      },
      {
        "id" : "Age.system",
        "path" : "Age.system",
        "short" : "System that defines coded unit form",
        "definition" : "The identification of the system that provides the coded form of the unit.",
        "requirements" : "Need to know the system that defines the coded form of the unit.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Quantity.system",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "uri"
        }],
        "condition" : ["qty-3"],
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
          "map" : "(see OBX.6 etc.) / CQ.2"
        },
        {
          "identity" : "rim",
          "map" : "CO.codeSystem, PQ.translation.codeSystem"
        }]
      },
      {
        "id" : "Age.code",
        "path" : "Age.code",
        "short" : "Coded form of the unit",
        "definition" : "A computer processable form of the unit in some unit representation system.",
        "comment" : "The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.",
        "requirements" : "Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Quantity.code",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "code"
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
          "map" : "(see OBX.6 etc.) / CQ.2"
        },
        {
          "identity" : "rim",
          "map" : "PQ.code, MO.currency, PQ.translation.code"
        }]
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Age",
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "trial-use"
        }],
        "path" : "Age",
        "short" : "A duration of time during which an organism (or a process) has existed",
        "definition" : "A duration of time during which an organism (or a process) has existed.",
        "min" : 0,
        "max" : "*",
        "constraint" : [{
          "key" : "age-1",
          "severity" : "error",
          "human" : "There SHALL be a code if there is a value and it SHALL be an expression of time.  If system is present, it SHALL be UCUM.  If value is present, it SHALL be positive.",
          "expression" : "(code.exists() or value.empty()) and (system.empty() or system = %ucum) and (value.empty() or value.hasValue().not() or value > 0)",
          "xpath" : "(f:code or not(f:value)) and (not(exists(f:system)) or f:system/@value='http://unitsofmeasure.org') and (not(f:value/@value) or f:value/@value >=0)"
        }],
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            "valueCanonical" : "http://hl7.org/fhir/ValueSet/all-time-units"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "AgeUnits"
          }],
          "strength" : "extensible",
          "description" : "Appropriate units for Age.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/age-units"
        },
        "mapping" : [{
          "identity" : "rim",
          "map" : "PQ"
        }]
      }]
    }
  }