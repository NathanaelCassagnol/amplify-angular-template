import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-f002-burgers-card.json.html
// Real-world organization example (Burgers MC Cardiology)

export const mockOrganization7: Organization = {
    "resourceType": "Organization",
    "id": "f002",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>active</b>: true</p><p><b>type</b>: Hospital Department <span>(Details : {http://terminology.hl7.org/CodeSystem/organization-type code 'dept' = 'Hospital Department', given as 'Hospital Department'})</span></p><p><b>name</b>: Burgers UMC Cardiology unit</p><p><b>telecom</b>: ph: 022-655 2320</p><p><b>address</b>: South Wing, floor 2 </p><p><b>partOf</b>: <a>Organization/f001</a></p><h3>Contacts</h3><table><tr><td>-</td><td><b>Purpose</b></td><td><b>Name</b></td><td><b>Telecom</b></td><td><b>Address</b></td></tr><tr><td>*</td><td>Administrative <span>(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code 'ADMIN' = 'Administrative)</span></td><td>mevr. D. de Haan</td><td>ph: 022-655 2321</td><td>South Wing, floor 2 </td></tr></table></div>"
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
    "name": "Burgers UMC Cardiology unit",
    "telecom": [
      {
        "system": "phone",
        "value": "022-655 2320"
      }
    ],
    "address": [
      {
        "line": [
          "South Wing, floor 2"
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
          "text": "mevr. D. de Haan"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 2321"
          },
          {
            "system": "email",
            "value": "cardio@burgersumc.nl"
          },
          {
            "system": "fax",
            "value": "022-655 2322"
          }
        ],
        "address": {
          "line": [
            "South Wing, floor 2"
          ]
        }
      }
    ]
  }