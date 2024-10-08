import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-f003-burgers-ENT.json.html
// Real-world organization example (ENT)

export const mockOrganization10: Organization = {
    "resourceType": "Organization",
    "id": "f003",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>active</b>: true</p><p><b>type</b>: Hospital Department <span>(Details : {http://terminology.hl7.org/CodeSystem/organization-type code 'dept' = 'Hospital Department', given as 'Hospital Department'})</span></p><p><b>name</b>: Burgers UMC Ear,Nose,Throat unit</p><p><b>telecom</b>: ph: 022-655 6780</p><p><b>address</b>: West Wing, floor 5 </p><p><b>partOf</b>: <a>Organization/f001</a></p><h3>Contacts</h3><table><tr><td>-</td><td><b>Purpose</b></td><td><b>Name</b></td><td><b>Telecom</b></td><td><b>Address</b></td></tr><tr><td>*</td><td>Administrative <span>(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code 'ADMIN' = 'Administrative)</span></td><td>mr. F. de Hond</td><td>ph: 022-655 7654</td><td>West Wing, floor 5 </td></tr></table></div>"
    },
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "dept",
            "display": "Hospital Department"
          }
        ]
      }
    ],
    "name": "Burgers UMC Ear,Nose,Throat unit",
    "telecom": [
      {
        "system": "phone",
        "value": "022-655 6780"
      }
    ],
    "address": [
      {
        "line": [
          "West Wing, floor 5"
        ]
      }
    ],
    "partOf": {
      "reference": "Organization/f001"
    },
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "ADMIN"
            }
          ]
        },
        "name": {
          "text": "mr. F. de Hond"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 7654"
          },
          {
            "system": "email",
            "value": "KNO@burgersumc.nl"
          },
          {
            "system": "fax",
            "value": "022-655 0998"
          }
        ],
        "address": {
          "line": [
            "West Wing, floor 5"
          ]
        }
      }
    ]
  }