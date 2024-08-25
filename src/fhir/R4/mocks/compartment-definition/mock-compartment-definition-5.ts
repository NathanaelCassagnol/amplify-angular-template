import { CompartmentDefinition } from "fhir/R4/types/compartment-definition";

// https://hl7.org/fhir/R4/compartmentdefinition-encounter.json.html
// Compartment Definition for encounter

export const mockCompartmentDefinition5: CompartmentDefinition = {
    "resourceType" : "CompartmentDefinition",
    "id" : "encounter",
    "text" : {
      "status" : "generated",
      "div" : "<div>!-- Snipped for Brevity --></div>"
    },
    "url" : "http://hl7.org/fhir/CompartmentDefinition/encounter",
    "version" : "4.0.1",
    "name" : "Base FHIR compartment definition for Encounter",
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
    "description" : "There is an instance of the encounter compartment for each encounter resource, and the identity of the compartment is the same as the encounter. The set of resources associated with a particular encounter",
    "code" : "Encounter",
    "search" : true,
    "resource" : [{
      "code" : "Account"
    },
    {
      "code" : "ActivityDefinition"
    },
    {
      "code" : "AdverseEvent"
    },
    {
      "code" : "AllergyIntolerance"
    },
    {
      "code" : "Appointment"
    },
    {
      "code" : "AppointmentResponse"
    },
    {
      "code" : "AuditEvent"
    },
    {
      "code" : "Basic"
    },
    {
      "code" : "Binary"
    },
    {
      "code" : "BiologicallyDerivedProduct"
    },
    {
      "code" : "BodyStructure"
    },
    {
      "code" : "Bundle"
    },
    {
      "code" : "CapabilityStatement"
    },
    {
      "code" : "CarePlan",
      "param" : ["encounter"]
    },
    {
      "code" : "CareTeam",
      "param" : ["encounter"]
    },
    {
      "code" : "CatalogEntry"
    },
    {
      "code" : "ChargeItem",
      "param" : ["context"]
    },
    {
      "code" : "ChargeItemDefinition"
    },
    {
      "code" : "Claim",
      "param" : ["encounter"]
    },
    {
      "code" : "ClaimResponse"
    },
    {
      "code" : "ClinicalImpression",
      "param" : ["encounter"]
    },
    {
      "code" : "CodeSystem"
    },
    {
      "code" : "Communication",
      "param" : ["encounter"]
    },
    {
      "code" : "CommunicationRequest",
      "param" : ["encounter"]
    },
    {
      "code" : "CompartmentDefinition"
    },
    {
      "code" : "Composition",
      "param" : ["encounter"]
    },
    {
      "code" : "ConceptMap"
    },
    {
      "code" : "Condition",
      "param" : ["encounter"]
    },
    {
      "code" : "Consent"
    },
    {
      "code" : "Contract"
    },
    {
      "code" : "Coverage"
    },
    {
      "code" : "CoverageEligibilityRequest"
    },
    {
      "code" : "CoverageEligibilityResponse"
    },
    {
      "code" : "DetectedIssue"
    },
    {
      "code" : "Device"
    },
    {
      "code" : "DeviceDefinition"
    },
    {
      "code" : "DeviceMetric"
    },
    {
      "code" : "DeviceRequest",
      "param" : ["encounter"]
    },
    {
      "code" : "DeviceUseStatement"
    },
    {
      "code" : "DiagnosticReport",
      "param" : ["encounter"]
    },
    {
      "code" : "DocumentManifest",
      "param" : ["related-ref"]
    },
    {
      "code" : "DocumentReference",
      "param" : ["encounter"]
    },
    {
      "code" : "EffectEvidenceSynthesis"
    },
    {
      "code" : "Encounter",
      "param" : ["{def}"]
    },
    {
      "code" : "Endpoint"
    },
    {
      "code" : "EnrollmentRequest"
    },
    {
      "code" : "EnrollmentResponse"
    },
    {
      "code" : "EpisodeOfCare"
    },
    {
      "code" : "EventDefinition"
    },
    {
      "code" : "Evidence"
    },
    {
      "code" : "EvidenceVariable"
    },
    {
      "code" : "ExampleScenario"
    },
    {
      "code" : "ExplanationOfBenefit",
      "param" : ["encounter"]
    },
    {
      "code" : "FamilyMemberHistory"
    },
    {
      "code" : "Flag"
    },
    {
      "code" : "Goal"
    },
    {
      "code" : "GraphDefinition"
    },
    {
      "code" : "Group"
    },
    {
      "code" : "GuidanceResponse"
    },
    {
      "code" : "HealthcareService"
    },
    {
      "code" : "ImagingStudy"
    },
    {
      "code" : "Immunization"
    },
    {
      "code" : "ImmunizationEvaluation"
    },
    {
      "code" : "ImmunizationRecommendation"
    },
    {
      "code" : "ImplementationGuide"
    },
    {
      "code" : "InsurancePlan"
    },
    {
      "code" : "Invoice"
    },
    {
      "code" : "Library"
    },
    {
      "code" : "Linkage"
    },
    {
      "code" : "List"
    },
    {
      "code" : "Location"
    },
    {
      "code" : "Measure"
    },
    {
      "code" : "MeasureReport"
    },
    {
      "code" : "Media",
      "param" : ["encounter"]
    },
    {
      "code" : "Medication"
    },
    {
      "code" : "MedicationAdministration",
      "param" : ["context"]
    },
    {
      "code" : "MedicationDispense"
    },
    {
      "code" : "MedicationKnowledge"
    },
    {
      "code" : "MedicationRequest",
      "param" : ["encounter"]
    },
    {
      "code" : "MedicationStatement"
    },
    {
      "code" : "MedicinalProduct"
    },
    {
      "code" : "MedicinalProductAuthorization"
    },
    {
      "code" : "MedicinalProductContraindication"
    },
    {
      "code" : "MedicinalProductIndication"
    },
    {
      "code" : "MedicinalProductIngredient"
    },
    {
      "code" : "MedicinalProductInteraction"
    },
    {
      "code" : "MedicinalProductManufactured"
    },
    {
      "code" : "MedicinalProductPackaged"
    },
    {
      "code" : "MedicinalProductPharmaceutical"
    },
    {
      "code" : "MedicinalProductUndesirableEffect"
    },
    {
      "code" : "MessageDefinition"
    },
    {
      "code" : "MessageHeader"
    },
    {
      "code" : "MolecularSequence"
    },
    {
      "code" : "NamingSystem"
    },
    {
      "code" : "NutritionOrder",
      "param" : ["encounter"]
    },
    {
      "code" : "Observation",
      "param" : ["encounter"]
    },
    {
      "code" : "ObservationDefinition"
    },
    {
      "code" : "OperationDefinition"
    },
    {
      "code" : "OperationOutcome"
    },
    {
      "code" : "Organization"
    },
    {
      "code" : "OrganizationAffiliation"
    },
    {
      "code" : "Patient"
    },
    {
      "code" : "PaymentNotice"
    },
    {
      "code" : "PaymentReconciliation"
    },
    {
      "code" : "Person"
    },
    {
      "code" : "PlanDefinition"
    },
    {
      "code" : "Practitioner"
    },
    {
      "code" : "PractitionerRole"
    },
    {
      "code" : "Procedure",
      "param" : ["encounter"]
    },
    {
      "code" : "Provenance"
    },
    {
      "code" : "Questionnaire"
    },
    {
      "code" : "QuestionnaireResponse",
      "param" : ["encounter"]
    },
    {
      "code" : "RelatedPerson"
    },
    {
      "code" : "RequestGroup",
      "param" : ["encounter"]
    },
    {
      "code" : "ResearchDefinition"
    },
    {
      "code" : "ResearchElementDefinition"
    },
    {
      "code" : "ResearchStudy"
    },
    {
      "code" : "ResearchSubject"
    },
    {
      "code" : "RiskAssessment"
    },
    {
      "code" : "RiskEvidenceSynthesis"
    },
    {
      "code" : "Schedule"
    },
    {
      "code" : "SearchParameter"
    },
    {
      "code" : "ServiceRequest",
      "param" : ["encounter"]
    },
    {
      "code" : "Slot"
    },
    {
      "code" : "Specimen"
    },
    {
      "code" : "SpecimenDefinition"
    },
    {
      "code" : "StructureDefinition"
    },
    {
      "code" : "StructureMap"
    },
    {
      "code" : "Subscription"
    },
    {
      "code" : "Substance"
    },
    {
      "code" : "SubstanceNucleicAcid"
    },
    {
      "code" : "SubstancePolymer"
    },
    {
      "code" : "SubstanceProtein"
    },
    {
      "code" : "SubstanceReferenceInformation"
    },
    {
      "code" : "SubstanceSourceMaterial"
    },
    {
      "code" : "SubstanceSpecification"
    },
    {
      "code" : "SupplyDelivery"
    },
    {
      "code" : "SupplyRequest"
    },
    {
      "code" : "Task"
    },
    {
      "code" : "TerminologyCapabilities"
    },
    {
      "code" : "TestReport"
    },
    {
      "code" : "TestScript"
    },
    {
      "code" : "ValueSet"
    },
    {
      "code" : "VerificationResult"
    },
    {
      "code" : "VisionPrescription",
      "param" : ["encounter"]
    }]
  }