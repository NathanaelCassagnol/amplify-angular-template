import { Consent } from "fhir/R4/types/consent";

// https://hl7.org/fhir/R4/consent-example-pkb.json.html
// Example of Patients Know Best Usage

export const mockConsent10: Consent = {
    "resourceType": "Consent",
    "id": "consent-example-pkb",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n        This example demonstrates how to encode this screen shot in a consent resource:\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<img src=\"pkb.png\" alt=\"Screenshot from Patient Knows Best\"/>\n\t\t\t</p>\n\t\t\t<p>\n        Thanks to <a href=\"https://www.patientsknowbest.com/\">Patients Know Best</a> for contributing this example\n\t\t\t</p>\n\t\t</div>"
    },
    "status": "active",
    "scope": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/consentscope",
          "code": "patient-privacy"
        }
      ]
    },
    "category": [
      {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "59284-0"
          }
        ]
      }
    ],
    "patient": {
      "reference": "Patient/example",
      "display": "...example patient..."
    },
    "dateTime": "2016-06-16",
    "organization": [
      {
        "reference": "Organization/f001"
      }
    ],
    "policyRule": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "OPTOUT"
        }
      ]
    },
    "provision": {
      "actor": [
        {
          "role": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "PRCP"
              }
            ]
          },
          "reference": {
            "reference": "Organization/f001"
          }
        }
      ],
      "action": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentaction",
              "code": "access"
            }
          ]
        }
      ],
      "securityLabel": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
          "code": "N"
        }
      ],
      "provision": [
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "PSY"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "SPI"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
              "code": "N"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "PSY"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "SPI"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "SEX"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
              "code": "N"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "PSY"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "SPI"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "SEX"
            }
          ]
        },
        {
          "actor": [
            {
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                    "code": "PRCP"
                  }
                ]
              },
              "reference": {
                "reference": "Organization/f001"
              }
            }
          ],
          "action": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/consentaction",
                  "code": "access"
                }
              ]
            }
          ],
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
              "code": "N"
            }
          ]
        }
      ]
    }
  }