import { MolecularSequence } from "../../types/molecular-sequence";

// https://hl7.org/fhir/R4/sequence-genetics-example-breastcancer.json.html
// MolecularSequence example for patient with breast cancer gene variant

export const mockMolecularSequence17: MolecularSequence = {
    "resourceType": "MolecularSequence",
    "id": "breastcancer",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: breastcancer</p><p><b>type</b>: rna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/brcapat</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>Homo sapiens BRCA2, DNA repair associated (BRCA2), mRNA <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore/ code 'NM_000059.3' = 'NM_000059.3', given as 'Homo sapiens BRCA2, DNA repair associated (BRCA2), mRNA'})</span></td><td>101488058</td><td>101499444</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>32316186</td><td>32316187</td><td>A</td><td>C</td></tr></table></div>"
    },
    "type": "rna",
    "coordinateSystem": 0,
    "patient": {
      "reference": "Patient/brcapat"
    },
    "referenceSeq": {
      "referenceSeqId": {
        "coding": [
          {
            "system": "http://www.ncbi.nlm.nih.gov/nuccore/",
            "code": "NM_000059.3",
            "display": "Homo sapiens BRCA2, DNA repair associated (BRCA2), mRNA"
          }
        ]
      },
      "windowStart": 101488058,
      "windowEnd": 101499444
    },
    "variant": [
      {
        "start": 32316186,
        "end": 32316187,
        "observedAllele": "A",
        "referenceAllele": "C"
      }
    ]
  }