import { SearchParameter } from "fhir/R4/types/search-parameter";

// https://hl7.org/fhir/R4/searchparameter-example-extension.json.html
// Search parameter for an extension example

export const mockSearchParameter2: SearchParameter = {
    "resourceType": "SearchParameter",
    "id": "example-extension",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-extension</p><p><b>url</b>: <b>http://hl7.org/fhir/SearchParameter/example-extension</b></p><p><b>name</b>: Example Search Parameter on an extension</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>publisher</b>: Health Level Seven International (FHIR Infrastructure)</p><p><b>contact</b>: </p><p><b>description</b>: Search by url for a participation agreement, which is stored in a DocumentReference</p><p><b>code</b>: part-agree</p><p><b>base</b>: Patient</p><p><b>type</b>: reference</p><p><b>expression</b>: DocumentReference.extension('http://example.org/fhir/StructureDefinition/participation-agreement')</p><p><b>xpath</b>: f:DocumentReference/f:extension[@url='http://example.org/fhir/StructureDefinition/participation-agreement']</p><p><b>xpathUsage</b>: normal</p><p><b>target</b>: DocumentReference</p></div>"
    },
    "url": "http://hl7.org/fhir/SearchParameter/example-extension",
    "name": "Example Search Parameter on an extension",
    "status": "draft",
    "experimental": true,
    "publisher": "Health Level Seven International (FHIR Infrastructure)",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      }
    ],
    "description": "Search by url for a participation agreement, which is stored in a DocumentReference",
    "code": "part-agree",
    "base": [
      "Patient"
    ],
    "type": "reference",
    "expression": "DocumentReference.extension('http://example.org/fhir/StructureDefinition/participation-agreement')",
    "xpath": "f:DocumentReference/f:extension[@url='http://example.org/fhir/StructureDefinition/participation-agreement']",
    "xpathUsage": "normal",
    "target": [
      "DocumentReference"
    ]
  }