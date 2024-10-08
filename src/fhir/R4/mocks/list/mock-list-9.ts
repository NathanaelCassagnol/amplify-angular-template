import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-double-cousin-relationship-pedigree.json.html
// Simple genetic pedigree tree example with double cousin replationship

export const mockList9: List = {
    "resourceType": "List",
    "id": "example-double-cousin-relationship",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-double-cousin-relationship</p><p><b>contained</b>: , , , , , </p><p><b>status</b>: current</p><p><b>mode</b>: snapshot</p><p><b>code</b>: TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal <span>(Details : {LOINC code '80738-8' = 'TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal', given as 'TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal'})</span></p><p><b>subject</b>: <a>Pam Taylor</a></p><blockquote><p><b>entry</b></p><p><b>item</b>: id: 1; status: completed; name: Mary; natural mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'NMTH' = 'natural mother', given as 'natural mother'})</span>; deceased</p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 2; status: completed; name: Bob; paternal uncle <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PUNCLE' = 'paternal uncle', given as 'paternal uncle'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 3; status: completed; name: Jon; maternal uncle <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MUNCLE' = 'maternal uncle', given as 'maternal uncle'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 4; status: completed; name: Alica; maternal grandmother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MGRMTH' = 'maternal grandmother', given as 'maternal grandmother'})</span>; 70 yr<span> (Details: UCUM code a = 'a')</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 5; status: completed; name: Aunt with Parent ID; maternal aunt <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MAUNT' = 'maternal aunt', given as 'maternal aunt'})</span>; Female <span>(Details : {http://hl7.org/fhir/administrative-gender code 'female' = 'Female', given as 'Female'})</span>; 55 yr<span> (Details: UCUM code a = 'a')</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 6; status: completed; name: Paul; Paternal grandfather <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PGRFTH' = 'paternal grandfather', given as 'Paternal grandfather'})</span>; 74 yr<span> (Details: UCUM code b = 'b')</span></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "FamilyMemberHistory",
        "id": "1",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Mary",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "NMTH",
              "display": "natural mother"
            }
          ],
          "text": "natural mother"
        },
        "deceasedBoolean": true,
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "73211009",
                  "display": "Diabetes mellitus"
                }
              ],
              "text": "Diabetes mellitus"
            },
            "onsetAge": {
              "value": 45,
              "unit": "yr",
              "system": "http://unitsofmeasure.org",
              "code": "a"
            }
          }
        ]
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "2",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Bob",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "PUNCLE",
              "display": "paternal uncle"
            }
          ],
          "text": "paternal uncle"
        },
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "1481000119100",
                  "display": "Diabetes mellitus type 2 without retinopathy"
                }
              ],
              "text": "Diabetes mellitus type 2 without retinopathy"
            },
            "onsetAge": {
              "value": 35,
              "unit": "yr",
              "system": "http://unitsofmeasure.org",
              "code": "a"
            }
          }
        ]
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "3",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Jon",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MUNCLE",
              "display": "maternal uncle"
            }
          ],
          "text": "maternal uncle"
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "4",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-sibling",
            "extension": [
              {
                "url": "type",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                      "code": "NSIS",
                      "display": "natural sister"
                    }
                  ],
                  "text": "natural sister"
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "FamilyMemberHistory/mother",
                  "display": "paternal grandmother"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Alica",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MGRMTH",
              "display": "maternal grandmother"
            }
          ],
          "text": "maternal grandmother"
        },
        "ageAge": {
          "value": 70,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "5",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-parent",
            "extension": [
              {
                "url": "type",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                      "code": "MTH",
                      "display": "mother"
                    }
                  ],
                  "text": "mother"
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "FamilyMemberHistory/147146",
                  "display": "maternal grandmother"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Aunt with Parent ID",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MAUNT",
              "display": "maternal aunt"
            }
          ],
          "text": "maternal aunt"
        },
        "sex": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/administrative-gender",
              "code": "female",
              "display": "Female"
            }
          ]
        },
        "ageAge": {
          "value": 55,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "a"
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "6",
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/family-member-history-genetics-sibling",
            "extension": [
              {
                "url": "type",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                      "code": "NBRO",
                      "display": "natural brother"
                    }
                  ],
                  "text": "natural brother"
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "FamilyMemberHistory/father",
                  "display": "maternal grandfather"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Pam Taylor"
        },
        "name": "Paul",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "PGRFTH",
              "display": "Paternal grandfather"
            }
          ],
          "text": "Paternal grandfather"
        },
        "ageAge": {
          "value": 74,
          "unit": "yr",
          "system": "http://unitsofmeasure.org",
          "code": "b"
        }
      }
    ],
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "80738-8",
          "display": "TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal"
        }
      ],
      "text": "TPMT gene mutations found [Identifier] in Blood or Tissue by Sequencing Nominal"
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Pam Taylor"
    },
    "entry": [
      {
        "item": {
          "reference": "#1"
        }
      },
      {
        "item": {
          "reference": "#2"
        }
      },
      {
        "item": {
          "reference": "#3"
        }
      },
      {
        "item": {
          "reference": "#4"
        }
      },
      {
        "item": {
          "reference": "#5"
        }
      },
      {
        "item": {
          "reference": "#6"
        }
      }
    ]
  }