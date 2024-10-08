import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/molecularsequence-example.json.html
// Simple sequence example

export const mockMolecularSequence1: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000009.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000009.11' = 'NC_000009.11)</span></td><td>watson</td><td>22125500</td><td>22125510</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>22125503</td><td>22125504</td><td>C</td><td>G</td></tr></table><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td><td><b>VariantsetId</b></td></tr><tr><td>*</td><td>openapi</td><td><a>http://grch37.rest.ensembl.org/ga4gh/variants/3:rs1333049?content-type=application/json</a></td><td>GA4GH API</td><td>3:rs1333049</td></tr></table></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "patient": {
      "reference": "Patient/example"
    },
    "referenceSeq": {
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore",
            "code": "NC_000009.11"
          }
        ]
      },
      "strand": "watson",
      "windowStart": 22125500,
      "windowEnd": 22125510
    },
    "variant": [
      {
        "start": 22125503,
        "end": 22125504,
        "observedAllele": "C",
        "referenceAllele": "G"
      }
    ],
    "repository": [
      {
        "type": "openapi",
        "url": "http://grch37.rest.ensembl.org/ga4gh/variants/3:rs1333049?content-type=application/json",
        "name": "GA4GH API",
        "variantsetId": "3:rs1333049"
      }
    ]
  }