import { Group } from "../../types/group";

// https://hl7.org/fhir/R4/group-example-herd1.json.html
// Herd of 2500 breeding sows

export const mockGroup1: Group = {
    "resourceType": "Group",
    "id": "herd1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: herd1</p><p><b>identifier</b>: 20171120-1234</p><p><b>active</b>: true</p><p><b>type</b>: animal</p><p><b>actual</b>: true</p><p><b>code</b>: Porcine <span>(Details : {SNOMED CT code '388393002' = 'Genus Sus', given as 'Genus Sus (organism)'}; {https://www.aphis.usda.gov code 'POR' = 'POR', given as 'porcine'})</span></p><p><b>name</b>: Breeding herd</p><p><b>quantity</b>: 2500</p><h3>Characteristics</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Value[x]</b></td><td><b>Exclude</b></td></tr><tr><td>*</td><td>gender <span>(Details )</span></td><td>female <span>(Details )</span></td><td>false</td></tr></table></div>"
    },
    "extension": [
      {
        "url": "http://example.org/fhir/StructureDefinition/owner",
        "valueReference": {
          "reference": "RelatedPerson/peter",
          "display": "Peter Chalmers"
        }
      }
    ],
    "identifier": [
      {
        "system": "https://vetmed.iastate.edu/vdl",
        "value": "20171120-1234"
      }
    ],
    "active": true,
    "type": "animal",
    "actual": true,
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "388393002",
          "display": "Genus Sus (organism)"
        },
        {
          "system": "https://www.aphis.usda.gov",
          "code": "POR",
          "display": "porcine"
        }
      ],
      "text": "Porcine"
    },
    "name": "Breeding herd",
    "quantity": 2500,
    "characteristic": [
      {
        "code": {
          "text": "gender"
        },
        "valueCodeableConcept": {
          "text": "female"
        },
        "exclude": false
      }
    ]
  }