import { List } from "../../types/list";

// https://hl7.org/fhir/R4/list-example-familyhistory-f201-roel.json.html
// Real-world patient example

export const mockList5: List = {
    "resourceType": "List",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>contained</b>: , </p><p><b>status</b>: current</p><p><b>mode</b>: snapshot</p><p><b>code</b>: History of family member diseases <span>(Details : {LOINC code '8670-2' = 'History of family member diseases', given as 'History of family member diseases'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>note</b>: Both parents, both brothers and both children (twin) are still alive.</p><blockquote><p><b>entry</b></p><p><b>item</b>: id: fmh-1; status: completed; Mother <span>(Details : {SNOMED CT code '72705000' = 'Mother', given as 'Mother'})</span>; </p></blockquote><blockquote><p><b>entry</b></p><p><b>item</b>: id: fmh-2; status: completed; Uncle <span>(Details : {SNOMED CT code '38048003' = 'Uncle', given as 'Uncle'})</span>; deceased</p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "FamilyMemberHistory",
        "id": "fmh-1",
        "status": "completed",
        "patient": {
          "reference": "Patient/f201",
          "display": "Roel"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "72705000",
              "display": "Mother"
            }
          ]
        },
        "deceasedBoolean": false,
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "39839004",
                  "display": "Diaphragmatic hernia"
                }
              ]
            }
          }
        ]
      },
      {
        "resourceType": "FamilyMemberHistory",
        "id": "fmh-2",
        "status": "completed",
        "patient": {
          "reference": "Patient/f201",
          "display": "Roel"
        },
        "relationship": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "38048003",
              "display": "Uncle"
            }
          ]
        },
        "deceasedBoolean": true,
        "condition": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "115665000",
                  "display": "Atopy"
                }
              ]
            },
            "outcome": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "419099009",
                  "display": "Died"
                }
              ]
            }
          }
        ]
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
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "note": [
      {
        "text": "Both parents, both brothers and both children (twin) are still alive."
      }
    ],
    "entry": [
      {
        "item": {
          "reference": "#fmh-1"
        }
      },
      {
        "item": {
          "reference": "#fmh-2"
        }
      }
    ]
  }