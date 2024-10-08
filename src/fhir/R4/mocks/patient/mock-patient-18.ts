import { Patient } from "../../types/patient.types";

// https://hl7.org/fhir/R4/patient-example-chinese.json.html
// Example Patient resource with Chinese content

export const mockPatient18: Patient = {
    "resourceType": "Patient",
    "id": "ch-example",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2016-05-16T00:55:52Z"
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <table>\n        <tbody>\n          <tr>\n            <td>名字</td>\n            <td>张无忌</td> </tr>\n          <tr>\n            <td>地址</td>\n            <td>上海市黄埔区马当路190号, 1974年12月25日</td> \n          </tr>\n          <tr>\n            <td>联系方式</td>\n            <td>住宅: 不详。工作: 18337177888</td> \n          </tr>\n          <tr>\n            <td>Id</td>\n            <td>MRN: 3112219680806371X (市卫生局)</td> \n          </tr> \n        </tbody> \n      </table> \n    </div>"
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
        "value": "3112219680806371X",
        "period": {
          "start": "2001-05-06"
        },
        "assigner": {
          "display": "市卫生局"
        }
      }
    ],
    "active": true,
    "name": [
      {
        "use": "official",
        "text": "张无忌"
      }
    ],
    "telecom": [
      {
        "use": "home"
      },
      {
        "system": "phone",
        "value": "18337177888",
        "use": "work"
      }
    ],
    "gender": "male",
    "birthDate": "1974-12-25",
    "deceasedBoolean": false,
    "address": [
      {
        "use": "home",
        "type": "both",
        "line": [
          "马当路190号"
        ],
        "city": "上海市",
        "district": "黄埔区",
        "postalCode": "200000",
        "period": {
          "start": "1974-12-25"
        }
      }
    ],
    "managingOrganization": {
      "reference": "Organization/1",
      "display": "上海东方医院"
    }
  }