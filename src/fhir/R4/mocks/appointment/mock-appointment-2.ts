import { Appointment } from "../../types/appointment";

// https://hl7.org/fhir/R4/appointment-example2doctors.json.html
// Appointment between 2 doctors to discuss MRI results

export const mockAppointment2: Appointment = {
    "resourceType": "Appointment",
    "id": "2docs",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brian MRI results discussion</div>"
    },
    "status": "booked",
    "serviceCategory": [
      {
        "coding": [
          {
            "system": "http://example.org/service-category",
            "code": "gp",
            "display": "General Practice"
          }
        ]
      }
    ],
    "serviceType": [
      {
        "coding": [
          {
            "code": "52",
            "display": "General Discussion"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394814009",
            "display": "General practice"
          }
        ]
      }
    ],
    "appointmentType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0276",
          "code": "WALKIN",
          "display": "A previously unscheduled walk-in visit"
        }
      ]
    },
    "priority": 5,
    "description": "Discussion about Peter Chalmers MRI results",
    "supportingInformation": [
      {
        "reference": "DiagnosticReport/ultrasound"
      }
    ],
    "start": "2013-12-09T09:00:00Z",
    "end": "2013-12-09T11:00:00Z",
    "comment": "Clarify the results of the MRI to ensure context of test was correct",
    "participant": [
      {
        "actor": {
          "reference": "Patient/example",
          "display": "Peter James Chalmers"
        },
        "required": "information-only",
        "status": "accepted"
      },
      {
        "actor": {
          "reference": "Practitioner/example",
          "display": "Dr Adam Careful"
        },
        "required": "required",
        "status": "accepted"
      },
      {
        "actor": {
          "reference": "Practitioner/f202",
          "display": "Luigi Maas"
        },
        "required": "required",
        "status": "accepted"
      },
      {
        "actor": {
          "display": "Phone Call"
        },
        "required": "information-only",
        "status": "accepted"
      }
    ]
  }