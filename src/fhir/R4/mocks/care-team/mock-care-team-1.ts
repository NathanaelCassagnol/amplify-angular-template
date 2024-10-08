import { CareTeam } from "fhir/R4/types/care-team";

// https://hl7.org/fhir/R4/careteam-example.json.html
// Care Team to address obesity

export const mockCareTeam1: CareTeam = {
    "resourceType": "CareTeam",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Care Team</div>"
    },
    "contained": [
      {
        "resourceType": "Practitioner",
        "id": "pr1",
        "name": [
          {
            "family": "Dietician",
            "given": [
              "Dorothy"
            ]
          }
        ]
      }
    ],
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "status": "active",
    "category": [
      {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "LA27976-2",
            "display": "Encounter-focused care team"
          }
        ]
      }
    ],
    "name": "Peter James Charlmers Care Plan for Inpatient Encounter",
    "subject": {
      "reference": "Patient/example",
      "display": "Peter James Chalmers"
    },
    "encounter": {
      "reference": "Encounter/example"
    },
    "period": {
      "end": "2013-01-01"
    },
    "participant": [
      {
        "role": [
          {
            "text": "responsiblePerson"
          }
        ],
        "member": {
          "reference": "Patient/example",
          "display": "Peter James Chalmers"
        }
      },
      {
        "role": [
          {
            "text": "adviser"
          }
        ],
        "member": {
          "reference": "#pr1",
          "display": "Dorothy Dietition"
        },
        "onBehalfOf": {
          "reference": "Organization/f001"
        },
        "period": {
          "end": "2013-01-01"
        }
      }
    ],
    "managingOrganization": [
      {
        "reference": "Organization/f001"
      }
    ]
  }