import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-mmi-suiciderisk-orderset-logic.json.html
// Suicide Risk Order Set Logic

export const mockLibrary7: Library = {
    "resourceType": "Library",
    "id": "suiciderisk-orderset-logic",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Library/mmi-suiciderisk-orderset-logic</td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <b>value: </b>\n                  <span>SuicideRiskLogic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">1.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Suicide Risk Order Set Logic</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Logic for Suicide Risk Order Sets</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span style=\"padding-left: 25px;\">\n                     <b>text: </b>\n                     <span>Suicide Risk Order Set Logic</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>Library/library-fhir-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>Library/library-fhir-helpers</span>\n                           <br/>\n                        </span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>display: </b>\n                           <span>FHIRHelpers</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>http://nucc.org/provider-taxonomy</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>ValueSet/1.2.3.4.5</span>\n                           <br/>\n                        </span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>display: </b>\n                           <span>Suicide Risk Assessment</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Parameter: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <span>\n                     <b>name: </b>\n                     <span>Patient</span>\n                     <br/>\n                  </span>\n                  <b>use: </b>\n                  <span>in</span>\n                  <br/>\n                  <span>\n                     <b>minimum cardinality: </b>\n                     <span>1</span>\n                     <br/>\n                  </span>\n                  <span>\n                     <b>maximum cardinality: </b>\n                     <span>1</span>\n                     <br/>\n                  </span>\n                  <b>type: </b>\n                  <span>Patient</span>\n                  <br/>\n                  <p style=\"margin-bottom: 5px;\"/>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Parameter: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <span>\n                     <b>name: </b>\n                     <span>Encounter</span>\n                     <br/>\n                  </span>\n                  <b>use: </b>\n                  <span>in</span>\n                  <br/>\n                  <span>\n                     <b>minimum cardinality: </b>\n                     <span>1</span>\n                     <br/>\n                  </span>\n                  <span>\n                     <b>maximum cardinality: </b>\n                     <span>1</span>\n                     <br/>\n                  </span>\n                  <b>type: </b>\n                  <span>Encounter</span>\n                  <br/>\n                  <p style=\"margin-bottom: 5px;\"/>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Parameter: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <span>\n                     <b>name: </b>\n                     <span>Practitioner</span>\n                     <br/>\n                  </span>\n                  <b>use: </b>\n                  <span>in</span>\n                  <br/>\n                  <span>\n                     <b>minimum cardinality: </b>\n                     <span>1</span>\n                     <br/>\n                  </span>\n                  <span>\n                     <b>maximum cardinality: </b>\n                     <span>1</span>\n                     <br/>\n                  </span>\n                  <b>type: </b>\n                  <span>Practitioner</span>\n                  <br/>\n                  <p style=\"margin-bottom: 5px;\"/>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>RiskAssessment</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>Suicide Risk Assessment</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>url: </b>\n                     <span>library-mmi-suiciderisk-orderset-logic-content.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>"
    },
    "url": "http://motivemi.com/artifacts/Library/suiciderisk-orderset-logic",
    "identifier": [
      {
        "use": "official",
        "system": "http://motivemi.com/artifacts",
        "value": "mmi:suiciderisk-orderset-logic"
      }
    ],
    "version": "1.0.0",
    "name": "SuicideRiskOrderSetLogic",
    "title": "Suicide Risk Order Set Logic",
    "status": "active",
    "experimental": true,
    "type": {
      "coding": [
        {
          "code": "logic-library"
        }
      ]
    },
    "date": "2015-07-22",
    "publisher": "Motive Medical Intelligence",
    "contact": [
      {
        "telecom": [
          {
            "system": "phone",
            "value": "415-362-4007",
            "use": "work"
          },
          {
            "system": "email",
            "value": "info@motivemi.com",
            "use": "work"
          }
        ]
      }
    ],
    "description": "Logic for Suicide Risk Order Sets",
    "useContext": [
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "age"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "https://meshb.nlm.nih.gov",
              "code": "D000328",
              "display": "Adult"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "87512008",
              "display": "Mild major depression"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "40379007",
              "display": "Major depression, recurrent, mild"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "focus"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "225444004",
              "display": "At risk for suicide (finding)"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "user"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "309343006",
              "display": "Physician"
            }
          ]
        }
      },
      {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "venue"
        },
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "440655000",
              "display": "Outpatient environment"
            }
          ]
        }
      }
    ],
    "jurisdiction": [
      {
        "coding": [
          {
            "system": "urn:iso:std:iso:3166",
            "code": "US"
          }
        ]
      }
    ],
    "purpose": "Defines a referral to a mental-health integrated care program for use in suicide risk order sets. The definition is independent of the order set in which it appears to allow reuse of the general definition of the referrral.",
    "usage": "This activity definition is used as the definition of a referral request within various suicide risk order sets. Elements that apply universally are defined here, while elements that apply to the specific setting of a referral within a particular order set are defined in the order set.",
    "copyright": "© Copyright 2016 Motive Medical Intelligence. All rights reserved.",
    "approvalDate": "2016-03-12",
    "lastReviewDate": "2016-08-15",
    "effectivePeriod": {
      "start": "2016-01-01",
      "end": "2017-12-31"
    },
    "topic": [
      {
        "text": "Suicide Risk Order Set Logic"
      }
    ],
    "author": [
      {
        "name": "Motive Medical Intelligence",
        "telecom": [
          {
            "system": "phone",
            "value": "415-362-4007",
            "use": "work"
          },
          {
            "system": "email",
            "value": "info@motivemi.com",
            "use": "work"
          }
        ]
      }
    ],
    "relatedArtifact": [
      {
        "type": "citation",
        "display": "Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
        "url": "http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf"
      },
      {
        "type": "depends-on",
        "resource": "Library/library-fhir-model-definition"
      },
      {
        "type": "depends-on",
        "resource": "Library/library-fhir-helpers"
      },
      {
        "type": "depends-on",
        "resource": "http://nucc.org/provider-taxonomy"
      },
      {
        "type": "depends-on",
        "resource": "ValueSet/1.2.3.4.5"
      }
    ],
    "parameter": [
      {
        "name": "Patient",
        "use": "in",
        "min": 1,
        "max": "1",
        "type": "Patient"
      },
      {
        "name": "Encounter",
        "use": "in",
        "min": 1,
        "max": "1",
        "type": "Encounter"
      },
      {
        "name": "Practitioner",
        "use": "in",
        "min": 1,
        "max": "1",
        "type": "Practitioner"
      }
    ],
    "dataRequirement": [
      {
        "type": "RiskAssessment",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "http://example.org/valueset/1.2.3.4.5"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "text/cql",
        "url": "library-mmi-suiciderisk-orderset-logic-content.cql"
      }
    ]
  }