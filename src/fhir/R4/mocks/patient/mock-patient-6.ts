import { Bundle } from "../../types/bundle.types";
import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-examples-general.json.html
// Stock people (defined by HL7 publishing)

export const mockPatient6Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "b248b1b2-1686-4b94-9936-37d7a5f94b51",
    "meta": {
      "lastUpdated": "2012-05-29T23:45:32Z"
    },
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://hl7.org/fhir/Patient/1",
        "resource": {
          "resourceType": "Patient",
          "id": "1",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Everywoman, Eve. SSN:\n            444222222</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444222222"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Everywoman",
              "given": [
                "Eve"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2003",
              "use": "work"
            }
          ],
          "gender": "female",
          "birthDate": "1973-05-31",
          "address": [
            {
              "use": "home",
              "line": [
                "2222 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/2",
        "resource": {
          "resourceType": "Patient",
          "id": "2",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Everyman, Adam. SSN:\n            444333333</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444333333"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Everyman",
              "given": [
                "Adam"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2004",
              "use": "work"
            }
          ],
          "gender": "male",
          "address": [
            {
              "use": "home",
              "line": [
                "2222 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/3",
        "resource": {
          "resourceType": "Patient",
          "id": "3",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Kidd, Kari. SSN:\n            444555555</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444555555"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Kidd",
              "given": [
                "Kari"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2005",
              "use": "work"
            }
          ],
          "gender": "female",
          "address": [
            {
              "use": "home",
              "line": [
                "2222 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/4",
        "resource": {
          "resourceType": "Patient",
          "id": "4",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nuclear, Nancy. SSN:\n            444114567</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444114567"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Nuclear",
              "given": [
                "Nancy"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-5001",
              "use": "work"
            }
          ],
          "gender": "female",
          "address": [
            {
              "use": "home",
              "line": [
                "6666 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/5",
        "resource": {
          "resourceType": "Patient",
          "id": "5",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nuclear, Neville. SSN:\n            444111234</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444111234"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Nuclear",
              "given": [
                "Neville"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-5001",
              "use": "work"
            }
          ],
          "gender": "male",
          "address": [
            {
              "use": "home",
              "line": [
                "6666 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/6",
        "resource": {
          "resourceType": "Patient",
          "id": "6",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nuclear, Ned. SSN:\n            444113456</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444113456"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Nuclear",
              "given": [
                "Ned"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-5001",
              "use": "work"
            }
          ],
          "gender": "male",
          "address": [
            {
              "use": "home",
              "line": [
                "6666 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/7",
        "resource": {
          "resourceType": "Patient",
          "id": "7",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nuclear, Nelda. SSN:\n            444112345</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444112345"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Nuclear",
              "given": [
                "Nelda"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-5001",
              "use": "work"
            }
          ],
          "gender": "female",
          "address": [
            {
              "use": "home",
              "line": [
                "6666 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/8",
        "resource": {
          "resourceType": "Patient",
          "id": "8",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Mum, Martha. SSN:\n            444666666</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444666666"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Mum",
              "given": [
                "Martha"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2006",
              "use": "work"
            }
          ],
          "gender": "female",
          "address": [
            {
              "use": "home",
              "line": [
                "4444 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/9",
        "resource": {
          "resourceType": "Patient",
          "id": "9",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Sons, Stuart. SSN:\n            444777777</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444777777"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Sons",
              "given": [
                "Stuart"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2007",
              "use": "work"
            }
          ],
          "gender": "other",
          "_gender": {
            "extension": [
              {
                "url": "http://example.org/Profile/administrative-status",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://example.org/fhir/v2/administrative-status",
                      "code": "FTM",
                      "display": "female-to-male"
                    }
                  ]
                }
              }
            ]
          },
          "deceasedDateTime": "2002-08-24",
          "address": [
            {
              "use": "home",
              "line": [
                "4444 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/10",
        "resource": {
          "resourceType": "Patient",
          "id": "10",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Betterhalf, Boris. SSN:\n            444888888</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444888888"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Betterhalf",
              "given": [
                "Boris"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2008",
              "use": "work"
            }
          ],
          "gender": "male",
          "address": [
            {
              "use": "home",
              "line": [
                "2222 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/11",
        "resource": {
          "resourceType": "Patient",
          "id": "11",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Relative, Ralph. SSN:\n            444999999</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "444999999"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Relative",
              "given": [
                "Ralph"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2009",
              "use": "work"
            }
          ],
          "gender": "male",
          "address": [
            {
              "use": "home",
              "line": [
                "4444 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Patient/12",
        "resource": {
          "resourceType": "Patient",
          "id": "12",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Contact, Carrie. SSN:\n            555222222</div>"
          },
          "identifier": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "SS"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-ssn",
              "value": "555222222"
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Contact",
              "given": [
                "Carrie"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-2010",
              "use": "work"
            }
          ],
          "gender": "female",
          "address": [
            {
              "use": "home",
              "line": [
                "5555 Home Street"
              ]
            }
          ],
          "managingOrganization": {
            "reference": "Organization/hl7"
          }
        }
      }
    ]
  }