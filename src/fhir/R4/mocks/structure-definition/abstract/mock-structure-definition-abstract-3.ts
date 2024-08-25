import { StructureDefinition } from "fhir/R4/types/structure-definition";

// https://hl7.org/fhir/R4/resource.profile.json.html
// StructureDefinition for resource

export const mockStructureDefinitionAbstract3: StructureDefinition = {
    "resourceType" : "StructureDefinition",
    "id" : "Resource",
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
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 5
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/Resource",
    "version" : "4.0.1",
    "name" : "Resource",
    "status" : "active",
    "date" : "2019-11-01T09:29:23+11:00",
    "publisher" : "Health Level Seven International (FHIR Infrastructure)",
    "contact" : [{
      "telecom" : [{
        "system" : "url",
        "value" : "http://hl7.org/fhir"
      }]
    },
    {
      "telecom" : [{
        "system" : "url",
        "value" : "http://www.hl7.org/Special/committees/fiwg/index.cfm"
      }]
    }],
    "description" : "This is the base resource type for everything.",
    "fhirVersion" : "4.0.1",
    "mapping" : [{
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }],
    "kind" : "resource",
    "abstract" : true,
    "type" : "Resource",
    "snapshot" : {
      "element" : [{
        "id" : "Resource",
        "path" : "Resource",
        "short" : "Base Resource",
        "definition" : "This is the base resource type for everything.",
        "min" : 0,
        "max" : "*",
        "base" : {
          "path" : "Resource",
          "min" : 0,
          "max" : "*"
        },
        "isModifier" : false,
        "isSummary" : false,
        "mapping" : [{
          "identity" : "rim",
          "map" : "Entity. Role, or Act"
        }]
      },
      {
        "id" : "Resource.id",
        "path" : "Resource.id",
        "short" : "Logical id of this artifact",
        "definition" : "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
        "comment" : "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.id",
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
        "isSummary" : true
      },
      {
        "id" : "Resource.meta",
        "path" : "Resource.meta",
        "short" : "Metadata about the resource",
        "definition" : "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.meta",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "Meta"
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
        "isSummary" : true
      },
      {
        "id" : "Resource.implicitRules",
        "path" : "Resource.implicitRules",
        "short" : "A set of rules under which this content was created",
        "definition" : "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
        "comment" : "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.implicitRules",
          "min" : 0,
          "max" : "1"
        },
        "type" : [{
          "code" : "uri"
        }],
        "constraint" : [{
          "key" : "ele-1",
          "severity" : "error",
          "human" : "All FHIR elements must have a @value or children",
          "expression" : "hasValue() or (children().count() > id.count())",
          "xpath" : "@value|f:*|h:div",
          "source" : "http://hl7.org/fhir/StructureDefinition/Element"
        }],
        "isModifier" : true,
        "isModifierReason" : "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
        "isSummary" : true
      },
      {
        "id" : "Resource.language",
        "path" : "Resource.language",
        "short" : "Language of the resource content",
        "definition" : "The base language in which the resource is written.",
        "comment" : "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
        "min" : 0,
        "max" : "1",
        "base" : {
          "path" : "Resource.language",
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
        "isSummary" : false,
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            "valueCanonical" : "http://hl7.org/fhir/ValueSet/all-languages"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "Language"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "preferred",
          "description" : "A human language.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/languages"
        }
      }]
    },
    "differential" : {
      "element" : [{
        "id" : "Resource",
        "path" : "Resource",
        "short" : "Base Resource",
        "definition" : "This is the base resource type for everything.",
        "min" : 0,
        "max" : "*",
        "mapping" : [{
          "identity" : "rim",
          "map" : "Entity. Role, or Act"
        }]
      },
      {
        "id" : "Resource.id",
        "path" : "Resource.id",
        "short" : "Logical id of this artifact",
        "definition" : "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
        "comment" : "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            "valueUrl" : "string"
          }],
          "code" : "http://hl7.org/fhirpath/System.String"
        }],
        "isSummary" : true
      },
      {
        "id" : "Resource.meta",
        "path" : "Resource.meta",
        "short" : "Metadata about the resource",
        "definition" : "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "Meta"
        }],
        "isSummary" : true
      },
      {
        "id" : "Resource.implicitRules",
        "path" : "Resource.implicitRules",
        "short" : "A set of rules under which this content was created",
        "definition" : "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
        "comment" : "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "uri"
        }],
        "isModifier" : true,
        "isModifierReason" : "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
        "isSummary" : true
      },
      {
        "id" : "Resource.language",
        "path" : "Resource.language",
        "short" : "Language of the resource content",
        "definition" : "The base language in which the resource is written.",
        "comment" : "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
        "min" : 0,
        "max" : "1",
        "type" : [{
          "code" : "code"
        }],
        "binding" : {
          "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            "valueCanonical" : "http://hl7.org/fhir/ValueSet/all-languages"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            "valueString" : "Language"
          },
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            "valueBoolean" : true
          }],
          "strength" : "preferred",
          "description" : "A human language.",
          "valueSet" : "http://hl7.org/fhir/ValueSet/languages"
        }
      }]
    }
  }