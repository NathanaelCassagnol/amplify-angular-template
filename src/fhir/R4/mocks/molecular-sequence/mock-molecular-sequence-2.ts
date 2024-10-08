import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-example-fda.json.html
// MolecularSequence example from precisionFDA

export const mockMolecularSequence2: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "fda-example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fda-example</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000001.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000001.11' = 'NC_000001.11)</span></td><td>watson</td><td>10453</td><td>101770080</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>13116</td><td>13117</td><td>T</td><td>G</td></tr></table><h3>Qualities</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>StandardSequence</b></td><td><b>Start</b></td><td><b>End</b></td><td><b>Method</b></td><td><b>TruthTP</b></td><td><b>QueryTP</b></td><td><b>TruthFN</b></td><td><b>QueryFP</b></td><td><b>GtFP</b></td><td><b>Precision</b></td><td><b>Recall</b></td><td><b>FScore</b></td></tr><tr><td>*</td><td>snp</td><td>file-Bk50V4Q0qVb65P0v2VPbfYPZ <span>(Details : {https://precision.fda.gov/files/ code 'file-Bk50V4Q0qVb65P0v2VPbfYPZ' = 'file-Bk50V4Q0qVb65P0v2VPbfYPZ)</span></td><td>10453</td><td>101770080</td><td>Vcfeval + Hap.py Comparison <span>(Details : {https://precision.fda.gov/jobs/ code 'job-ByxYPx809jFVy21KJG74Jg3Y' = 'job-ByxYPx809jFVy21KJG74Jg3Y)</span></td><td>7749</td><td>7984</td><td>2554</td><td>10670</td><td>2186</td><td>0.428005</td><td>0.752111</td><td>0.545551</td></tr></table><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td><td><b>VariantsetId</b></td></tr><tr><td>*</td><td>login</td><td><a>https://precision.fda.gov/files/file-Bx37ZK009P4bX5g3qjkFZV38</a></td><td>FDA</td><td>file-Bx37ZK009P4bX5g3qjkFZV38</td></tr></table></div>"
    },
    "type": "dna",
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
        "type": "snp",
        "standardSequence": {
          "coding": [
            {
              "system": "https://precision.fda.gov/files/",
              "code": "file-Bk50V4Q0qVb65P0v2VPbfYPZ"
            }
          ]
        },
        "start": 10453,
        "end": 101770080,
        "method": {
          "coding": [
            {
              "system": "https://precision.fda.gov/jobs/",
              "code": "job-ByxYPx809jFVy21KJG74Jg3Y"
            }
          ],
          "text": "Vcfeval + Hap.py Comparison"
        },
        "truthTP": 7749,
        "queryTP": 7984,
        "truthFN": 2554,
        "queryFP": 10670,
        "gtFP": 2186,
        "precision": 0.428005,
        "recall": 0.752111,
        "fScore": 0.545551
      }
    ],
    "repository": [
      {
        "type": "login",
        "url": "https://precision.fda.gov/files/file-Bx37ZK009P4bX5g3qjkFZV38",
        "name": "FDA",
        "variantsetId": "file-Bx37ZK009P4bX5g3qjkFZV38"
      }
    ]
  }