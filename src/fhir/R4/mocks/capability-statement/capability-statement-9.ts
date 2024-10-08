import { CapabilityStatement } from "../../types/capability-statement";

// https://hl7.org/fhir/R4/ehrsrle/conformance-ehrs-rle.json.html
// System which records information about EHR events
// (The page linked might be a little broken)

export const mockCapabilityStatement9: CapabilityStatement = {
    "resourceType": "CapabilityStatement",
    "id": "conformance-ehrs-rle",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n         \n      <h2>Record Lifecycle-conformant Electronic Health Record System</h2>\n         \n      <p>(Requirements Definition)</p>\n         \n      <p>Published: 2014-12-06 (draft)</p>\n         \n      <p>Published by: \n        <b>\n               \n          <a href=\"http://hl7.org/special/committees/ehr.htm\">Health Level Seven, Int'l - Electronic Health Record work group</a>\n            \n        </b>\n         \n      </p>\n         \n      <p>This profile defines the expected capabilities of an \n        <i>Electronic Health Record System</i> when conforming to the EHRS functional model's Record Lifecycle specification.\n      </p>\n         \n      <h2>General</h2>\n         \n      <table>\n            \n        <tbody>\n               \n          <tr>\n                  \n            <th>FHIR Version:</th>\n                  \n            <td>0.2</td>\n               \n          </tr>\n               \n          <tr>\n                  \n            <th>Supported formats:</th>\n                  \n            <td>xml, json</td>\n               \n          </tr>\n            \n        </tbody>\n         \n      </table>\n         \n      <h2>REST  behavior</h2>\n         \n      <p>Conformant systems must record \n        <a href=\"../provenance.html\">Provenance</a> records on all Create, Update and Delete actions on any resource other than Provenance or AuditEvent.       Conformant systems must record \n        <a href=\"../auditevent.html\">AuditEvent</a> records on all Create, Update and Delete actions as well as all GET operations (read, search, etc.)\n      </p>\n         \n      <p>\n            \n        <b>Security:</b>\n         \n      </p>\n         \n      <p>Any security rules??</p>\n         \n      <h3>Summary</h3>\n         \n      <table class=\"grid\">\n            \n        <thead>\n               \n          <tr>\n                  \n            <th>Resource</th>\n                  \n            <th>Search</th>\n                  \n            <th>Read</th>\n                  \n            <th>Read Version</th>\n                  \n            <th>Instance History</th>\n                  \n            <th>Resource History</th>\n                  \n            <th>Validate</th>\n                  \n            <th>Create</th>\n                  \n            <th>Update</th>\n                  \n            <th>Delete</th>\n               \n          </tr>\n            \n        </thead>\n            \n        <tbody>\n               \n          <tr>\n                  \n            <th>Provenance</th>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td>\n                     \n              <a href=\"#Provenance-create\" title=\"Allows defining a new data element.  Repositories requiring curation of submitted data elements may require all new data elements to have a status of 'draft'.\">Yes</a>\n                  \n            </td>\n                  \n            <td/>\n                  \n            <td/>\n               \n          </tr>\n               \n          <tr>\n                  \n            <th>AuditEvent</th>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td/>\n                  \n            <td>\n                     \n              <a href=\"#AuditEvent-create\" title=\"Allows defining a new data element.  Repositories requiring curation of submitted data elements may require all new data elements to have a status of 'draft'.\">Yes</a>\n                  \n            </td>\n                  \n            <td/>\n                  \n            <td/>\n               \n          </tr>\n            \n        </tbody>\n         \n      </table>\n         \n      <br/>\n         \n      <br/>\n         \n      <h3>\n            \n        <a href=\"../provenance.html\">Provenance</a>\n         \n      </h3>\n         \n      <h4>Interactions</h4>\n         \n      <table class=\"list\">\n            \n        <thead>\n               \n          <tr>\n                  \n            <th>Name</th>\n                  \n            <th>Description</th>\n               \n          </tr>\n            \n        </thead>\n            \n        <tbody>\n               \n          <tr>\n                  \n            <th>\n                     \n              <a name=\"Provenance-create\"> </a>\n                     \n              <span>create</span>\n                  \n            </th>\n                  \n            <td>\n                     \n              <p>Allows defining a new data element.  Repositories requiring curation of submitted data elements may require all new data elements to have a status of 'draft'.</p>\n                  \n            </td>\n               \n          </tr>\n            \n        </tbody>\n         \n      </table>\n         \n      <br/>\n         \n      <br/>\n         \n      <h3>\n            \n        <a href=\"../auditevent.html\">AuditEvent</a>\n         \n      </h3>\n         \n      <h4>Interactions</h4>\n         \n      <table class=\"list\">\n            \n        <thead>\n               \n          <tr>\n                  \n            <th>Name</th>\n                  \n            <th>Description</th>\n               \n          </tr>\n            \n        </thead>\n            \n        <tbody>\n               \n          <tr>\n                  \n            <th>\n                     \n              <a name=\"AuditEvent-create\"> </a>\n                     \n              <span>create</span>\n                  \n            </th>\n                  \n            <td>\n                     \n              <p>Allows defining a new data element.  Repositories requiring curation of submitted data elements may require all new data elements to have a status of 'draft'.</p>\n                  \n            </td>\n               \n          </tr>\n            \n        </tbody>\n         \n      </table>\n      \n    </div>"
    },
    "name": "Record Lifecycle-conformant Electronic Health Record System",
    "status": "draft",
    "date": "2014-12-06",
    "publisher": "Health Level Seven, Int'l - Electronic Health Record work group",
    "contact": [
      {
        "telecom": [
          {
            "system": "other",
            "value": "http://hl7.org/special/committees/ehr.htm"
          }
        ]
      }
    ],
    "description": "This profile defines the expected capabilities of an ''Electronic Health Record System'' when conforming to the EHRS functional model's Record Lifecycle specification.",
    "kind": "requirements",
    "fhirVersion": "4.0.1",
    "format": [
      "xml",
      "json"
    ],
    "rest": [
      {
        "mode": "client",
        "documentation": "Conformant systems must record [[Provenance]] records on all Create, Update and Delete actions on any resource other than Provenance or AuditEvent.       Conformant systems must record [[AuditEvent]] records on all Create, Update and Delete actions as well as all GET operations (read, search, etc.)",
        "security": {
          "description": "Any security rules??"
        },
        "resource": [
          {
            "type": "Provenance",
            "profile": "http://hl7.org/fhir/StructureDefinition/ehrsrle-provenance",
            "interaction": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                    "valueCode": "SHALL"
                  }
                ],
                "code": "create",
                "documentation": "Allows defining a new data element.  Repositories requiring curation of submitted data elements may require all new data elements to have a status of 'draft'."
              }
            ]
          },
          {
            "type": "AuditEvent",
            "profile": "http://hl7.org/fhir/StructureDefinition/ehrsrle-auditevent",
            "interaction": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                    "valueCode": "SHALL"
                  }
                ],
                "code": "create",
                "documentation": "Allows defining a new data element.  Repositories requiring curation of submitted data elements may require all new data elements to have a status of 'draft'."
              }
            ]
          }
        ]
      }
    ]
  }