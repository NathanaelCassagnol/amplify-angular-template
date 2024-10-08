import { Endpoint } from "../../types/endpoint";

// https://hl7.org/fhir/R4/endpoint-example.json.html
// Example Endpoint

export const mockEndpoint1: Endpoint = {
    "resourceType": "Endpoint",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\tHealth Intersections CarePlan Hub<br/>\n\t\t\tCarePlans can be uploaded to/from this loccation\n\t\t</div>"
    },
    "identifier": [
      {
        "system": "http://example.org/enpoint-identifier",
        "value": "epcp12"
      }
    ],
    "status": "active",
    "connectionType": {
      "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
      "code": "hl7-fhir-rest"
    },
    "name": "Health Intersections CarePlan Hub",
    "managingOrganization": {
      "reference": "Organization/hl7"
    },
    "contact": [
      {
        "system": "email",
        "value": "endpointmanager@example.org",
        "use": "work"
      }
    ],
    "period": {
      "start": "2014-09-01"
    },
    "payloadType": [
      {
        "coding": [
          {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "CarePlan"
          }
        ]
      }
    ],
    "payloadMimeType": [
      "application/fhir+xml"
    ],
    "address": "http://fhir3.healthintersections.com.au/open/CarePlan",
    "header": [
      "bearer-code BASGS534s4"
    ]
  }