import { Group } from "../../types/group";

// https://hl7.org/fhir/R4/group-example-member.json.html
// General Group Example, Member Based

export const mockGroup1: Group = {
    "resourceType": "Group",
    "id": "102",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Selected Patients</p>\n      <ul>\n        <li>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</li>\n        <li>Patient Donald D DUCK @ Acme Healthcare, Inc. MR = 123456</li>\n        <li>Patient Simon Notsowell @ Acme Healthcare, Inc. MR = 123457, DECEASED</li>\n        <li>Patient Sandy Notsowell @ Acme Healthcare, Inc. MR = 123458, DECEASED</li>\n      </ul>\n    </div>"
    },
    "type": "person",
    "actual": true,
    "member": [
      {
        "entity": {
          "reference": "Patient/pat1"
        },
        "period": {
          "start": "2014-10-08"
        }
      },
      {
        "entity": {
          "reference": "Patient/pat2"
        },
        "period": {
          "start": "2015-04-02"
        },
        "inactive": true
      },
      {
        "entity": {
          "reference": "Patient/pat3"
        },
        "period": {
          "start": "2015-08-06"
        }
      },
      {
        "entity": {
          "reference": "Patient/pat4"
        },
        "period": {
          "start": "2015-08-06"
        }
      }
    ]
  }