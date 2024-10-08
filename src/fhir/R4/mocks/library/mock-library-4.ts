import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-cms146-example.json.html
// CMS146 Measure Logic

export const mockLibrary4: Library = {
    "resourceType": "Library",
    "id": "library-cms146-example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Library/library-cms146-example</td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <b>value: </b>\n                  <span>CMS146</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">2.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Appropriate Testing for Children with Pharyngitis</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Logic for CMS 146: Appropriate Testing for Children with Pharyngitis</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>Library/library-quick-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Patient</span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Condition</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>category</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>diagnosis</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>clinicalStatus</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>confirmed</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.102.12.1011</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Condition</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>category</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>diagnosis</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>clinicalStatus</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>confirmed</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.102.12.1012</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Encounter</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>status</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>finished</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>class</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>ambulatory</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>type</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.101.12.1061</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>DiagnosticReport</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>diagnosis</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.198.12.1012</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Medication</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.196.12.1001</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>MedicationRequest</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>status</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>active</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>medication.code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.196.12.1001</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>MedicationStatement</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>status</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code:</b>\n                           <span>completed</span>\n                        </span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>medication.code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>2.16.840.1.113883.3.464.1003.196.12.1001</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>url: </b>\n                     <span>library-cms146-example-content.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "CMS146"
      }
    ],
    "version": "2.0.0",
    "title": "Appropriate Testing for Children with Pharyngitis",
    "status": "draft",
    "type": {
      "coding": [
        {
          "code": "logic-library"
        }
      ]
    },
    "date": "2015-07-22",
    "description": "Logic for CMS 146: Appropriate Testing for Children with Pharyngitis",
    "relatedArtifact": [
      {
        "type": "depends-on",
        "resource": "Library/library-quick-model-definition"
      }
    ],
    "dataRequirement": [
      {
        "type": "Patient"
      },
      {
        "type": "Condition",
        "codeFilter": [
          {
            "path": "category",
            "code": [
              {
                "code": "diagnosis"
              }
            ]
          },
          {
            "path": "clinicalStatus",
            "code": [
              {
                "code": "confirmed"
              }
            ]
          },
          {
            "path": "code",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.102.12.1011"
          }
        ]
      },
      {
        "type": "Condition",
        "codeFilter": [
          {
            "path": "category",
            "code": [
              {
                "code": "diagnosis"
              }
            ]
          },
          {
            "path": "clinicalStatus",
            "code": [
              {
                "code": "confirmed"
              }
            ]
          },
          {
            "path": "code",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.102.12.1012"
          }
        ]
      },
      {
        "type": "Encounter",
        "codeFilter": [
          {
            "path": "status",
            "code": [
              {
                "code": "finished"
              }
            ]
          },
          {
            "path": "class",
            "code": [
              {
                "code": "ambulatory"
              }
            ]
          },
          {
            "path": "type",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.101.12.1061"
          }
        ]
      },
      {
        "type": "DiagnosticReport",
        "codeFilter": [
          {
            "path": "diagnosis",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.198.12.1012"
          }
        ]
      },
      {
        "type": "Medication",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.196.12.1001"
          }
        ]
      },
      {
        "type": "MedicationRequest",
        "codeFilter": [
          {
            "path": "status",
            "code": [
              {
                "code": "active"
              }
            ]
          },
          {
            "path": "medication.code",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.196.12.1001"
          }
        ]
      },
      {
        "type": "MedicationStatement",
        "codeFilter": [
          {
            "path": "status",
            "code": [
              {
                "code": "completed"
              }
            ]
          },
          {
            "path": "medication.code",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.196.12.1001"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "text/cql",
        "url": "library-cms146-example-content.cql"
      }
    ]
  }