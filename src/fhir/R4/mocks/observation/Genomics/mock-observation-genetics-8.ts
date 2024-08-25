import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-haplotype2.json.html
// Example of another haplotype data that is basis of a diplotype data

export const mockObservationGenetics8: Observation = {
    "resourceType": "Observation",
    "id": "example-haplotype2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-haplotype2</p><p><b>status</b>: unknown</p><p><b>code</b>: Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *4 <span>(Details : {http://pharmakb.org code 'PA16581679' = 'PA16581679', given as '*4'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: </p><ul><li><a>MolecularSequence/example-pgx-1</a></li><li><a>MolecularSequence/example-pgx-2</a></li></ul></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://www.genenames.org",
              "code": "2623",
              "display": "CYP2C9"
            }
          ]
        }
      }
    ],
    "status": "unknown",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "55233-1",
          "display": "Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result."
        }
      ]
    },
    "subject": {
      "reference": "Patient/727127",
      "display": "J*********** C***********"
    },
    "issued": "2013-04-03T15:30:10+01:00",
    "valueCodeableConcept": {
      "coding": [
        {
          "system": "http://pharmakb.org",
          "code": "PA16581679",
          "display": "*4"
        }
      ]
    },
    "specimen": {
      "reference": "Specimen/genetics-example1-somatic",
      "display": "Molecular Specimen ID: MLD45-Z4-1234"
    },
    "derivedFrom": [
      {
        "reference": "MolecularSequence/example-pgx-1"
      },
      {
        "reference": "MolecularSequence/example-pgx-2"
      }
    ]
  }