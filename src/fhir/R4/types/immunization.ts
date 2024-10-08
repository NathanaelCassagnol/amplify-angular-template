import { Identifier, CodeableConcept, Reference, dateTime, date, BackboneElement, Annotation, positiveInt, SimpleQuantity, uri } from "./_basic-types";
import { DomainResource } from "./_resource.types";

export type Immunization = DomainResource & {
    resourceType: "Immunization",
    identifier?: Identifier[],
    status: "completed" | "entered-in-error" | "not-done",
    statusReason?: CodeableConcept,
    vaccineCode: CodeableConcept,
    patient: Reference,
    encounter?: Reference,
    occurrenceDateTime?: dateTime,
    occurrenceString?: string,
    recorded?: dateTime,
    primarySource?: boolean,
    reportOrigin?: CodeableConcept,
    location?: Reference,
    manufacturer?: Reference,
    lotNumber?: string,
    expirationDate?: date,
    site?: CodeableConcept,
    route?: CodeableConcept,
    doseQuantity?: SimpleQuantity,
    performer?: (BackboneElement & {
        function?: CodeableConcept,
        actor: Reference,
    })[],
    note?: Annotation[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    isSubpotent?: boolean,
    subpotentReason?: CodeableConcept[],
    education?: (BackboneElement & {
        documentType?: string,
        reference?: uri,
        publicationDate?: dateTime,
        presentationDate?: dateTime,
    })[],
    programEligibility?: CodeableConcept[],
    fundingSource?: CodeableConcept,
    reaction?: (BackboneElement & {
        date?: dateTime,
        detail?: Reference,
        reported?: boolean,
    })[],
    protocolApplied?: (BackboneElement & {
        series?: string,
        authority?: Reference,
        targetDisease?: CodeableConcept[],
        doseNumberString?: string,
        doseNumberPositiveInt?: positiveInt,
        seriesDosesString?: string,
        seriesDosesPositiveInt?: positiveInt,
    })[]
};