import { OperationDefinition } from "fhir/R4/types/operation-definition";

// https://hl7.org/fhir/R4/operation-measure-evaluate-measure.json.html
// Operation Definition

export const mockOperationDefinition9: OperationDefinition = {
    "resourceType" : "OperationDefinition",
    "id" : "Measure-evaluate-measure",
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
    "url" : "http://hl7.org/fhir/OperationDefinition/Measure-evaluate-measure",
    "version" : "4.0.1",
    "name" : "Evaluate Measure",
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
    "description" : "The evaluate-measure operation is used to calculate an eMeasure and obtain the results",
    "code" : "evaluate-measure",
    "comment" : "The effect of invoking this operation is to calculate the measure for the given subject, or all subjects if no subject is supplied, and return the results as a MeasureReport resource of the appropriate type. Note that whether or not this operation affects the state of the server depends on whether the server persists the generated MeasureReport. If the MeasureReport is not persisted, this operation can be invoked with GET",
    "resource" : ["Measure"],
    "system" : false,
    "type" : true,
    "instance" : true,
    "parameter" : [{
      "name" : "periodStart",
      "use" : "in",
      "min" : 1,
      "max" : "1",
      "documentation" : "The start of the measurement period. In keeping with the semantics of the date parameter used in the FHIR search operation, the period will start at the beginning of the period implied by the supplied timestamp. E.g. a value of 2014 would set the period start to be 2014-01-01T00:00:00 inclusive",
      "type" : "date"
    },
    {
      "name" : "periodEnd",
      "use" : "in",
      "min" : 1,
      "max" : "1",
      "documentation" : "The end of the measurement period. The period will end at the end of the period implied by the supplied timestamp. E.g. a value of 2014 would set the period end to be 2014-12-31T23:59:59 inclusive",
      "type" : "date"
    },
    {
      "name" : "measure",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The measure to evaluate. This parameter is only required when the operation is invoked on the resource type, it is not used when invoking the operation on a Measure instance",
      "type" : "string",
      "searchType" : "reference"
    },
    {
      "name" : "reportType",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The type of measure report: subject, subject-list, or population. If not specified, a default value of subject will be used if the subject parameter is supplied, otherwise, population will be used",
      "type" : "code"
    },
    {
      "name" : "subject",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "Subject for which the measure will be calculated. If not specified, the measure will be calculated for all subjects that meet the requirements of the measure. If specified, the measure will only be calculated for the referenced subject(s)",
      "type" : "string",
      "searchType" : "reference"
    },
    {
      "name" : "practitioner",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "Practitioner for which the measure will be calculated. If specified, the measure will be calculated only for subjects that have a primary relationship to the identified practitioner",
      "type" : "string",
      "searchType" : "reference"
    },
    {
      "name" : "lastReceivedOn",
      "use" : "in",
      "min" : 0,
      "max" : "1",
      "documentation" : "The date the results of this measure were last received. This parameter is only valid for patient-level reports and is used to indicate when the last time a result for this patient was received. This information can be used to limit the set of resources returned for a patient-level report",
      "type" : "dateTime"
    },
    {
      "name" : "return",
      "use" : "out",
      "min" : 1,
      "max" : "1",
      "documentation" : "The results of the measure calculation. See the MeasureReport resource for a complete description of the output of this operation. Note that implementations may choose to return a MeasureReport with a status of pending to indicate that the report is still being generated. In this case, the client can use a polling method to continually request the MeasureReport until the status is updated to complete",
      "type" : "MeasureReport"
    }]
  }