import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/practitionerrole-examples-general.json.html
// HL7 Defined Practitioner Role examples

export const mockPractitionerRole2Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "3ad0687e-f477-468c-afd5-fcc2bf897808",
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f003-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f003-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Marc Versteegh<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f003",
            "display": "Marc Versteegh"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.011",
                  "display": "Cardiothoracal surgery"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/example-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "example-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Adam Careful<br/><span style=\"color: gray;\">location:</span> South Wing, second floor<br/><span style=\"color: gray;\">role:</span> RP<br/><span style=\"color: gray;\">Email:</span> dr.adam.careful@example.org<br/><span style=\"color: gray;\">identifier:</span> 52\n          </div>"
          },
          "identifier": [
            {
              "system": "http://example.org/role-identifier",
              "value": "52"
            }
          ],
          "period": {
            "start": "2012-01-01",
            "end": "2012-03-31"
          },
          "practitioner": {
            "reference": "Practitioner/example",
            "display": "Adam Careful"
          },
          "organization": {
            "reference": "Organization/f001"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0286",
                  "code": "RP"
                }
              ]
            }
          ],
          "location": [
            {
              "reference": "Location/1",
              "display": "South Wing, second floor"
            }
          ],
          "healthcareService": [
            {
              "reference": "HealthcareService/example"
            }
          ],
          "telecom": [
            {
              "system": "email",
              "value": "dr.adam.careful@example.org"
            }
          ],
          "endpoint": [
            {
              "reference": "Endpoint/example"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/example-1",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "example-1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Adam Careful<br/><span style=\"color: gray;\">organization:</span> Good Health Clinic\n          </div>"
          },
          "period": {
            "start": "2012-01-01"
          },
          "practitioner": {
            "reference": "Practitioner/example",
            "display": "Adam Careful"
          },
          "organization": {
            "reference": "Organization/2",
            "display": "Good Health Clinic"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/example-2",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "example-2",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Adam Careful<br/>\n            <span style=\"color: gray;\">organization:</span> Good Health Clinic<br/>\n            <span style=\"color: gray;\">role:</span> On call physcologist\n          </div>"
          },
          "period": {
            "start": "2016-07-01",
            "end": "2017-06-30"
          },
          "practitioner": {
            "reference": "Practitioner/example",
            "display": "Adam Careful"
          },
          "organization": {
            "reference": "Organization/2",
            "display": "Good Health Clinic"
          },
          "code": [
            {
              "text": "On call physcologist"
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555 123456",
              "use": "mobile"
            }
          ],
          "availableTime": [
            {
              "daysOfWeek": [
                "sat",
                "sun"
              ],
              "allDay": true
            }
          ],
          "availabilityExceptions": "Public Holidays"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f007-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f007-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Simone Heps<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f007",
            "display": "Simone Heps"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.015",
                  "display": "Physician"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f004-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f004-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Ronald Briet<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f004",
            "display": "Ronald Briet"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.018",
                  "display": "Ear-, Nose and Throat"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/xcda1-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "xcda1-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Sherry Dopplemeyer<br/><span style=\"color: gray;\">organization:</span> Cleveland Clinic<br/><span style=\"color: gray;\">role:</span> Primary Surgon\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/xcda1",
            "display": "Sherry Dopplemeyer"
          },
          "organization": {
            "display": "Cleveland Clinic"
          },
          "code": [
            {
              "text": "Primary Surgon"
            }
          ],
          "specialty": [
            {
              "text": "Orthopedic"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f202-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f202-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Luigi Maas<br/><span style=\"color: gray;\">organization:</span> AUMC<br/><span style=\"color: gray;\">role:</span> Electronic laboratory reporting\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f202",
            "display": "Luigi Maas"
          },
          "organization": {
            "reference": "Organization/f201",
            "display": "AUMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "33526004",
                  "display": "Electronic laboratory reporting"
                }
              ]
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "159285000",
                  "display": "Medical laboratory technician"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f201-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f201-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Dokter Bronsig<br/><span style=\"color: gray;\">organization:</span> AUMC<br/><span style=\"color: gray;\">role:</span> Implementation of planned interventions\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f201",
            "display": "Dokter Bronsig"
          },
          "organization": {
            "reference": "Organization/f201",
            "display": "AUMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "225304007",
                  "display": "Implementation of planned interventions"
                }
              ]
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "310512001",
                  "display": "Medical oncologist"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f203-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f203-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Juri van Gelder<br/><span style=\"color: gray;\">organization:</span> AUMC<br/><span style=\"color: gray;\">role:</span> Physical therapist\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f203",
            "display": "Juri van Gelder"
          },
          "organization": {
            "reference": "Organization/f201",
            "display": "AUMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "36682004",
                  "display": "Physical therapist"
                }
              ]
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "410158009",
                  "display": "Assess physical therapist service"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f005-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f005-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Langeveld Anne<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f005",
            "display": "Langeveld Anne"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.018",
                  "display": "Keel- neus- en oorarts"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f006-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f006-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Rob van den Berk<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f006",
            "display": "Rob van den Berk"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "17.000",
                  "display": "Pharmacist"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f001-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f001-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Eric van den broek<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f001",
            "display": "Eric van den broek"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.018",
                  "display": "Ear-, Nose and Throat"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f002-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f002-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Pieter Voigt<br/><span style=\"color: gray;\">organization:</span> BMC<br/><span style=\"color: gray;\">role:</span> Care role\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f002",
            "display": "Pieter Voigt"
          },
          "organization": {
            "reference": "Organization/f001",
            "display": "BMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.000",
                  "display": "Arts"
                }
              ],
              "text": "Care role"
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "urn:oid:2.16.840.1.113883.2.4.15.111",
                  "code": "01.011",
                  "display": "Cardiothoracal surgery"
                }
              ],
              "text": "specialization"
            }
          ]
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/PractitionerRole/f204-0",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "f204-0",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n            <span style=\"color: gray;\">practitioner:</span> Carla Espinosa<br/><span style=\"color: gray;\">organization:</span> AUMC<br/><span style=\"color: gray;\">role:</span> Renal nurse\n          </div>"
          },
          "practitioner": {
            "reference": "Practitioner/f204",
            "display": "Carla Espinosa"
          },
          "organization": {
            "reference": "Organization/f201",
            "display": "AUMC"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "224565004",
                  "display": "Renal nurse"
                }
              ]
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "9632001",
                  "display": "Nursing procedure"
                }
              ]
            }
          ]
        }
      }
    ]
  }