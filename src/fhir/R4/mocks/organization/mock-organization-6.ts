import { Organization } from "../../types/organization.types";

// https://hl7.org/fhir/R4/organization-example-f001-burgers.json.html
// Real-world organization example (Burgers MC)

export const mockOrganization6: Organization = {
    "resourceType": "Organization",
    "id": "f001",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 91654 (OFFICIAL), 17-0112278 (USUAL)</p><p><b>type</b>: University Medical Hospital <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.1060 code 'V6' = 'V6', given as 'University Medical Hospital'}; {http://terminology.hl7.org/CodeSystem/organization-type code 'prov' = 'Healthcare Provider', given as 'Healthcare Provider'})</span></p><p><b>name</b>: Burgers University Medical Center</p><p><b>telecom</b>: ph: 022-655 2300(WORK)</p><p><b>address</b>: </p><ul><li>Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</li><li>PO Box 2311 Den Burg 9100 AA NLD (WORK)</li></ul><blockquote><p><b>contact</b></p><p><b>purpose</b>: Press <span>(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code 'PRESS' = 'Press)</span></p><p><b>telecom</b>: ph: 022-655 2334</p></blockquote><blockquote><p><b>contact</b></p><p><b>purpose</b>: Patient <span>(Details : {http://terminology.hl7.org/CodeSystem/contactentity-type code 'PATINF' = 'Patient)</span></p><p><b>telecom</b>: ph: 022-655 2335</p></blockquote></div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "urn:oid:2.16.528.1",
        "value": "91654"
      },
      {
        "use": "usual",
        "system": "urn:oid:2.16.840.1.113883.2.4.6.1",
        "value": "17-0112278"
      }
    ],
    "type": [
      {
        "coding": [
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
    "name": "Burgers University Medical Center",
    "telecom": [
      {
        "system": "phone",
        "value": "022-655 2300",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "line": [
          "Galapagosweg 91"
        ],
        "city": "Den Burg",
        "postalCode": "9105 PZ",
        "country": "NLD"
      },
      {
        "use": "work",
        "line": [
          "PO Box 2311"
        ],
        "city": "Den Burg",
        "postalCode": "9100 AA",
        "country": "NLD"
      }
    ],
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "PRESS"
            }
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 2334"
          }
        ]
      },
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "PATINF"
            }
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "022-655 2335"
          }
        ]
      }
    ]
  }