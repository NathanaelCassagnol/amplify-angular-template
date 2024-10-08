import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-f203-bumc.json.html
// Real-world organization example (Blijdorp MC)

export const mockOrganization9: Organization = {
    "resourceType": "Organization",
    "id": "f203",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>identifier</b>: Zorginstelling naam = Blijdorp MC (OFFICIAL)</p><p><b>active</b>: true</p><p><b>type</b>: Academic Medical Center <span>(Details : {SNOMED CT code '405608006' = 'Academic medical centre', given as 'Academic Medical Center'}; {http://terminology.hl7.org/CodeSystem/organization-type code 'prov' = 'Healthcare Provider)</span></p><p><b>name</b>: Blijdorp Medisch Centrum (BUMC)</p><p><b>telecom</b>: ph: +31107040704(WORK)</p><p><b>address</b>: apenrots 230 Blijdorp 3056BE NLD (WORK)</p></div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "text": "Zorginstelling naam"
        },
        "system": "http://www.zorgkaartnederland.nl/",
        "value": "Blijdorp MC"
      }
    ],
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "405608006",
            "display": "Academic Medical Center"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "prov"
          }
        ]
      }
    ],
    "name": "Blijdorp Medisch Centrum (BUMC)",
    "telecom": [
      {
        "system": "phone",
        "value": "+31107040704",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "apenrots 230"
        ],
        "city": "Blijdorp",
        "postalCode": "3056BE",
        "country": "NLD"
      }
    ]
  }