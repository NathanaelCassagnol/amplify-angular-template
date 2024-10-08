import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/coord-0base-example.json.html
// Example of a record with 0-based coordinatesystem

export const mockMolecularSequence13: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "coord-0-base",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: coord-0-base</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqString</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>ACGTAGTC</td><td>watson</td><td>0</td><td>8</td></tr></table><blockquote><p><b>variant</b></p><p><b>start</b>: 2</p><p><b>end</b>: 2</p><p><b>observedAllele</b>: ATG</p><p><b>referenceAllele</b>: -</p><p><b>cigar</b>: 3I</p></blockquote><blockquote><p><b>variant</b></p><p><b>start</b>: 4</p><p><b>end</b>: 5</p><p><b>observedAllele</b>: T</p><p><b>referenceAllele</b>: A</p><p><b>cigar</b>: 1M</p></blockquote><blockquote><p><b>variant</b></p><p><b>start</b>: 6</p><p><b>end</b>: 7</p><p><b>observedAllele</b>: -</p><p><b>referenceAllele</b>: T</p><p><b>cigar</b>: 1D</p></blockquote><p><b>observedSeq</b>: ACATGGTAGC</p></div>"
    },
    "type": "dna",
    "coordinateSystem": 0,
    "referenceSeq": {
      "referenceSeqString": "ACGTAGTC",
      "strand": "watson",
      "windowStart": 0,
      "windowEnd": 8
    },
    "variant": [
      {
        "start": 2,
        "end": 2,
        "observedAllele": "ATG",
        "referenceAllele": "-",
        "cigar": "3I"
      },
      {
        "start": 4,
        "end": 5,
        "observedAllele": "T",
        "referenceAllele": "A",
        "cigar": "1M"
      },
      {
        "start": 6,
        "end": 7,
        "observedAllele": "-",
        "referenceAllele": "T",
        "cigar": "1D"
      }
    ],
    "observedSeq": "ACATGGTAGC"
  }