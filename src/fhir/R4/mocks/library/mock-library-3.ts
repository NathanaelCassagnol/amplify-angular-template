import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-exclusive-breastfeeding-cqm-logic.json.html
// Exclusive Breastfeeding Measurement Logic

export const mockLibrary3: Library = {
    "resourceType": "Library",
    "id": "library-exclusive-breastfeeding-cqm-logic",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Library/library-exclusive-breastfeeding-cqm-logic</td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <b>value: </b>\n                  <span>Exclusive_Breastfeeding_CQM_Logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">1.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Exclusive Breastfeeding CQM Logic</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Quality measure logic for measuring outcomes for exclusive breastmilk feeding of newborns</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span style=\"padding-left: 25px;\">\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style=\"vertical-align: top;\">\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>reference: </b>\n                           <span>Library/library-quick-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <div>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>type: </b>\n                        <span>Condition</span>\n                     </p>\n                     <p style=\"margin-bottom: 5px;\">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style=\"padding-left: 25px;\">\n                           <b>valueset: </b>\n                           <span>Single Live Birth</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>url: </b>\n                     <span>http://cqlrepository.org/CMS9v4_CQM.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "Exclusive_Breastfeeding_CQM_Logic"
      }
    ],
    "version": "1.0.0",
    "title": "Exclusive Breastfeeding CQM Logic",
    "status": "active",
    "experimental": true,
    "type": {
      "coding": [
        {
          "code": "logic-library"
        }
      ]
    },
    "date": "2016-03-08",
    "description": "Quality measure logic for measuring outcomes for exclusive breastmilk feeding of newborns",
    "topic": [
      {
        "text": "Exclusive Breastfeeding"
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
            "valueSet": "urn:oid:2.16.840.1.113883.3.117.1.7.1.25"
          }
        ]
      }
    ],
    "content": [
      {
        "contentType": "text/cql",
        "url": "http://cqlrepository.org/CMS9v4_CQM.cql"
      }
    ]
  }