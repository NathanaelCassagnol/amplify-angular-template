import { ImmunizationRecommendation } from "fhir/R4/types/immunization-recommendation";

// https://hl7.org/fhir/R4/immunizationrecommendation-example-target-disease.json.html
// Example of immunizationrecommendation using a target disease

export const mockImmunizationRecommendation2: ImmunizationRecommendation = {
    "resourceType": "ImmunizationRecommendation",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Authored by Joginder Madra</div>"
    },
    "identifier": [
      {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235"
      }
    ],
    "patient": {
      "reference": "Patient/example"
    },
    "date": "2015-02-09T11:04:15.817-05:00",
    "authority": {
      "reference": "Organization/hl7"
    },
    "recommendation": [
      {
        "targetDisease": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "40468003"
            }
          ]
        },
        "forecastStatus": {
          "text": "Not Complete"
        },
        "dateCriterion": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "30981-5",
                  "display": "Earliest date to give"
                }
              ]
            },
            "value": "2015-12-01T00:00:00-05:00"
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                  "code": "recommended",
                  "display": "Recommended"
                }
              ]
            },
            "value": "2015-12-01T00:00:00-05:00"
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://example.org/fhir/CodeSystem/immunization-recommendation-date-criterion",
                  "code": "overdue",
                  "display": "Past Due Date"
                }
              ]
            },
            "value": "2016-12-28T00:00:00-05:00"
          }
        ],
        "description": "First sequence in protocol",
        "series": "Vaccination Series 1",
        "doseNumberPositiveInt": 1,
        "seriesDosesPositiveInt": 3,
        "supportingImmunization": [
          {
            "reference": "Immunization/example"
          }
        ],
        "supportingPatientInformation": [
          {
            "reference": "Observation/example"
          }
        ]
      }
    ]
  }