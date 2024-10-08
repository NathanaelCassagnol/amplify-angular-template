import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-animal.json.html
// An example of an animal

export const mockPatient10: Patient = {
    "resourceType": "Patient",
    "id": "animal",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <table>\n        \n        <tbody>\n          \n          <tr>\n            \n            <td>Id</td>\n            \n            <td>Kenzi (Dog: Golden Retriever)</td>\n          \n          </tr>\n          \n          <tr>\n            \n            <td>Owner</td>\n            \n            <td>Peter Chalmers, 534 Erewhon, Pleasantville, Vic, 3999</td>\n          \n          </tr>\n          \n          <tr>\n            \n            <td>Contacts</td>\n            \n            <td>Work: (03) 5555 6473</td>\n          \n          </tr>\n          \n          <tr>\n            \n            <td>Id</td>\n            \n            <td>Dog Tag: 1234123 (Maroondah City Council)</td>\n          \n          </tr>\n        \n        </tbody>\n      \n      </table>\n    \n    </div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-animal",
        "extension": [
          {
            "url": "species",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://hl7.org/fhir/animal-species",
                  "code": "canislf",
                  "display": "Dog"
                }
              ]
            }
          },
          {
            "url": "breed",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "58108001",
                  "display": "Golden retriever"
                },
                {
                  "system": "http://example.org/fhir/CodeSystem/animal-breed",
                  "code": "gret",
                  "display": "Golden Retriever"
                }
              ]
            }
          },
          {
            "url": "genderStatus",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://hl7.org/fhir/animal-genderstatus",
                  "code": "neutered"
                }
              ]
            }
          }
        ]
      }
    ],
    "identifier": [
      {
        "type": {
          "text": "Dog Tag"
        },
        "system": "http://www.maroondah.vic.gov.au/AnimalRegFees.aspx",
        "value": "1234123",
        "period": {
          "start": "2010-05-31"
        },
        "assigner": {
          "display": "Maroondah City Council"
        }
      }
    ],
    "active": true,
    "name": [
      {
        "use": "usual",
        "given": [
          "Kenzi"
        ]
      }
    ],
    "gender": "female",
    "birthDate": "2010-03-23",
    "contact": [
      {
        "relationship": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                "code": "C"
              }
            ]
          }
        ],
        "name": {
          "family": "Chalmers",
          "given": [
            "Peter",
            "James"
          ]
        },
        "telecom": [
          {
            "system": "phone",
            "value": "(03) 5555 6473",
            "use": "work"
          }
        ]
      }
    ],
    "managingOrganization": {
      "display": "Pete's Vetinary Services"
    }
  }