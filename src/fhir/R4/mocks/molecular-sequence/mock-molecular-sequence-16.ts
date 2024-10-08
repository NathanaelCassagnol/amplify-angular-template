import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-example-fda-vcfeval.json.html
// MolecularSequence example for vcf and Hap.py comparison on precisionFDA

export const mockMolecularSequence16: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "fda-vcfeval-comparison",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fda-vcfeval-comparison</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000001.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000001.11' = 'NC_000001.11)</span></td><td>watson</td><td>10453</td><td>101770080</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>13116</td><td>13117</td><td>T</td><td>G</td></tr></table><blockquote><p><b>quality</b></p><p><b>type</b>: indel</p><p><b>standardSequence</b>: file-BkZxBZ00bpJVk2q6x43b1YBx <span>(Details : {https://precision.fda.gov/files/ code 'file-BkZxBZ00bpJVk2q6x43b1YBx' = 'file-BkZxBZ00bpJVk2q6x43b1YBx)</span></p><p><b>start</b>: 10453</p><p><b>end</b>: 101770080</p><p><b>method</b>: Vcfeval + Hap.py Comparison <span>(Details : {https://precision.fda.gov/apps/ code 'app-BxfGF8j02pBZzZxbzZxP725P' = 'app-BxfGF8j02pBZzZxbzZxP725P)</span></p><p><b>truthTP</b>: 7749</p><p><b>truthFN</b>: 2554</p><p><b>queryFP</b>: 10670</p><p><b>gtFP</b>: 2186</p><p><b>precision</b>: 0.428005</p><p><b>recall</b>: 0.752111</p></blockquote><blockquote><p><b>quality</b></p><p><b>type</b>: snp</p><p><b>standardSequence</b>: file-BkZxBZ00bpJVk2q6x43b1YBx <span>(Details : {https://precision.fda.gov/files/ code 'file-BkZxBZ00bpJVk2q6x43b1YBx' = 'file-BkZxBZ00bpJVk2q6x43b1YBx)</span></p><p><b>start</b>: 10453</p><p><b>end</b>: 101770080</p><p><b>method</b>: Vcfeval + Hap.py Comparison <span>(Details : {https://precision.fda.gov/apps/ code 'app-BxfGF8j02pBZzZxbzZxP725P' = 'app-BxfGF8j02pBZzZxbzZxP725P)</span></p><p><b>truthTP</b>: 92106</p><p><b>truthFN</b>: 1247</p><p><b>queryFP</b>: 21744</p><p><b>gtFP</b>: 493</p><p><b>precision</b>: 0.808602</p><p><b>recall</b>: 0.986642</p></blockquote><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td></tr><tr><td>*</td><td>login</td><td><a>https://precision.fda.gov/jobs/job-ByxYPx809jFVy21KJG74Jg3Y</a></td><td>FDA</td></tr></table></div>"
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
        "type": "indel",
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
        "method": {
          "coding": [
            {
              "system": "https://precision.fda.gov/apps/",
              "code": "app-BxfGF8j02pBZzZxbzZxP725P"
            }
          ],
          "text": "Vcfeval + Hap.py Comparison"
        },
        "truthTP": 7749,
        "truthFN": 2554,
        "queryFP": 10670,
        "gtFP": 2186,
        "precision": 0.428005,
        "recall": 0.752111
      },
      {
        "type": "snp",
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
        "method": {
          "coding": [
            {
              "system": "https://precision.fda.gov/apps/",
              "code": "app-BxfGF8j02pBZzZxbzZxP725P"
            }
          ],
          "text": "Vcfeval + Hap.py Comparison"
        },
        "truthTP": 92106,
        "truthFN": 1247,
        "queryFP": 21744,
        "gtFP": 493,
        "precision": 0.808602,
        "recall": 0.986642
      }
    ],
    "repository": [
      {
        "type": "login",
        "url": "https://precision.fda.gov/jobs/job-ByxYPx809jFVy21KJG74Jg3Y",
        "name": "FDA"
      }
    ]
  }