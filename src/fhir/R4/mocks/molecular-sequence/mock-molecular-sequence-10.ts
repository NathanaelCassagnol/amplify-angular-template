import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-graphic-example-3.json.html
// MolecularSequence Graphic example-3

export const mockMolecularSequence10: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "graphic-example-3",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-3</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqPointer</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td><a>MolecularSequence/graphic-example-5</a></td><td>watson</td><td>128273732</td><td>128273736</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>Cigar</b></td></tr><tr><td>*</td><td>1282737234</td><td>128273736</td><td>GA</td><td>AT</td><td>2M</td></tr></table><p><b>pointer</b>: <a>MolecularSequence/graphic-example-4</a></p></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "referenceSeq": {
      "referenceSeqPointer": {
        "reference": "MolecularSequence/graphic-example-5"
      },
      "strand": "watson",
      "windowStart": 128273732,
      "windowEnd": 128273736
    },
    "variant": [
      {
        "start": 1282737234,
        "end": 128273736,
        "observedAllele": "GA",
        "referenceAllele": "AT",
        "cigar": "2M"
      }
    ],
    "pointer": [
      {
        "reference": "MolecularSequence/graphic-example-4"
      }
    ]
  }