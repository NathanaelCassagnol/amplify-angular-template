import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-familyhistory-genetics-profile.json.html
// Simple genetic family member history

export const mockList6: List = {
    "resourceType": "List",
    "id": "genetic",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: genetic</p><p><b>contained</b>: , , , , , , , </p><p><b>status</b>: current</p><p><b>mode</b>: snapshot</p><p><b>code</b>: History of family member diseases <span>(Details : {LOINC code '8670-2' = 'History of family member diseases', given as 'History of family member diseases'})</span></p><p><b>subject</b>: <a>Peter Patient</a></p><blockquote><p><b>entry</b></p><p><b>item</b>: id: 1; status: completed; name: Dave; father <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'FTH' = 'father', given as 'father'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 2; status: completed; maternal grandfather <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MGRFTH' = 'maternal grandfather', given as 'maternal grandfather'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 3; status: completed; mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MTH' = 'mother', given as 'mother'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 4; status: completed; paternal grandmother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PGRMTH' = 'paternal grandmother', given as 'paternal grandmother'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 5; status: completed; name: Eve; paternal aunt <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'PAUNT' = 'paternal aunt', given as 'paternal aunt'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 6; status: completed; maternal uncle <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MUNCLE' = 'maternal uncle', given as 'maternal uncle'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 7; status: completed; natural sister <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'NSIS' = 'natural sister', given as 'natural sister'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: 8; status: completed; name: Alice; maternal cousin <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'MCOUSN' = 'maternal cousin', given as 'maternal cousin'})</span></p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: <a>Family history of cancer of colon</a></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "FamilyMemberHistory",
        "id": "1",
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
                      "code": "FTH",
                      "display": "father"
                    }
                  ]
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "#2",
                  "display": "maternal grandfather"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "name": "Dave",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "FTH",
              "display": "father"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "2",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MGRFTH",
              "display": "maternal grandfather"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "3",
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
                  ]
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "#2",
                  "display": "maternal grandfather"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MTH",
              "display": "mother"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "4",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "PGRMTH",
              "display": "paternal grandmother"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "5",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "name": "Eve",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "PAUNT",
              "display": "paternal aunt"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "6",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MUNCLE",
              "display": "maternal uncle"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "7",
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "NSIS",
              "display": "natural sister"
            }
          ]
        }
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "8",
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
                  ]
                }
              },
              {
                "url": "reference",
                "valueReference": {
                  "reference": "#2",
                  "display": "maternal grandfather"
                }
              }
            ]
          }
        ],
        "status": "completed",
        "patient": {
          "reference": "Patient/example",
          "display": "Peter Patient"
        },
        "name": "Alice",
        "relationship": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              "code": "MCOUSN",
              "display": "maternal cousin"
            }
          ]
        }
      }
    ],
    "status": "current",
    "mode": "snapshot",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "8670-2",
          "display": "History of family member diseases"
        }
      ]
    },
    "subject": {
      "reference": "Patient/example",
      "display": "Peter Patient"
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
      },
      {
        "item": {
          "reference": "#7"
        }
      },
      {
        "item": {
          "reference": "#8"
        }
      },
      {
        "item": {
          "reference": "Condition/family-history",
          "display": "Family history of cancer of colon"
        }
      }
    ]
  }