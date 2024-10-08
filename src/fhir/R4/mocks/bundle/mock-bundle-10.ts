import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/bundle-response-simplesummary.json.html
// Response for Retrieve a patient’s conditions, medication statements and blood pressure readings since a given date

export const mockBundle10: Bundle = {
    "resourceType": "Bundle",
    "id": "bundle-response-simplesummary",
    "type": "batch-response",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "id": "example",
          "meta": {
            "versionId": "1",
            "lastUpdated": "2018-11-12T03:35:20.715Z"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>Name</td>\n                                    <td>Peter James \n                                        <b>Chalmers</b> (&quot;Jim&quot;)\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Address</td>\n                                    <td>534 Erewhon, Pleasantville, Vic, 3999</td>\n                                </tr>\n                                <tr>\n                                    <td>Contacts</td>\n                                    <td>Home: unknown. Work: (03) 5555 6473</td>\n                                </tr>\n                                <tr>\n                                    <td>Id</td>\n                                    <td>MRN: 12345 (Acme Healthcare)</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>"
          },
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR"
                  }
                ]
              },
              "system": "urn:oid:1.2.36.146.595.217.0.1",
              "value": "12345",
              "period": {
                "start": "2001-05-06"
              },
              "assigner": {
                "display": "Acme Healthcare"
              }
            }
          ],
          "active": true,
          "name": [
            {
              "use": "official",
              "family": "Chalmers",
              "given": [
                "Peter",
                "James"
              ]
            },
            {
              "use": "usual",
              "given": [
                "Jim"
              ]
            },
            {
              "use": "maiden",
              "family": "Windsor",
              "given": [
                "Peter",
                "James"
              ],
              "period": {
                "end": "2002"
              }
            }
          ],
          "telecom": [
            {
              "use": "home"
            },
            {
              "system": "phone",
              "value": "(03) 5555 6473",
              "use": "work",
              "rank": 1
            },
            {
              "system": "phone",
              "value": "(03) 3410 5613",
              "use": "mobile",
              "rank": 2
            },
            {
              "system": "phone",
              "value": "(03) 5555 8834",
              "use": "old",
              "period": {
                "end": "2014"
              }
            }
          ],
          "gender": "male",
          "birthDate": "1974-12-25",
          "_birthDate": {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
                "valueDateTime": "1974-12-25T14:35:45-05:00"
              }
            ]
          },
          "deceasedBoolean": false,
          "address": [
            {
              "use": "home",
              "type": "both",
              "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
              "line": [
                "534 Erewhon St"
              ],
              "city": "PleasantVille",
              "district": "Rainbow",
              "state": "Vic",
              "postalCode": "3999",
              "period": {
                "start": "1974-12-25"
              }
            }
          ],
          "contact": [
            {
              "relationship": [
                {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                      "code": "N"
                    }
                  ]
                }
              ],
              "name": {
                "family": "du Marché",
                "_family": {
                  "extension": [
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                      "valueString": "VV"
                    }
                  ]
                },
                "given": [
                  "Bénédicte"
                ]
              },
              "telecom": [
                {
                  "system": "phone",
                  "value": "+33 (237) 998327"
                }
              ],
              "address": {
                "use": "home",
                "type": "both",
                "line": [
                  "534 Erewhon St"
                ],
                "city": "PleasantVille",
                "district": "Rainbow",
                "state": "Vic",
                "postalCode": "3999",
                "period": {
                  "start": "1974-12-25"
                }
              },
              "gender": "female",
              "period": {
                "start": "2012"
              }
            }
          ],
          "managingOrganization": {
            "reference": "Organization/1"
          }
        },
        "response": {
          "status": "200",
          "etag": "W/1",
          "lastModified": "2018-11-12T03:35:20.717Z"
        }
      },
      {
        "resource": {
          "resourceType": "Bundle",
          "id": "2c2fb771-6c4b-4df8-89b2-47a1178e7c",
          "meta": {
            "lastUpdated": "2018-11-12T05:42:49.445Z"
          },
          "type": "searchset",
          "total": 4,
          "link": [
            {
              "relation": "self",
              "url": "http://local.fhir.org:960/r4/Condition?_format=application/fhir+xml&search-id=36aac5c3-a9f6-4c3a-bf94-24d32ed604&&patient=example&_sort=_id"
            }
          ],
          "entry": [
            {
              "fullUrl": "http://local.fhir.org:960/r4/Condition/example",
              "resource": {
                "resourceType": "Condition",
                "id": "example",
                "meta": {
                  "versionId": "1",
                  "lastUpdated": "2018-11-12T03:34:46.552Z"
                },
                "text": {
                  "status": "generated",
                  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Severe burn of left ear (Date: 24-May 2012)</div>"
                },
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
                "category": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "encounter-diagnosis",
                        "display": "Encounter Diagnosis"
                      },
                      {
                        "system": "http://snomed.info/sct",
                        "code": "439401001",
                        "display": "Diagnosis"
                      }
                    ]
                  }
                ],
                "severity": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "24484000",
                      "display": "Severe"
                    }
                  ]
                },
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "39065001",
                      "display": "Burn of ear"
                    }
                  ],
                  "text": "Burnt Ear"
                },
                "bodySite": [
                  {
                    "coding": [
                      {
                        "system": "http://snomed.info/sct",
                        "code": "49521004",
                        "display": "Left external ear structure"
                      }
                    ],
                    "text": "Left Ear"
                  }
                ],
                "subject": {
                  "reference": "Patient/example"
                },
                "onsetDateTime": "2012-05-24"
              },
              "search": {
                "mode": "match"
              }
            },
            {
              "fullUrl": "http://local.fhir.org:960/r4/Condition/example2",
              "resource": {
                "resourceType": "Condition",
                "id": "example2",
                "meta": {
                  "versionId": "1",
                  "lastUpdated": "2018-11-12T03:34:46.626Z"
                },
                "text": {
                  "status": "generated",
                  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Mild Asthma (Date: 12-Nov 2012)</div>"
                },
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
                "category": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "problem-list-item",
                        "display": "Problem List Item"
                      }
                    ]
                  }
                ],
                "severity": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "255604002",
                      "display": "Mild"
                    }
                  ]
                },
                "code": {
                  "text": "Asthma"
                },
                "subject": {
                  "reference": "Patient/example"
                },
                "onsetString": "approximately November 2012"
              },
              "search": {
                "mode": "match"
              }
            },
            {
              "fullUrl": "http://local.fhir.org:960/r4/Condition/family-history",
              "resource": {
                "resourceType": "Condition",
                "id": "family-history",
                "meta": {
                  "versionId": "1",
                  "lastUpdated": "2018-11-12T03:34:47.274Z"
                },
                "text": {
                  "status": "generated",
                  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Family history of cancer of colon</div>"
                },
                "clinicalStatus": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                      "code": "active"
                    }
                  ]
                },
                "category": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "problem-list-item",
                        "display": "Problem List Item"
                      }
                    ]
                  }
                ],
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "312824007",
                      "display": "Family history of cancer of colon"
                    }
                  ]
                },
                "subject": {
                  "reference": "Patient/example"
                }
              },
              "search": {
                "mode": "match"
              }
            },
            {
              "fullUrl": "http://local.fhir.org:960/r4/Condition/stroke",
              "resource": {
                "resourceType": "Condition",
                "id": "stroke",
                "meta": {
                  "versionId": "1",
                  "lastUpdated": "2018-11-12T03:34:47.337Z"
                },
                "text": {
                  "status": "generated",
                  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Ischemic stroke, July 18, 2010</div>"
                },
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
                "category": [
                  {
                    "coding": [
                      {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                        "code": "encounter-diagnosis",
                        "display": "Encounter Diagnosis"
                      }
                    ]
                  }
                ],
                "code": {
                  "coding": [
                    {
                      "system": "http://snomed.info/sct",
                      "code": "422504002",
                      "display": "Ischemic stroke (disorder)"
                    }
                  ],
                  "text": "Stroke"
                },
                "subject": {
                  "reference": "Patient/example"
                },
                "onsetDateTime": "2010-07-18"
              },
              "search": {
                "mode": "match"
              }
            }
          ]
        },
        "response": {
          "status": "200",
          "etag": "W/1",
          "lastModified": "2018-11-12T03:35:20.717Z"
        }
      },
      {
        "resource": {
          "resourceType": "Bundle",
          "id": "86846953-60dd-47ba-b37a-7e7d7e3312",
          "meta": {
            "lastUpdated": "2018-11-12T05:42:49.476Z"
          },
          "type": "searchset",
          "total": 0,
          "link": [
            {
              "relation": "self",
              "url": "http://local.fhir.org:960/r4/MedicationStatement?_format=application/fhir+xml&search-id=0f08b401-5120-4444-9a83-3fd21d33df&&patient=example&_sort=_id"
            }
          ]
        },
        "response": {
          "status": "200",
          "etag": "W/1",
          "lastModified": "2018-11-12T03:35:20.717Z"
        }
      },
      {
        "resource": {
          "resourceType": "Bundle",
          "id": "4bafe9c4-ba53-4d7b-89d0-d92ee0859a",
          "meta": {
            "lastUpdated": "2018-11-12T05:42:49.498Z"
          },
          "type": "searchset",
          "total": 0,
          "link": [
            {
              "relation": "self",
              "url": "http://local.fhir.org:960/r4/Observation?_format=application/fhir+xml&search-id=50df0414-1375-48a4-ba1e-66f580360a&&patient=example&code=http%3A//loinc.org%7C55284%2D4&date=ge2015%2D01%2D01&_sort=_id"
            }
          ]
        },
        "response": {
          "status": "200",
          "etag": "W/1",
          "lastModified": "2018-11-12T03:35:20.717Z"
        }
      }
    ]
  }