import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example-GPVisit.json.html
// Encounter-specific care plan for GP visit

export const mockCarePlan4: CarePlan = {
    "resourceType": "CarePlan",
    "id": "gpvisit",
    "text": {
      "status": "additional",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>  Represents the flow of a patient within a practice. The plan is created when\n        they arrive and represents the 'care' of the patient over the course of that encounter.\n        They first see the nurse for basic observations (BP, pulse, temp) then the doctor for\n        the consultation and finally the nurse again for a tetanus immunization. As the plan is\n        updated (e.g. a new activity added), different versions of the plan exist, and workflow timings\n        for reporting can be gained by examining the plan history. This example is the version after\n        seeing the doctor, and waiting for the nurse.The plan can either be created 'ad hoc' and modified as\n        the parient progresses, or start with a standard template (which can, of course, be altered to suit the patient.</p>\n    </div>"
    },
    "contained": [
      {
        "resourceType": "Condition",
        "id": "p1",
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active"
            }
          ]
        },
        "verificationStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              "code": "confirmed"
            }
          ]
        },
        "code": {
          "text": "Overseas encounter"
        },
        "subject": {
          "reference": "Patient/100",
          "display": "Peter James Chalmers"
        }
      },
      {
        "resourceType": "CareTeam",
        "id": "careteam",
        "participant": [
          {
            "id": "part1",
            "role": [
              {
                "coding": [
                  {
                    "system": "http://example.org/local",
                    "code": "nur"
                  }
                ],
                "text": "nurse"
              }
            ],
            "member": {
              "reference": "Practitioner/13",
              "display": "Nurse Nancy"
            }
          },
          {
            "id": "part2",
            "role": [
              {
                "coding": [
                  {
                    "system": "http://example.org/local",
                    "code": "doc"
                  }
                ],
                "text": "doctor"
              }
            ],
            "member": {
              "reference": "Practitioner/14",
              "display": "Doctor Dave"
            }
          }
        ]
      },
      {
        "resourceType": "Goal",
        "id": "goal",
        "lifecycleStatus": "planned",
        "description": {
          "text": "Complete consultation"
        },
        "subject": {
          "reference": "Patient/100",
          "display": "Peter James Chalmers"
        }
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/100",
      "display": "Peter James Chalmers"
    },
    "period": {
      "start": "2013-01-01T10:30:00+00:00"
    },
    "careTeam": [
      {
        "reference": "#careteam"
      }
    ],
    "addresses": [
      {
        "reference": "#p1",
        "display": "obesity"
      }
    ],
    "goal": [
      {
        "reference": "#goal"
      }
    ],
    "activity": [
      {
        "outcomeReference": [
          {
            "reference": "Encounter/example"
          }
        ],
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/local",
                "code": "nursecon"
              }
            ],
            "text": "Nurse Consultation"
          },
          "status": "completed",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2013-01-01T10:38:00+00:00",
            "end": "2013-01-01T10:50:00+00:00"
          },
          "performer": [
            {
              "reference": "Practitioner/13",
              "display": "Nurse Nancy"
            }
          ]
        }
      },
      {
        "detail": {
          "kind": "Appointment",
          "code": {
            "coding": [
              {
                "system": "http://example.org/local",
                "code": "doccon"
              }
            ],
            "text": "Doctor Consultation"
          },
          "status": "scheduled",
          "doNotPerform": false,
          "performer": [
            {
              "reference": "Practitioner/14",
              "display": "Doctor Dave"
            }
          ]
        }
      }
    ]
  }