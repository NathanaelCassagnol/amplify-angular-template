import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-graphic-example-1.json.html
// MolecularSequence Graphic example-1

export const mockMolecularSequence8: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "graphic-example-1",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-1</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000002.12 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000002.12' = 'NC_000002.12)</span></td><td>watson</td><td>128273724</td><td>128273732</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>Cigar</b></td></tr><tr><td>*</td><td>128273725</td><td>128273726</td><td>G</td><td>T</td><td>1M</td></tr></table><p><b>pointer</b>: <a>MolecularSequence/graphic-example-2</a></p></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "referenceSeq": {
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore",
            "code": "NC_000002.12"
          }
        ]
      },
      "strand": "watson",
      "windowStart": 128273724,
      "windowEnd": 128273732
    },
    "variant": [
      {
        "start": 128273725,
        "end": 128273726,
        "observedAllele": "G",
        "referenceAllele": "T",
        "cigar": "1M"
      }
    ],
    "pointer": [
      {
        "reference": "MolecularSequence/graphic-example-2"
      }
    ]
  }