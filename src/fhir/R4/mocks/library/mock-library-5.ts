import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-quick-model-definition.json.html
// QUICK Model Definition

export const mockLibrary5: Library = {
    "resourceType": "Library",
    "id": "library-quick-model-definition",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Library/library-quick-model-definition</td>\n            </tr>\n         </table>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <b>value: </b>\n                  <span>QUICK</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">1.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">QUICK Model Definition</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span>\n                     <span>\n                        <span style=\"padding-left: 25px;\">\n                           <b>code: </b>\n                           <span>model-definition</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">Model definition for the QUICK Logical Model</td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-right: 25px;\">\n                  <span style=\"padding-left: 25px;\">\n                     <b>text: </b>\n                     <span>QUICK</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class=\"grid dict\">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style=\"padding-left: 25px; padding-right: 25px;\">\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>type: </b>\n                     <span>application/xml</span>\n                  </p>\n                  <p style=\"margin-bottom: 5px;\">\n                     <b>url: </b>\n                     <span>http://cqlrepository.org/quick-modelinfo.xml</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>"
    },
    "identifier": [
      {
        "use": "official",
        "value": "QUICK"
      }
    ],
    "version": "1.0.0",
    "title": "QUICK Model Definition",
    "status": "draft",
    "type": {
      "coding": [
        {
          "code": "model-definition"
        }
      ]
    },
    "date": "2016-07-08",
    "description": "Model definition for the QUICK Logical Model",
    "topic": [
      {
        "text": "QUICK"
      }
    ],
    "content": [
      {
        "contentType": "application/xml",
        "url": "http://cqlrepository.org/quick-modelinfo.xml"
      }
    ]
  }