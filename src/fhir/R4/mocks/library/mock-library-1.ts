import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-example.json.html
// Chlamydia Screening Common Library

export const mockLibrary1: Library = {
    "resourceType": "Library",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Library/example</td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <b>value: </b>\n                  <span>ChalmydiaScreening_Common</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">2.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Chlamydia Screening Common Library</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Common Logic for adherence to Chlamydia Screening guidelines</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span style=\"padding-left: 25px;\">\n                     <b>text: </b>\n                     <span>Chlamydia Screening</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>Library/library-quick-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Condition</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>Other Female Reproductive Conditions</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>url: </b>\n                     <span>library-example-content.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "ChalmydiaScreening_Common"
      }
    ],
    "version": "2.0.0",
    "title": "Chlamydia Screening Common Library",
    "status": "draft",
    "type": {
      "coding": [
        {
          "code": "logic-library"
        }
      ]
    },
    "date": "2015-07-22",
    "description": "Common Logic for adherence to Chlamydia Screening guidelines",
    "topic": [
      {
        "text": "Chlamydia Screening"
      }
    ],
    "relatedArtifact": [
      {
        "type": "depends-on",
        "resource": "Library/library-quick-model-definition"
      }
    ],
    "dataRequirement": [
      {
        "type": "Condition",
        "codeFilter": [
          {
            "path": "code",
            "valueSet": "urn:oid:2.16.840.1.113883.3.464.1003.111.12.1006"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "text/cql",
        "url": "library-example-content.cql"
      }
    ]
  }