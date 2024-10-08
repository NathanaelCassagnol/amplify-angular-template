import { Endpoint } from "../../types/endpoint";

// https://hl7.org/fhir/R4/endpoint-example-direct.json.html
// Example of a DIRECT endpoint

export const mockEndpoint1: Endpoint = {
    "resourceType": "Endpoint",
    "id": "direct-endpoint",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: direct-endpoint</p><p><b>status</b>: active</p><p><b>connectionType</b>: direct-project (Details: [not stated] code direct-project = 'direct-project', stated as 'null')</p><p><b>name</b>: MARTIN SMIETANKA</p><p><b>managingOrganization</b>: <a>Organization/299</a></p><p><b>payloadType</b>: urn:hl7-org:sdwg:ccda-structuredBody:1.1 <span>(Details : {urn:oid:1.3.6.1.4.1.19376.1.2.3 code 'urn:hl7-org:sdwg:ccda-structuredBody:1.1' = 'urn:hl7-org:sdwg:ccda-structuredBody:1.1)</span></p><p><b>address</b>: <a>MARTIN.SMIETANKA@directnppes.com</a></p></div>"
    },
    "status": "active",
    "connectionType": {
      "code": "direct-project"
    },
    "name": "MARTIN SMIETANKA",
    "managingOrganization": {
      "reference": "Organization/299"
    },
    "payloadType": [
      {
        "coding": [
          {
            "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
            "code": "urn:hl7-org:sdwg:ccda-structuredBody:1.1"
          }
        ]
      }
    ],
    "address": "mailto:MARTIN.SMIETANKA@directnppes.com"
  }