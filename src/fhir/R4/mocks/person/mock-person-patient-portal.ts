import { Person } from "../../types/person.types";

// https://hl7.org/fhir/R4/person-patient-portal.json.html
// Patient Portal Example

export const mockPersonPatientPortal: Person = {
    "resourceType": "Person",
    "id": "pp",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>Eve Marie <b>Everywoman</b></td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>2086 College St, Sandusky, OH, 44870</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "DL"
            }
          ],
          "text": "Ohio driver license"
        },
        "system": "urn:oid:2.16.840.1.113883.4.3.39",
        "value": "TL545786",
        "period": {
          "start": "2041-09-23"
        },
        "assigner": {
          "display": "Ohio Bureau of Motor Vehicles"
        }
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Everywoman",
        "given": [
          "Eve",
          "Marie"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "(621)-479-9743",
        "use": "home"
      }
    ],
    "gender": "female",
    "birthDate": "1974-03-07",
    "address": [
      {
        "use": "home",
        "line": [
          "2086 College St"
        ],
        "city": "Sandusky",
        "state": "OH",
        "postalCode": "44870",
        "country": "USA"
      }
    ],
    "managingOrganization": {
      "reference": "http://www.goodhealth.com/Organization/12",
      "display": "Goodhealth Patient Portal"
    },
    "active": true,
    "link": [
      {
        "target": {
          "reference": "http://www.goodhealth.com/Patient/98574",
          "display": "Eve Everywoman"
        },
        "assurance": "level3"
      },
      {
        "target": {
          "reference": "http://www.acme-medical.com/Patient/ab34d",
          "display": "Eve Marie Everywoman"
        },
        "assurance": "level2"
      }
    ]
  }