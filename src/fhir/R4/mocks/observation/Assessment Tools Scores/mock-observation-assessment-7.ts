import { Observation } from "../../../types/observation.types";

// https://hl7.org/fhir/R4/observation-example-20minute-apgar-score.json.html
// Example of a 20 minute Apgar score with individual score as components

export const mockObservationAssessment7: Observation = {
    "resourceType": "Observation",
    "id": "20minute-apgar-score",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 20minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 20 minute Apgar Score <span>(Details : {SNOMED CT code '443849008' = 'Apgar score at 20 minutes', given as 'Apgar score at 20 minutes'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 10 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 2. Good color all over <span>(Details : {LOINC code 'LA6724-4' = 'Good color all over', given as 'Good color all over'}; {http://acme.ped/apgarcolor code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 2. At least 100 beats per minute <span>(Details : {LOINC code 'LA6718-6' = 'At least 100 beats per minute', given as 'At least 100 beats per minute'}; {http://acme.ped/apgarheartrate code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 2. Grimace and pulling away, cough, or sneeze during suctioning <span>(Details : {LOINC code 'LA6721-0' = 'Grimace and pulling away, cough, or sneeze during suctioning', given as 'Grimace and pulling away, cough, or sneeze during suctioning'}; {http://acme.ped/apgarreflexirritability code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 2. Active motion <span>(Details : {LOINC code 'LA6715-2' = 'Active motion', given as 'Active motion '}; {http://acme.ped/apgarmuscletone code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 2. Good, strong cry; normal rate and effort of breathing <span>(Details : {LOINC code 'LA6727-7' = 'Good, strong cry; normal rate and effort of breathing', given as 'Good, strong cry; normal rate and effort of breathing    '}; {http://acme.ped/apgarrespiratoryeffort code '2' = '2)</span></p></blockquote></div>"
    },
    "contained": [
      {
        "resourceType": "Patient",
        "id": "newborn",
        "identifier": [
          {
            "system": "http://acmehealthcare/org/mrns",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2016-05-18",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "2016-05-18T10:28:45Z"
            }
          ]
        }
      }
    ],
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "survey",
            "display": "Survey"
          }
        ],
        "text": "Survey"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "443849008",
          "display": "Apgar score at 20 minutes"
        }
      ],
      "text": "20 minute Apgar Score"
    },
    "subject": {
      "reference": "#newborn"
    },
    "effectiveDateTime": "2016-05-18T22:33:22Z",
    "performer": [
      {
        "reference": "Practitioner/example"
      }
    ],
    "valueQuantity": {
      "value": 10,
      "system": "http://unitsofmeasure.org",
      "code": "{score}"
    },
    "component": [
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249227004",
              "display": "Apgar color score"
            }
          ],
          "text": "Apgar color score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6724-4",
              "display": "Good color all over"
            },
            {
              "system": "http://acme.ped/apgarcolor",
              "code": "2"
            }
          ],
          "text": "2. Good color all over"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249223000",
              "display": "Apgar heart rate score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6718-6",
              "display": "At least 100 beats per minute"
            },
            {
              "system": "http://acme.ped/apgarheartrate",
              "code": "2"
            }
          ],
          "text": "2. At least 100 beats per minute"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249226008",
              "display": "Apgar response to stimulus score"
            }
          ],
          "text": "Apgar response to stimulus score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6721-0",
              "display": "Grimace and pulling away, cough, or sneeze during suctioning"
            },
            {
              "system": "http://acme.ped/apgarreflexirritability",
              "code": "2"
            }
          ],
          "text": "2. Grimace and pulling away, cough, or sneeze during suctioning"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249225007",
              "display": "Apgar muscle tone score"
            }
          ],
          "text": "Apgar muscle tone score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6715-2",
              "display": "Active motion "
            },
            {
              "system": "http://acme.ped/apgarmuscletone",
              "code": "2"
            }
          ],
          "text": "2. Active motion"
        }
      },
      {
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "249224006",
              "display": "Apgar respiratory effort score"
            }
          ],
          "text": "Apgar respiratory effort score"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                  "valueDecimal": 2
                }
              ],
              "system": "http://loinc.org",
              "code": "LA6727-7",
              "display": "Good, strong cry; normal rate and effort of breathing    "
            },
            {
              "system": "http://acme.ped/apgarrespiratoryeffort",
              "code": "2"
            }
          ],
          "text": "2. Good, strong cry; normal rate and effort of breathing"
        }
      }
    ]
  }