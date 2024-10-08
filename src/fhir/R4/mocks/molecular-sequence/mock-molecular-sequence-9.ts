import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-graphic-example-2.json.html
// MolecularSequence Graphic example-2

export const mockMolecularSequence9: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "graphic-example-2",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-2</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqString</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>CGCCATTG</td><td>watson</td><td>0</td><td>8</td></tr></table><p><b>pointer</b>: <a>MolecularSequence/graphic-example-3</a></p></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "referenceSeq": {
      "referenceSeqString": "CGCCATTG",
      "strand": "watson",
      "windowStart": 0,
      "windowEnd": 8
    },
    "pointer": [
      {
        "reference": "MolecularSequence/graphic-example-3"
      }
    ]
  }