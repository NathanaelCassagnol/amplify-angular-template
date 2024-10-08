import { OrganizationAffiliation } from "../../types/organization-affiliation";

// https://hl7.org/fhir/R4/orgrole-example-hie.json.html
// Hospital member

export const mockOrganizationAffiliation1: OrganizationAffiliation = {
    "resourceType": "OrganizationAffiliation",
    "id": "orgrole2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: orgrole2</p><p><b>identifier</b>: member hospital = hosp32 (SECONDARY)</p><p><b>active</b>: true</p><p><b>organization</b>: <a>Monument Health Information Exchange</a></p><p><b>participatingOrganization</b>: <a>Founding Fathers Memorial Hospital</a></p><p><b>code</b>: Hospital member <span>(Details : {http://hl7.org/fhir/organization-role code 'member' = 'Member', given as 'Member'})</span></p><p><b>endpoint</b>: <a>Founding Fathers Memorial Hospital HIE endpoint</a></p></div>"
    },
    "identifier": [
      {
        "use": "secondary",
        "type": {
          "text": "member hospital"
        },
        "system": "http://example.org/www.monumentHIE.com",
        "value": "hosp32",
        "assigner": {
          "reference": "http://hl7.org/fhir/ig/vhdir/Organization/monumentHIE",
          "display": "Monument Health Information Exchange"
        }
      }
    ],
    "active": true,
    "organization": {
      "reference": "http://hl7.org/fhir/ig/vhdir/Organization/monumentHIE",
      "display": "Monument Health Information Exchange"
    },
    "participatingOrganization": {
      "reference": "http://hl7.org/fhir/ig/vhdir/Organization/foundingfathers",
      "display": "Founding Fathers Memorial Hospital"
    },
    "code": [
      {
        "coding": [
          {
            "system": "http://hl7.org/fhir/organization-role",
            "code": "member",
            "display": "Member"
          }
        ],
        "text": "Hospital member"
      }
    ],
    "endpoint": [
      {
        "reference": "http://hl7.org/fhir/ig/vhdir/Endpoint/foundingfathersHIE",
        "display": "Founding Fathers Memorial Hospital HIE endpoint"
      }
    ]
  }