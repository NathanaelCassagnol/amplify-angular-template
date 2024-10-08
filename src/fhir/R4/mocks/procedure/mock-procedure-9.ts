import { Procedure } from "../../types/procedure";

// https://hl7.org/fhir/R4/procedure-example-ambulation.json.html
// Example of ambulation procedure

export const mockProcedure9: Procedure = {
    "resourceType": "Procedure",
    "id": "ambulation",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Ambulation procedure was not done</div>"
    },
    "identifier": [
      {
        "value": "12345"
      }
    ],
    "instantiatesUri": [
      "http://example.org/protocol-for-hypertension-during-pregnancy"
    ],
    "basedOn": [
      {
        "reference": "CarePlan/preg",
        "display": "Maternity care plan"
      }
    ],
    "status": "not-done",
    "statusReason": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "398254007",
          "display": "  Pre-eclampsia (disorder)"
        }
      ],
      "text": "Pre-eclampsia"
    },
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "62013009",
          "display": "Ambulating patient (procedure)"
        }
      ],
      "text": "Ambulation"
    },
    "subject": {
      "reference": "Patient/example"
    },
    "performer": [
      {
        "actor": {
          "reference": "Practitioner/f204",
          "display": "Carla Espinosa"
        },
        "onBehalfOf": {
          "reference": "Organization/f001",
          "display": "University Medical Hospital"
        }
      }
    ],
    "location": {
      "reference": "Location/1",
      "display": "Burgers University Medical Center, South Wing, second floor"
    },
    "reasonReference": [
      {
        "reference": "Observation/blood-pressure",
        "display": "Blood Pressure"
      }
    ]
  }