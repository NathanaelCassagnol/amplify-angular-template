import { Person } from "../../types/person.types";

// https://hl7.org/fhir/R4/person-provider-directory.json.html
// Provider Directory Example

export const mockPersonProviderDirectory: Person = {
    "resourceType": "Person",
    "id": "pd",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>Name</td>\n            <td>\n              Harold <b>Hippocrates</b>\n            </td>\n          </tr>\n          <tr>\n            <td>Address</td>\n            <td>1003 Healthcare Drive, Northfield, MN</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "SS"
            }
          ]
        },
        "system": "http://hl7.org/fhir/sid/us-ssn",
        "value": "444444444"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": "Hippocrates",
        "given": [
          "Harold"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "555-555-1003",
        "use": "work"
      }
    ],
    "gender": "male",
    "birthDate": "1959-04-22",
    "address": [
      {
        "use": "home",
        "line": [
          "1003 Healthcare Drive"
        ],
        "city": "Northfield",
        "state": "MN"
      }
    ],
    "managingOrganization": {
      "reference": "http://www.northfield-regional.com/Organization/2",
      "display": "Northfield Regional Physician Directory"
    },
    "active": true,
    "link": [
      {
        "target": {
          "reference": "http://www.goodhealth.com/Practitioner/98574",
          "display": "Dr. Harold Hippocrates"
        },
        "assurance": "level2"
      },
      {
        "target": {
          "reference": "http://www.acme-medical.com/Practitioner/ab34d",
          "display": "Harold Hippocrates, MD"
        },
        "assurance": "level2"
      }
    ]
  }