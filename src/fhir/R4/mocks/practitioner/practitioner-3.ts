import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/practitioner-examples-general.json.html
// HL7 Defined Practitioner Examples

export const mockPractitioner3Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "3ad0687e-f477-468c-afd5-fcc2bf897809",
    "meta": {
      "lastUpdated": "2012-05-29T23:45:32Z"
    },
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/1",
        "resource": {
          "resourceType": "Practitioner",
          "id": "1",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr. Beverly Crusher</div>"
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
              "value": "333333333"
            },
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "NPI"
                  }
                ]
              },
              "system": "http://hl7.org/fhir/sid/us-npi",
              "value": "1122334499"
            },
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "DEA"
                  }
                ]
              },
              "system": "https://www.deanumber.com/",
              "value": "F91234567-001AB"
            }
          ],
          "name": [
            {
              "family": "Beverly",
              "given": [
                "Crusher"
              ],
              "prefix": [
                "Dr"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/13",
        "resource": {
          "resourceType": "Practitioner",
          "id": "13",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Seven, Henry. SSN:\n            333333333</div>"
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
              "value": "333333333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Seven",
              "given": [
                "Henry"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1002",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1002 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/14",
        "resource": {
          "resourceType": "Practitioner",
          "id": "14",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Assigned, Amanda. SSN:\n            33344444</div>"
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
              "value": "33344444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Assigned",
              "given": [
                "Amanda"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1021",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1020 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/15",
        "resource": {
          "resourceType": "Practitioner",
          "id": "15",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Hippocrates, Harold. SSN:\n            444444444</div>"
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
              "value": "444444444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Hippocrates",
              "given": [
                "Harold"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1003",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1003 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/16",
        "resource": {
          "resourceType": "Practitioner",
          "id": "16",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Primary, Patricia. SSN:\n            555555555</div>"
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
              "value": "555555555"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Primary",
              "given": [
                "Patricia"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1004",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1004 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/17",
        "resource": {
          "resourceType": "Practitioner",
          "id": "17",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Admit, Alan. SSN:\n            666666666</div>"
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
              "value": "666666666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Admit",
              "given": [
                "Alan"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1005",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1005 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/18",
        "resource": {
          "resourceType": "Practitioner",
          "id": "18",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Attend, Aaron. SSN:\n            777777777</div>"
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
              "value": "777777777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Attend",
              "given": [
                "Aaron"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1006",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1006 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/19",
        "resource": {
          "resourceType": "Practitioner",
          "id": "19",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Sender, Sam. SSN:\n            888888888</div>"
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
              "value": "888888888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Sender",
              "given": [
                "Sam"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1007",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1007 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/20",
        "resource": {
          "resourceType": "Practitioner",
          "id": "20",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Intern, Irving. SSN:\n            888222222</div>"
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
              "value": "888222222"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Intern",
              "given": [
                "Irving"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1022",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1021 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/21",
        "resource": {
          "resourceType": "Practitioner",
          "id": "21",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Resident, Rachel. SSN:\n            888333333</div>"
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
              "value": "888333333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Resident",
              "given": [
                "Rachel"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1023",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1022 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/22",
        "resource": {
          "resourceType": "Practitioner",
          "id": "22",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Leader, Linda. SSN:\n            888444444</div>"
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
              "value": "888444444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Leader",
              "given": [
                "Linda"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1024",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1023 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/23",
        "resource": {
          "resourceType": "Practitioner",
          "id": "23",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Verify, Virgil. SSN:\n            999999999</div>"
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
              "value": "999999999"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Verify",
              "given": [
                "Virgil"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1008",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1008 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/24",
        "resource": {
          "resourceType": "Practitioner",
          "id": "24",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Specialize, Sara. SSN:\n            222333333</div>"
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
              "value": "222333333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Specialize",
              "given": [
                "Sara"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1009",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1009 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/25",
        "resource": {
          "resourceType": "Practitioner",
          "id": "25",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Reaction, Ramsey. SSN:\n            222223333</div>"
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
              "value": "222223333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Reaction",
              "given": [
                "Ramsey"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1025",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1024 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/26",
        "resource": {
          "resourceType": "Practitioner",
          "id": "26",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Sleeper, Sally. SSN:\n            222666666</div>"
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
              "value": "222666666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Sleeper",
              "given": [
                "Sally"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1012",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1012 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/27",
        "resource": {
          "resourceType": "Practitioner",
          "id": "27",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Pump, Patrick. SSN:\n            222334444</div>"
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
              "value": "222334444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Pump",
              "given": [
                "Patrick"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1027",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1025 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/28",
        "resource": {
          "resourceType": "Practitioner",
          "id": "28",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Valve, Vera. SSN:\n            222335555</div>"
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
              "value": "222335555"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Valve",
              "given": [
                "Vera"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1028",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1026 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/29",
        "resource": {
          "resourceType": "Practitioner",
          "id": "29",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Scratch, Sophie. SSN:\n            222336666</div>"
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
              "value": "222336666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Scratch",
              "given": [
                "Sophie"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1029",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1027 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/30",
        "resource": {
          "resourceType": "Practitioner",
          "id": "30",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Emergency, Eric. SSN:\n            222337777</div>"
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
              "value": "222337777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Emergency",
              "given": [
                "Eric"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1030",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1028 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/31",
        "resource": {
          "resourceType": "Practitioner",
          "id": "31",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Hormone, Horace. SSN:\n            222338888</div>"
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
              "value": "222338888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Hormone",
              "given": [
                "Horace"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1031",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1029 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/32",
        "resource": {
          "resourceType": "Practitioner",
          "id": "32",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Family, Fay. SSN:\n            222339999</div>"
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
              "value": "222339999"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Family",
              "given": [
                "Fay"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1032",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1030 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/33",
        "resource": {
          "resourceType": "Practitioner",
          "id": "33",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Tum, Tony. SSN:\n            222442222</div>"
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
              "value": "222442222"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Tum",
              "given": [
                "Tony"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1033",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1031 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/34",
        "resource": {
          "resourceType": "Practitioner",
          "id": "34",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Sage, Stanley. SSN:\n            222443333</div>"
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
              "value": "222443333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Sage",
              "given": [
                "Stanley"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1034",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1032 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/35",
        "resource": {
          "resourceType": "Practitioner",
          "id": "35",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Bleeder, Boris. SSN:\n            222443344</div>"
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
              "value": "222443344"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Bleeder",
              "given": [
                "Boris"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1035",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1033 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/36",
        "resource": {
          "resourceType": "Practitioner",
          "id": "36",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Pasteur, Paula. SSN:\n            222445555</div>"
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
              "value": "222445555"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Pasteur",
              "given": [
                "Paula"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1036",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1034 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/37",
        "resource": {
          "resourceType": "Practitioner",
          "id": "37",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Osler, Otto. SSN:\n            222446666</div>"
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
              "value": "222446666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Osler",
              "given": [
                "Otto"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1037",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1035 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/38",
        "resource": {
          "resourceType": "Practitioner",
          "id": "38",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Renal, Rory. SSN:\n            222447777</div>"
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
              "value": "222447777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Renal",
              "given": [
                "Rory"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1038",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1036 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/39",
        "resource": {
          "resourceType": "Practitioner",
          "id": "39",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brain, Barry. SSN:\n            222448888</div>"
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
              "value": "222448888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Brain",
              "given": [
                "Barry"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1039",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1037 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/40",
        "resource": {
          "resourceType": "Practitioner",
          "id": "40",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Cranium, Carol. SSN:\n            222449999</div>"
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
              "value": "222449999"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Cranium",
              "given": [
                "Carol"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1040",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1038 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/41",
        "resource": {
          "resourceType": "Practitioner",
          "id": "41",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Fem, Flora. SSN:\n            222552222</div>"
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
              "value": "222552222"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Fem",
              "given": [
                "Flora"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1041",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1039 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/42",
        "resource": {
          "resourceType": "Practitioner",
          "id": "42",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Tumor, Trudy. SSN:\n            222553333</div>"
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
              "value": "222553333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Tumor",
              "given": [
                "Trudy"
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
          "address": [
            {
              "use": "home",
              "line": [
                "1040 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/43",
        "resource": {
          "resourceType": "Practitioner",
          "id": "43",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Vision, Victor. SSN:\n            222554444</div>"
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
              "value": "222554444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Vision",
              "given": [
                "Victor"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1043",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1041 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/44",
        "resource": {
          "resourceType": "Practitioner",
          "id": "44",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Carpenter, Calvin. SSN:\n            222555545</div>"
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
              "value": "222555545"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Carpenter",
              "given": [
                "Calvin"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1044",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1042 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/45",
        "resource": {
          "resourceType": "Practitioner",
          "id": "45",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Rhino, Rick. SSN:\n            222556666</div>"
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
              "value": "222556666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Rhino",
              "given": [
                "Rick"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1045",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1043 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/46",
        "resource": {
          "resourceType": "Practitioner",
          "id": "46",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Slide, Stan. SSN:\n            222444444</div>"
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
              "value": "222444444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Slide",
              "given": [
                "Stan"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1010",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1010 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/47",
        "resource": {
          "resourceType": "Practitioner",
          "id": "47",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Kidder, Karen. SSN:\n            222557777</div>"
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
              "value": "222557777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Kidder",
              "given": [
                "Karen"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1046",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1044 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/48",
        "resource": {
          "resourceType": "Practitioner",
          "id": "48",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Hollywood, Heddie. SSN:\n            222558888</div>"
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
              "value": "222558888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Hollywood",
              "given": [
                "Heddie"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1047",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1045 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/49",
        "resource": {
          "resourceType": "Practitioner",
          "id": "49",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Shrink, Serena. SSN:\n            222559999</div>"
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
              "value": "222559999"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Shrink",
              "given": [
                "Serena"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1048",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1046 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/50",
        "resource": {
          "resourceType": "Practitioner",
          "id": "50",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Puffer, Penny. SSN:\n            222662222</div>"
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
              "value": "222662222"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Puffer",
              "given": [
                "Penny"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1049",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1047 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/51",
        "resource": {
          "resourceType": "Practitioner",
          "id": "51",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Curie, Christine. SSN:\n            222555555</div>"
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
              "value": "222555555"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Curie",
              "given": [
                "Christine"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1011",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1011 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/52",
        "resource": {
          "resourceType": "Practitioner",
          "id": "52",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Joint, Jeffrey. SSN:\n            222663333</div>"
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
              "value": "222663333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Joint",
              "given": [
                "Jeffrey"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1050",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1048 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/53",
        "resource": {
          "resourceType": "Practitioner",
          "id": "53",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Cutter, Carl. SSN:\n            222777777</div>"
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
              "value": "222777777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Cutter",
              "given": [
                "Carl"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1013",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1013 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/54",
        "resource": {
          "resourceType": "Practitioner",
          "id": "54",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Plumber, Peter. SSN:\n            222664444</div>"
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
              "value": "222664444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Plumber",
              "given": [
                "Peter"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1051",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1049 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/55",
        "resource": {
          "resourceType": "Practitioner",
          "id": "55",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Helper, Horace. SSN:\n            222665555</div>"
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
              "value": "222665555"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Helper",
              "given": [
                "Horace"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1052",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1050 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/56",
        "resource": {
          "resourceType": "Practitioner",
          "id": "56",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Nightingale, Nancy. SSN:\n            222888888</div>"
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
              "value": "222888888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Nightingale",
              "given": [
                "Nancy"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1014",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1014 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/57",
        "resource": {
          "resourceType": "Practitioner",
          "id": "57",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Barton, Clarence. SSN:\n            222999999</div>"
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
              "value": "222999999"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Barton",
              "given": [
                "Clarence"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1015",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1015 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/58",
        "resource": {
          "resourceType": "Practitioner",
          "id": "58",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Bender, Bob. SSN:\n            222666666</div>"
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
              "value": "222666666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Bender",
              "given": [
                "Bob"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1053",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1051 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/59",
        "resource": {
          "resourceType": "Practitioner",
          "id": "59",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Chopper, Charlie. SSN:\n            222667777</div>"
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
              "value": "222667777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Chopper",
              "given": [
                "Charlie"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1054",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1052 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/60",
        "resource": {
          "resourceType": "Practitioner",
          "id": "60",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brace, Ben. SSN:\n            222668888</div>"
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
              "value": "222668888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Brace",
              "given": [
                "Ben"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1055",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1053 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/61",
        "resource": {
          "resourceType": "Practitioner",
          "id": "61",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Specs, Sylvia. SSN:\n            222669999</div>"
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
              "value": "222669999"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Specs",
              "given": [
                "Sylvia"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1056",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1054 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/62",
        "resource": {
          "resourceType": "Practitioner",
          "id": "62",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Script, Susan. SSN:\n            333222222</div>"
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
              "value": "333222222"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Script",
              "given": [
                "Susan"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1016",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1016 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/63",
        "resource": {
          "resourceType": "Practitioner",
          "id": "63",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Bunion, Paul. SSN:\n            222772222</div>"
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
              "value": "222772222"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Bunion",
              "given": [
                "Paul"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1057",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1055 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/64",
        "resource": {
          "resourceType": "Practitioner",
          "id": "64",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Listener, Larry. SSN:\n            222773333</div>"
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
              "value": "222773333"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Listener",
              "given": [
                "Larry"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1058",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1056 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/65",
        "resource": {
          "resourceType": "Practitioner",
          "id": "65",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Beaker, Bill. SSN:\n            333444444</div>"
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
              "value": "333444444"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Beaker",
              "given": [
                "Bill"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1017",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1017 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/66",
        "resource": {
          "resourceType": "Practitioner",
          "id": "66",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Chow, Connie. SSN:\n            333555555</div>"
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
              "value": "333555555"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Chow",
              "given": [
                "Connie"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1018",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1018 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/67",
        "resource": {
          "resourceType": "Practitioner",
          "id": "67",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">teHelper. SSN: 000111111</div>"
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
              "value": "000111111"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Helper",
              "given": [
                "Helen"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1019",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1019 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/68",
        "resource": {
          "resourceType": "Practitioner",
          "id": "68",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Player, Pamela. SSN:\n            222776666</div>"
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
              "value": "222776666"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Player",
              "given": [
                "Pamela"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1059",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1057 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/69",
        "resource": {
          "resourceType": "Practitioner",
          "id": "69",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Stretcher, Seth. SSN:\n            222778888</div>"
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
              "value": "222778888"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Stretcher",
              "given": [
                "Seth"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1060",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1058 Healthcare Drive"
              ]
            }
          ],
          "gender": "male"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Practitioner/70",
        "resource": {
          "resourceType": "Practitioner",
          "id": "70",
          "meta": {
            "lastUpdated": "2012-05-29T23:45:32Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Enter Ellen, ElleSSN:\n            333777777</div>"
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
              "value": "333777777"
            }
          ],
          "name": [
            {
              "use": "official",
              "family": "Enter",
              "given": [
                "Ellen"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "555-555-1020",
              "use": "work"
            }
          ],
          "address": [
            {
              "use": "home",
              "line": [
                "1058 Healthcare Drive"
              ]
            }
          ],
          "gender": "female"
        }
      }
    ]
  }