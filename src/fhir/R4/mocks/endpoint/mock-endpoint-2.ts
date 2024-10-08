import { Bundle } from "../../types/bundle.types";

// https://hl7.org/fhir/R4/endpoint-examples-general-template.json.html
// Collection of endpoint examples

export const mockEndpoint2Bundle: Bundle = {
    "resourceType": "Bundle",
    "id": "b0a5e4277-83c4-4adb-87e2-e3efe3369b6f",
    "meta": {
      "lastUpdated": "2012-05-29T23:45:32Z"
    },
    "type": "collection",
    "entry": [
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/71",
        "resource": {
          "resourceType": "Endpoint",
          "id": "71",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              CarePlan repository, CarePlan<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "hl7-fhir-rest"
          },
          "name": "CarePlan repository",
          "managingOrganization": {
            "display": "Telstra Health"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "CarePlan"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/fhir+xml"
          ],
          "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/72",
        "resource": {
          "resourceType": "Endpoint",
          "id": "72",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Questionnaire Destination, QuestionnaireResponse<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "hl7-fhir-rest"
          },
          "name": "Questionnaire Destination",
          "managingOrganization": {
            "display": "Telstra Health"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "QuestionnaireResponse"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/fhir+xml"
          ],
          "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/73",
        "resource": {
          "resourceType": "Endpoint",
          "id": "73",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Referral Requests, ServiceRequest<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "hl7-fhir-rest"
          },
          "name": "Referral Requests",
          "managingOrganization": {
            "display": "Telstra Health"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "ServiceRequest"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/fhir+xml"
          ],
          "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/74",
        "resource": {
          "resourceType": "Endpoint",
          "id": "74",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Referral Requests, ServiceRequest QuestionnaireResponse<br/>\n              Address: https://open.epic.com/Interface/FHIR</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "hl7-fhir-rest"
          },
          "name": "Referral Requests",
          "managingOrganization": {
            "display": "Epic demo organization"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "ServiceRequest QuestionnaireResponse"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/fhir+json"
          ],
          "address": "https://open.epic.com/Interface/FHIR"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/75",
        "resource": {
          "resourceType": "Endpoint",
          "id": "75",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Subscription receiver, ServiceRequest<br/>\n              Address: mailto:subscriptions@example.org</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "secure-email"
          },
          "name": "Subscription receiver",
          "managingOrganization": {
            "display": "Telstra Health"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "ServiceRequest"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/fhir+xml"
          ],
          "address": "mailto:subscriptions@example.org"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/76",
        "resource": {
          "resourceType": "Endpoint",
          "id": "76",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              valid usecase?, CDA-EventSummary<br/>\n              Address: https://sqlonfhir-dstu2.azurewebsites.net/fhir</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "hl7-fhir-msg"
          },
          "name": "valid usecase?",
          "managingOrganization": {
            "display": "Telstra Health"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "CDA-EventSummary"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/pdf"
          ],
          "address": "https://sqlonfhir-dstu2.azurewebsites.net/fhir"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/77",
        "resource": {
          "resourceType": "Endpoint",
          "id": "77",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              v2 referral Requests, REF-I12<br/>\n              Address: 127.0.0.1</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "hl7v2-mllp"
          },
          "name": "v2 referral Requests",
          "managingOrganization": {
            "display": "Epic demo organization"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "REF-I12"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/hl7-v2"
          ],
          "address": "127.0.0.1"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/78",
        "resource": {
          "resourceType": "Endpoint",
          "id": "78",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              xds event summaries, CDA-EventSummary<br/>\n              Address: https://open.epic.com/Interface/XDS.b</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "ihe-xds"
          },
          "name": "xds event summaries",
          "managingOrganization": {
            "display": "Epic demo organization"
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "CDA-EventSummary"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/hl7-sda+xml; variant=XDA/XDS"
          ],
          "address": "https://open.epic.com/Interface/XDS.b"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/79",
        "resource": {
          "resourceType": "Endpoint",
          "id": "79",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "dicom-wado-rs"
          },
          "name": "Enterprise Image Archive",
          "managingOrganization": {
            "display": "Multi-site Co."
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/dicom; variant=DICOM WADO-RS"
          ],
          "address": "https://pacs.hospital.org/dicomweb"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/80",
        "resource": {
          "resourceType": "Endpoint",
          "id": "80",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "dicom-qido-rs"
          },
          "name": "Enterprise Image Archive",
          "managingOrganization": {
            "display": "Multi-site Co."
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/dicom; variant=DICOM QIDO-RS"
          ],
          "address": "https://pacs.hospital.org/dicomweb"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/81",
        "resource": {
          "resourceType": "Endpoint",
          "id": "81",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "dicom-stow-rs"
          },
          "name": "Enterprise Image Archive",
          "managingOrganization": {
            "display": "Multi-site Co."
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/dicom; variant=DICOM STOW-RS"
          ],
          "address": "https://pacs.hospital.org/dicomweb"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/82",
        "resource": {
          "resourceType": "Endpoint",
          "id": "82",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/dicomweb</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "dicom-stow-rs"
          },
          "name": "Enterprise Image Archive",
          "managingOrganization": {
            "display": "Multi-site Co."
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/dicom; variant=DICOM STOW-RS"
          ],
          "address": "https://pacs.hospital.org/dicomweb"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/83",
        "resource": {
          "resourceType": "Endpoint",
          "id": "83",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/wadoUri</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "dicom-wado-uri"
          },
          "name": "Enterprise Image Archive",
          "managingOrganization": {
            "display": "Multi-site Co."
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/dicom; variant=DICOM WADO-URI"
          ],
          "address": "https://pacs.hospital.org/wadoUri"
        }
      },
      {
        "fullUrl": "http://hl7.org/fhir/Endpoint/84",
        "resource": {
          "resourceType": "Endpoint",
          "id": "84",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n              Enterprise Image Archive, varies (application/dicom, application/dicom+xml, image/jpeg, and many more)<br/>\n              Address: https://pacs.hospital.org/IHEInvokeImageDisplay</div>"
          },
          "status": "active",
          "connectionType": {
            "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
            "code": "ihe-iid"
          },
          "name": "Enterprise Image Archive",
          "managingOrganization": {
            "display": "Multi-site Co."
          },
          "payloadType": [
            {
              "coding": [
                {
                  "code": "varies (application/dicom, application/dicom+xml, image/jpeg, and many more)"
                }
              ]
            }
          ],
          "payloadMimeType": [
            "application/dicom; variant=IHE IID"
          ],
          "address": "https://pacs.hospital.org/IHEInvokeImageDisplay"
        }
      }
    ]
  }