import { CarePlan } from "fhir/R4/types/care-plan";

// https://hl7.org/fhir/R4/careplan-example-integrated.json.html
// Integrated care plan with multiple goals & conditions (from Mayo)

export const mockCarePlan3: CarePlan = {
    "resourceType": "CarePlan",
    "id": "integrate",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>Patient family is not ready to commit to goal setting at this time.  Goal setting will be addressed in the future</p>\n      <table>\n        <thead>\n          <tr>\n            <th>Start Date</th>\n            <th>Goal</th>\n            <th>Action Steps</th>\n            <th>Status</th>\n            <th>Date Last Updated</th>\n            <th>Comments</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>10 Sep 2012</td>\n            <td>Eve will lose weight and reduce her GERDS symptoms by improving her diet</td>\n            <td>Eve will review photos of high and low density foods and share with her parents</td>\n            <td>New Goal</td>\n            <td>10 Sep 2012</td>\n            <td>9/10/12 Eve eats one meal a day with her parents</td>\n          </tr>\n          <tr>\n            <td>10 Sep 2012</td>\n            <td>Eve will lose weight and reduce her GERDS symptoms by improving her diet</td>\n            <td>Eve will ask her dad to asist her to put the head of her bed on blocks</td>\n            <td>New Goal</td>\n            <td>10 Sep 2012</td>\n            <td>9/10/12 Eve will sleep in her bed more often than the couch</td>\n          </tr>\n          <tr>\n            <td>10 Sep 2012</td>\n            <td>Eve will improve her GERDS symptoms</td>\n            <td>Eve will reduce her intake of coffee and chocolate</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td/>\n          </tr>\n          <tr>\n            <td>27 Aug 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will walk her friend's dog up and down a big hill 15-30 minutes 3 days a week</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td>8/27/12 Eve would like to try for 5 days a week.  9/10/12 Eve is still walking the dogs.</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will walk 3 blocks to her parents house twice a week</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td>8/13/12 Eve walked 4 times the last week.  9/10/12 Eve did not walk to her parents the last week, but has plans to start again</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will us a calendar to check off after medications are taken</td>\n            <td>In Process</td>\n            <td>13 Aug 2012</td>\n            <td/>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will restart her light treatments</td>\n            <td>Eve will use her lights MWF after her shower for 3 minutes</td>\n            <td>In Process</td>\n            <td>27 Aug 2012</td>\n            <td>8/13/12 After restarting the vinegar soaks the psoriasis is improved and Eve plans to treat the remainder with light treatments.  She plans to start this week.  8/27/12 Since her skin is improved Eve has not been using the light treatment as often, maybe once a week.  She would like to increase to 3 times a week again</td>\n          </tr>\n          <tr>\n            <td>10 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will use a calendar of a chart to help her remember when to take her medications</td>\n            <td>In Process</td>\n            <td>10 Sep 2012</td>\n            <td>7/23/12 Eve created a chart as a reminer to take the medications that do not fit in her pill box</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will start using stretch bands and one step 2 days a week Mon/Wed 6-7am and maybe Friday afternoon</td>\n            <td>On-Hold</td>\n            <td>23 Aug 2012</td>\n            <td>7/30/12 will be able to esume exercise.  8/13/12 Eve prefers to focus on walking at this time</td>\n          </tr>\n          <tr>\n            <td>10 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will match a printed medication worksheet with the medication bottles at home</td>\n            <td>Completed</td>\n            <td>23 Jul 2012</td>\n            <td/>\n          </tr>\n          <tr>\n            <td>10 Jul 2012</td>\n            <td>Eve will set up her medications and take as prescribed</td>\n            <td>Eve will get a medication box to sort her pills.  She will have one for scheduled medications and one for as needed</td>\n            <td>Completed</td>\n            <td>16 Jul 2012</td>\n            <td>7/16/12 Eve now has some of her medications set up in pill packs by her pharmacist</td>\n          </tr>\n          <tr>\n            <td>23 Jul 2012</td>\n            <td>Eve will increase her energy by being more active</td>\n            <td>Eve will open &quot;The Firm&quot; DVD workout package and listen to it</td>\n            <td>Discontinued</td>\n            <td>13 Aug 2012</td>\n            <td>7/30/12 Eve will be able to resume exercise on 7/30/12.  8/13/12 -hold until &quot;less busy&quot;</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"
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
          "text": "GERDS"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Condition",
        "id": "p2",
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
          "text": "Obesity"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Condition",
        "id": "p3",
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
          "text": "Psoriasis"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g1",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will lose weight and reduce her GERDS symptoms by improving her diet"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g2",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will improve her GERDS symptoms"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g3",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will increase her energy by being more active"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g4",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will set up her medications and take as prescribed"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      },
      {
        "resourceType": "Goal",
        "id": "g5",
        "lifecycleStatus": "active",
        "description": {
          "text": "Eve will restart her light treatments"
        },
        "subject": {
          "reference": "Patient/1",
          "display": "Eve Everywoman"
        }
      }
    ],
    "status": "active",
    "intent": "plan",
    "subject": {
      "reference": "Patient/1",
      "display": "Eve Everywoman"
    },
    "addresses": [
      {
        "reference": "#p1",
        "display": "GERDS"
      },
      {
        "reference": "#p2",
        "display": "Obesity"
      },
      {
        "reference": "#p3",
        "display": "Psoriasis"
      }
    ],
    "goal": [
      {
        "reference": "#g1"
      },
      {
        "reference": "#g2"
      },
      {
        "reference": "#g3"
      },
      {
        "reference": "#g4"
      },
      {
        "reference": "#g5"
      }
    ],
    "activity": [
      {
        "progress": [
          {
            "time": "2012-09-10",
            "text": "Eve eats one meal a day with her parents"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g1"
            }
          ],
          "status": "not-started",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-09-10"
          },
          "description": "Eve will review photos of high and low density foods and share with her parents"
        }
      },
      {
        "progress": [
          {
            "time": "2012-09-10",
            "text": "Eve will sleep in her bed more often than the couch"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "kind": "CommunicationRequest",
          "goal": [
            {
              "reference": "#g1"
            }
          ],
          "status": "not-started",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-09-10"
          },
          "description": "Eve will ask her dad to asist her to put the head of her bed on blocks"
        }
      },
      {
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g2"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-09-10"
          },
          "description": "Eve will reduce her intake of coffee and chocolate"
        }
      },
      {
        "progress": [
          {
            "time": "2012-08-27",
            "text": "Eve would like to try for 5 days a week."
          },
          {
            "time": "2012-09-10",
            "text": "Eve is still walking the dogs."
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-08-27"
          },
          "description": "Eve will walk her friend's dog up and down a big hill 15-30 minutes 3 days a week"
        }
      },
      {
        "progress": [
          {
            "time": "2012-08-13",
            "text": "Eve walked 4 times the last week."
          },
          {
            "time": "2012-09-10",
            "text": "Eve did not walk to her parents the last week, but has plans to start again"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will walk 3 blocks to her parents house twice a week"
        }
      },
      {
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-13"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will use a calendar to check off after medications are taken"
        }
      },
      {
        "progress": [
          {
            "time": "2012-08-13",
            "text": "After restarting the vinegar soaks the psoriasis is improved and Eve plans to treat the remainder with light treatments.  She plans to start this week."
          },
          {
            "time": "2012-08-27",
            "text": "Since her skin is improved Eve has not been using the light treatment as often, maybe once a week.  She would like to increase to 3 times a week again"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-27"
            }
          ],
          "goal": [
            {
              "reference": "#g5"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will use her lights MWF after her shower for 3 minutes"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-23",
            "text": "Eve created a chart as a reminer to take the medications that do not fit in her pill box"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-09-10"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "in-progress",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-10"
          },
          "description": "Eve will use a calendar of a chart to help her remember when to take her medications"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-30",
            "text": "Will be able to esume exercise."
          },
          {
            "time": "2012-08-13",
            "text": "Eve prefers to focus on walking at this time"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-23"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "on-hold",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will start using stretch bands and one step 2 days a week Mon/Wed 6-7am and maybe Friday afternoon"
        }
      },
      {
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-07-23"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "completed",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-10"
          },
          "description": "Eve will match a printed medication worksheet with the medication bottles at home"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-16",
            "text": "Eve now has some of her medications set up in pill packs by her pharmacist"
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-07-16"
            }
          ],
          "goal": [
            {
              "reference": "#g4"
            }
          ],
          "status": "completed",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-10"
          },
          "description": "Eve will get a medication box to sort her pills.  She will have one for scheduled medications and one for as needed"
        }
      },
      {
        "progress": [
          {
            "time": "2012-07-12",
            "text": "Eve will be able to resume exercise on 7/30/12"
          },
          {
            "time": "2012-08-13",
            "text": "hold until \"less busy\""
          }
        ],
        "detail": {
          "extension": [
            {
              "url": "http://example.org/fhir/StructureDefinition/RevisionDate",
              "valueDate": "2012-08-13"
            }
          ],
          "goal": [
            {
              "reference": "#g3"
            }
          ],
          "status": "on-hold",
          "doNotPerform": false,
          "scheduledPeriod": {
            "start": "2012-07-23"
          },
          "description": "Eve will open \"The Firm\" DVD workout package and listen to it"
        }
      }
    ],
    "note": [
      {
        "text": "Patient family is not ready to commit to goal setting at this time.  Goal setting will be addressed in the future"
      }
    ]
  }