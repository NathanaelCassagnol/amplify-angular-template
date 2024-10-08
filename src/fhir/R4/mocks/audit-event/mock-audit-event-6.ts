import { AuditEvent } from "fhir/R4/types/audit-event";

// https://hl7.org/fhir/R4/audit-event-example-search.json.html
// RESTful search operation

export const mockAuditEvent6: AuditEvent = {
    "resourceType": "AuditEvent",
    "id": "example-search",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-search</p><p><b>type</b>: Restful Operation (Details: http://terminology.hl7.org/CodeSystem/audit-event-type code rest = 'RESTful Operation', stated as 'Restful Operation')</p><p><b>subtype</b>: search (Details: http://hl7.org/fhir/restful-interaction code search = 'search', stated as 'search')</p><p><b>action</b>: E</p><p><b>recorded</b>: 22/08/2015 11:42:24 PM</p><p><b>outcome</b>: 0</p><blockquote><p><b>agent</b></p><p><b>type</b>: human user <span>(Details : {http://terminology.hl7.org/CodeSystem/extra-security-role-type code 'humanuser' = 'human user', given as 'human user'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 601847123</p><p><b>name</b>: Grahame Grieve</p><p><b>requestor</b>: true</p></blockquote><blockquote><p><b>agent</b></p><p><b>type</b>: Source Role ID <span>(Details : {DICOM code '110153' = 'Source Role ID', given as 'Source Role ID'})</span></p><p><b>who</b>: </p><p><b>altId</b>: 6580</p><p><b>requestor</b>: false</p><h3>Networks</h3><table><tr><td>-</td><td><b>Address</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Workstation1.ehr.familyclinic.com</td><td>1</td></tr></table></blockquote><h3>Sources</h3><table><tr><td>-</td><td><b>Site</b></td><td><b>Observer</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>Cloud</td><td>hl7connect.healthintersections.com.au</td><td>Web Server (Details: http://terminology.hl7.org/CodeSystem/security-source-type code 3 = 'Web Server', stated as 'Web Server')</td></tr></table><h3>Entities</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Role</b></td><td><b>Query</b></td></tr><tr><td>*</td><td>System Object (Details: http://terminology.hl7.org/CodeSystem/audit-entity-type code 2 = 'System Object', stated as 'System Object')</td><td>Query (Details: http://terminology.hl7.org/CodeSystem/object-role code 24 = 'Query', stated as 'Query')</td><td>aHR0cDovL2ZoaXItZGV2LmhlYWx0aGludGVyc2VjdGlvbnMuY29tLmF1L29wZW4vRW5jb3VudGVyP3BhcnRpY2lwYW50PTEz</td></tr></table></div>"
    },
    "type": {
      "system": "http://terminology.hl7.org/CodeSystem/audit-event-type",
      "code": "rest",
      "display": "Restful Operation"
    },
    "subtype": [
      {
        "system": "http://hl7.org/fhir/restful-interaction",
        "code": "search",
        "display": "search"
      }
    ],
    "action": "E",
    "recorded": "2015-08-22T23:42:24Z",
    "outcome": "0",
    "agent": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
              "code": "humanuser",
              "display": "human user"
            }
          ]
        },
        "who": {
          "identifier": {
            "value": "95"
          }
        },
        "altId": "601847123",
        "name": "Grahame Grieve",
        "requestor": true
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://dicom.nema.org/resources/ontology/DCM",
              "code": "110153",
              "display": "Source Role ID"
            }
          ]
        },
        "who": {
          "identifier": {
            "system": "urn:oid:2.16.840.1.113883.4.2",
            "value": "2.16.840.1.113883.4.2"
          }
        },
        "altId": "6580",
        "requestor": false,
        "network": {
          "address": "Workstation1.ehr.familyclinic.com",
          "type": "1"
        }
      }
    ],
    "source": {
      "site": "Cloud",
      "observer": {
        "display": "hl7connect.healthintersections.com.au"
      },
      "type": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
          "code": "3",
          "display": "Web Server"
        }
      ]
    },
    "entity": [
      {
        "type": {
          "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",
          "code": "2",
          "display": "System Object"
        },
        "role": {
          "system": "http://terminology.hl7.org/CodeSystem/object-role",
          "code": "24",
          "display": "Query"
        },
        "query": "aHR0cDovL2ZoaXItZGV2LmhlYWx0aGludGVyc2VjdGlvbnMuY29tLmF1L29wZW4vRW5jb3VudGVyP3BhcnRpY2lwYW50PTEz"
      }
    ]
  }