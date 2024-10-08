import { Library } from "../../types/library";

// https://hl7.org/fhir/R4/library-composition-example.json.html
// Zika Virus Management Library

export const mockLibrary10: Library = {
    "resourceType": "Library",
    "id": "composition-example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Example of a library used as a composition of other artifacts.\n    </div>"
    },
    "identifier": [
      {
        "use": "official",
        "system": "http://example.org",
        "value": "Zika Artifacts"
      }
    ],
    "version": "1.0.0",
    "title": "Zika Artifacts",
    "status": "draft",
    "type": {
      "coding": [
        {
          "code": "asset-collection"
        }
      ]
    },
    "date": "2017-03-10",
    "description": "Artifacts required for implementation of Zika Virus Management",
    "topic": [
      {
        "text": "Zika Virus Management"
      }
    ],
    "relatedArtifact": [
      {
        "type": "composed-of",
        "resource": "ActivityDefinition/administer-zika-virus-exposure-assessment"
      },
      {
        "type": "composed-of",
        "resource": "ActivityDefinition/order-serum-zika-dengue-virus-igm"
      },
      {
        "type": "composed-of",
        "resource": "ActivityDefinition/provide-mosquito-prevention-advice"
      },
      {
        "type": "composed-of",
        "resource": "Library/zika-virus-intervention-logic"
      },
      {
        "type": "composed-of",
        "resource": "PlanDefinition/zika-virus-intervention"
      },
      {
        "type": "composed-of",
        "resource": "Questionnaire/zika-virus-exposure-assessment"
      },
      {
        "type": "derived-from",
        "url": "https://www.cdc.gov/mmwr/volumes/65/wr/mm6539e1.htm?s_cid=mm6539e1_w"
      }
    ]
  }