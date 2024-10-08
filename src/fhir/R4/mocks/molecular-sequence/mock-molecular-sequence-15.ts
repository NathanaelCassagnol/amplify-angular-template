import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-example-fda-comparisons.json.html
// MolecularSequence example for vcf comparison on precisionFDA

export const mockMolecularSequence15: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "fda-vcf-comparison",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fda-vcf-comparison</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000001.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000001.11' = 'NC_000001.11)</span></td><td>watson</td><td>10453</td><td>101770080</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>13116</td><td>13117</td><td>T</td><td>G</td></tr></table><h3>Qualities</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>StandardSequence</b></td><td><b>Start</b></td><td><b>End</b></td><td><b>Score</b></td><td><b>Method</b></td><td><b>TruthTP</b></td><td><b>TruthFN</b></td><td><b>QueryFP</b></td><td><b>GtFP</b></td><td><b>Precision</b></td><td><b>FScore</b></td></tr><tr><td>*</td><td>unknown</td><td>file-BkZxBZ00bpJVk2q6x43b1YBx <span>(Details : {https://precision.fda.gov/files/ code 'file-BkZxBZ00bpJVk2q6x43b1YBx' = 'file-BkZxBZ00bpJVk2q6x43b1YBx)</span></td><td>10453</td><td>101770080</td><td>5.000</td><td>VCF Comparison <span>(Details : {https://precision.fda.gov/apps/ code 'app-BqB9XZ8006ZZ2g5KzGXP3fpq' = 'app-BqB9XZ8006ZZ2g5KzGXP3fpq)</span></td><td>129481</td><td>3168</td><td>1507</td><td>2186</td><td>0.9885</td><td>0.9823</td></tr></table><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td></tr><tr><td>*</td><td>login</td><td><a>https://precision.fda.gov/comparisons/1850</a></td><td>FDA</td></tr></table></div>"
    },
    "coordinateSystem": 1,
    "patient": {
      "reference": "Patient/example"
    },
    "referenceSeq": {
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore",
            "code": "NC_000001.11"
          }
        ]
      },
      "strand": "watson",
      "windowStart": 10453,
      "windowEnd": 101770080
    },
    "variant": [
      {
        "start": 13116,
        "end": 13117,
        "observedAllele": "T",
        "referenceAllele": "G"
      }
    ],
    "quality": [
      {
        "type": "unknown",
        "standardSequence": {
          "coding": [
            {
              "system": "https://precision.fda.gov/files/",
              "code": "file-BkZxBZ00bpJVk2q6x43b1YBx"
            }
          ]
        },
        "start": 10453,
        "end": 101770080,
        "score": {
          "value": 5.000
        },
        "method": {
          "coding": [
            {
              "system": "https://precision.fda.gov/apps/",
              "code": "app-BqB9XZ8006ZZ2g5KzGXP3fpq"
            }
          ],
          "text": "VCF Comparison"
        },
        "truthTP": 129481,
        "truthFN": 3168,
        "queryFP": 1507,
        "gtFP": 2186,
        "precision": 0.9885,
        "fScore": 0.9823
      }
    ],
    "repository": [
      {
        "type": "login",
        "url": "https://precision.fda.gov/comparisons/1850",
        "name": "FDA"
      }
    ]
  }