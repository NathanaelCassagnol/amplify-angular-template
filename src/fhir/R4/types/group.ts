import { Identifier, CodeableConcept, unsignedInt, Reference, Quantity, Period, BackboneElement } from "./_basic-types"
import { DomainResource } from "./_resource.types"

// https://hl7.org/fhir/R4/group.html
// Generated by ChatGTP
export type Group = DomainResource & {
    resourceType: "Group",
    identifier?: Identifier[],
    active?: boolean,
    type: "person" | "animal" | "practitioner" | "device" | "medication" | "substance",
    actual: boolean,
    code?: CodeableConcept,
    name?: string,
    quantity?: unsignedInt,
    managingEntity?: Reference,
    characteristic?: (BackboneElement & {
      code: CodeableConcept,
      valueCodeableConcept?: CodeableConcept,
      valueBoolean?: boolean,
      valueQuantity?: Quantity,
      valueRange?: Range,
      valueReference?: Reference,
      exclude: boolean,
      period?: Period
    })[],
    member?: (BackboneElement & {
      entity: Reference,
      period?: Period,
      inactive?: boolean
    })[]
}