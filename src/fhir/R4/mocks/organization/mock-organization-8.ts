import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-f201-aumc.json.html
// Real-world organization example (Artis UMC)

export const mockOrganization8: Organization = {
    "resourceType": "Organization",
    "id": "f201",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: Artis University Medical Center (OFFICIAL)</p><p><b>active</b>: true</p><p><b>type</b>: Academic Medical Center <span>(Details : {SNOMED CT code '405608006' = 'Academic medical centre', given as 'Academic Medical Center'}; {urn:oid:2.16.840.1.113883.2.4.15.1060 code 'V6' = 'V6', given as 'University Medical Hospital'}; {http://terminology.hl7.org/CodeSystem/organization-type code 'prov' = 'Healthcare Provider', given as 'Healthcare Provider'})</span></p><p><b>name</b>: Artis University Medical Center (AUMC)</p><p><b>telecom</b>: ph: +31715269111(WORK)</p><p><b>address</b>: Walvisbaai 3 Den Helder 2333ZA NLD (WORK)</p><h3>Contacts</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Telecom</b></td><td><b>Address</b></td></tr><tr><td>*</td><td>Professor Brand(OFFICIAL)</td><td>ph: +31715269702(WORK)</td><td>Walvisbaai 3 Gebouw 2 Den helder 2333ZA NLD </td></tr></table></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://www.zorgkaartnederland.nl/",
        "value": "Artis University Medical Center"
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
            "system": "urn:oid:2.16.840.1.113883.2.4.15.1060",
            "code": "V6",
            "display": "University Medical Hospital"
          },
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "prov",
            "display": "Healthcare Provider"
          }
        ]
      }
    ],
    "name": "Artis University Medical Center (AUMC)",
    "telecom": [
      {
        "system": "phone",
        "value": "+31715269111",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Walvisbaai 3"
        ],
        "city": "Den Helder",
        "postalCode": "2333ZA",
        "country": "NLD"
      }
    ],
    "contact": [
      {
        "name": {
          "use": "official",
          "text": "Professor Brand",
          "family": "Brand",
          "given": [
            "Ronald"
          ],
          "prefix": [
            "Prof.Dr."
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "+31715269702",
            "use": "work"
          }
        ],
        "address": {
          "line": [
            "Walvisbaai 3",
            "Gebouw 2"
          ],
          "city": "Den helder",
          "postalCode": "2333ZA",
          "country": "NLD"
        }
      }
    ]
  }