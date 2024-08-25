import { HealthcareService } from "../../types/healthcare-service";

// https://hl7.org/fhir/R4/healthcareservice-example.json.html
// Example of healthcareservice

export const mockHealthcareService: HealthcareService = {
    "resourceType": "HealthcareService",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:15am - 9:30am: <b>Busy</b> Physiotherapy\n\t\t</div>"
    },
    "contained": [
      {
        "resourceType": "Location",
        "id": "DenBurg",
        "description": "Greater Denburg area",
        "mode": "instance",
        "physicalType": {
          "coding": [
            {
              "code": "area",
              "display": "Area"
            }
          ]
        }
      }
    ],
    "identifier": [
      {
        "system": "http://example.org/shared-ids",
        "value": "HS-12"
      }
    ],
    "active": true,
    "providedBy": {
      "reference": "Organization/f001",
      "display": "Burgers University Medical Center"
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/service-category",
            "code": "8",
            "display": "Counselling"
          }
        ],
        "text": "Counselling"
      }
    ],
    "type": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394913002",
            "display": "Psychotherapy"
          }
        ]
      },
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "394587001",
            "display": "Psychiatry"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "47505003",
            "display": "Posttraumatic stress disorder"
          }
        ]
      }
    ],
    "location": [
      {
        "reference": "Location/1"
      }
    ],
    "name": "Consulting psychologists and/or psychology services",
    "comment": "Providing Specialist psychology services to the greater Den Burg area, many years of experience dealing with PTSD issues",
    "extraDetails": "Several assessments are required for these specialist services, and the waiting times can be greater than 3 months at times. Existing patients are prioritized when requesting appointments on the schedule.",
    "telecom": [
      {
        "system": "phone",
        "value": "(555) silent",
        "use": "work"
      },
      {
        "system": "email",
        "value": "directaddress@example.com",
        "use": "work"
      }
    ],
    "coverageArea": [
      {
        "reference": "#DenBurg",
        "display": "Greater Denburg area"
      }
    ],
    "serviceProvisionCode": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/service-provision-conditions",
            "code": "cost",
            "display": "Fees apply"
          }
        ]
      }
    ],
    "eligibility": [
      {
        "code": {
          "coding": [
            {
              "display": "DVA Required"
            }
          ]
        },
        "comment": "Evidence of application for DVA status may be sufficient for commencing assessment"
      }
    ],
    "program": [
      {
        "text": "PTSD outreach"
      }
    ],
    "characteristic": [
      {
        "coding": [
          {
            "display": "Wheelchair access"
          }
        ]
      }
    ],
    "referralMethod": [
      {
        "coding": [
          {
            "code": "phone",
            "display": "Phone"
          }
        ]
      },
      {
        "coding": [
          {
            "code": "fax",
            "display": "Fax"
          }
        ]
      },
      {
        "coding": [
          {
            "code": "elec",
            "display": "Secure Messaging"
          }
        ]
      },
      {
        "coding": [
          {
            "code": "semail",
            "display": "Secure Email"
          }
        ]
      }
    ],
    "appointmentRequired": false,
    "availableTime": [
      {
        "daysOfWeek": [
          "wed"
        ],
        "allDay": true
      },
      {
        "daysOfWeek": [
          "mon",
          "tue",
          "thu",
          "fri"
        ],
        "availableStartTime": "08:30:00",
        "availableEndTime": "05:30:00"
      },
      {
        "daysOfWeek": [
          "sat",
          "fri"
        ],
        "availableStartTime": "09:30:00",
        "availableEndTime": "04:30:00"
      }
    ],
    "notAvailable": [
      {
        "description": "Christmas/Boxing Day",
        "during": {
          "start": "2015-12-25",
          "end": "2015-12-26"
        }
      },
      {
        "description": "New Years Day",
        "during": {
          "start": "2016-01-01",
          "end": "2016-01-01"
        }
      }
    ],
    "availabilityExceptions": "Reduced capacity is available during the Christmas period",
    "endpoint": [
      {
        "reference": "Endpoint/example"
      }
    ]
  }