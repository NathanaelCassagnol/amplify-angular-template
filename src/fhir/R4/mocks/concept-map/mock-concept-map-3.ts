import { ConceptMap } from "fhir/R4/types/concept-map";

// https://hl7.org/fhir/R4/conceptmap-example-specimen-type.json.html
// Specimen Type v2 -> SNOMED CT Mapping

export const mockConceptMap3: ConceptMap = {
    "resourceType": "ConceptMap",
    "id": "102",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <h2>Specimen mapping from v2 table 0487 to SNOMED CT (http://hl7.org/fhir/ConceptMap/102)</h2>\n      <p>Mapping from \n        <a href=\"v2/0487/index.html\">http://terminology.hl7.org/ValueSet/v2-0487</a> to http://snomed.info/sct?fhir_vs\n      </p>\n      <p>DRAFT. Published on 25/07/2013 by FHIR project team (original source: LabMCoP) (\n        <a href=\"http://hl7.org/fhir\">http://hl7.org/fhir</a>, \n        <a href=\"http://www.phconnect.org/group/laboratorymessagingcommunityofpractice/forum/attachment/download?id=3649725%3AUploadedFile%3A145786\">http://www.phconnect.org/group...</a>). \n      </p>\n      <br/>\n      <table class=\"grid\">\n        <tr>\n          <td colspan=\"1\">\n            <b>Source Concept Details</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td colspan=\"4\">\n            <b>Destination Concept Details</b>\n          </td>\n          <td>\n            <b>Comment</b>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b>Code</b> from \n            <a href=\"v2/0487/index.html\" title=\"http://terminology.hl7.org/CodeSystem/v2-0487\">v2 Specimen Type</a>\n          </td>\n          <td/>\n          <td>\n            <b>Code</b> from \n            <a href=\"codesystem-snomedct.html\" title=\"http://snomed.info/sct\">SNOMED CT (all versions)</a>\n          </td>\n          <td>\n            <b>Code</b> from \n            <a href=\"codesystem-snomedct.html\" title=\"http://snomed.info/sct\">SNOMED CT (all versions)</a>\n          </td>\n          <td>\n            <b>Code</b> from \n            <a href=\"codesystem-snomedct.html\" title=\"http://snomed.info/sct\">SNOMED CT (all versions)</a>\n          </td>\n          <td>\n            <b>Code</b> from \n            <a href=\"codesystem-snomedct.html\" title=\"http://snomed.info/sct\">SNOMED CT (all versions)</a>\n          </td>\n          <td/>\n        </tr>\n        <tr>\n          <td>ACNE (Tissue, Acne)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309068002 (Skin lesion sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ACNFLD (Fluid, Acne)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119323008 (Pus specimen)</td>\n          <td/>\n          <td/>\n          <td>47002008 (Pustule)</td>\n          <td>HL7 term is a historical term. mapped to Pus</td>\n        </tr>\n        <tr>\n          <td>AIRS (Air Sample)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>446302006 (Air sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ALL (Allograft)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td>7970006 (Allograft)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>AMP (Amputation)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>408654003 (Specimen obtained by amputation)</td>\n          <td>81723002 (Amputation)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ANGI (Catheter Tip, Angio)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>ARTC (Catheter Tip, Arterial)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>ASERU (Serum, Acute)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>pending</td>\n        </tr>\n        <tr>\n          <td>ASP (Aspirate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119295008 (Specimen obtained by aspiration)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ATTE (Environment, Attest)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>AUTOC (Environmental, Autoclave Capsule)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>AUTP (Autopsy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>This really is not a specimen per se - it is the state of the subject from whom the specimen is collected, so it should be used as a  specimen type modifier ONLY!. Often this is indicated with a special medical record number or other notation on the patient. needs to have specimen type (e.g. SPM-4) and source site (SPM.8) and spatial orientation (SPM.9)</td>\n        </tr>\n        <tr>\n          <td>BBL (Blood bag)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119304001 (Blood bag specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BCYST (Cyst, Baker's)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td>32361000 (Popliteal fossa)</td>\n          <td/>\n          <td>submitted (PLR155) with parent of  167874004^knee joint synovial fluid (specimen), with specimen source topography 32361000^Popliteal fossa structure (body structure)</td>\n        </tr>\n        <tr>\n          <td>BITE (Bite)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Submit for new term with parent 119365002</td>\n        </tr>\n        <tr>\n          <td>BLEB (Bleb)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309049000 (Lesion sample)</td>\n          <td/>\n          <td/>\n          <td>339008 (Blister)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>BLIST (Blister)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309049000 (Lesion sample)</td>\n          <td/>\n          <td/>\n          <td>339008 (Blister)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>BOIL (Boil)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119295008 (Specimen obtained by aspiration)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td/>\n          <td>59843005 (Furuncle)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>BON (Bone)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>430268003 (Specimen from bone)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BOWL (Bowel contents)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Don't use this term for human samples - use Stool instead. animal would use small intestinal contents, large intestinal contents</td>\n        </tr>\n        <tr>\n          <td>BPU (Blood product unit)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119300005 (Specimen from blood product)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BRN (Burn)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119367005 (Specimen from burn injury)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BRSH (Brush)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258415003 (Biopsy sample)</td>\n          <td>439336003 (Brush biopsy)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BRTH (Breath (use EXHLD))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119336008 (Exhaled air specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BRUS (Brushing)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309176002 (Bronchial brushings sample)</td>\n          <td>80657008 (Bronchoscopy with brush biopsy)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>BUB (Bubo)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>302795002 (Lymph node aspirate)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td/>\n          <td>11585000 (Bubo)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>BULLA (Bulla/Bullae)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258482009 (Vesicle fluid sample)</td>\n          <td/>\n          <td/>\n          <td>339008 (Blister)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>BX (Biopsy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258415003 (Biopsy sample)</td>\n          <td>86273004 (Biopsy)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CALC (Calculus (=Stone))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119350003 (Calculus specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CARBU (Carbuncle)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td/>\n          <td/>\n          <td>41570003 (Carbuncle)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>CAT (Catheter)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119311002 (Catheter specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CBITE (Bite, Cat)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Submit for new term with parent 119365002</td>\n        </tr>\n        <tr>\n          <td>CLIPP (Clippings)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119327009 (Nail specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>Be more specific use either: 119326000^hair specimen or 119327009^nail specimen</td>\n        </tr>\n        <tr>\n          <td>CNJT (Conjunctiva)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119401005 (Specimen from conjunctiva)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CNJT (Conjunctiva)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>128160006 (Tissue specimen from conjunctiva)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CNJT (Conjunctiva)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258498002 (Conjunctival swab)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>COL (Colostrum)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119329007 (Colostrum specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CONE (Biospy, Cone)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>399713008 (Specimen from uterine cervix obtained by cone biopsy)</td>\n          <td>54535009 (Cone biopsy of cervix)</td>\n          <td>71252005 (Uterine cervix)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CSCR (Scratch, Cat)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>submit for new term with parent 119365002^Specimen from wound (specimen)</td>\n        </tr>\n        <tr>\n          <td>CSERU (Serum, Convalescent)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>pending</td>\n        </tr>\n        <tr>\n          <td>CSITE (Catheter Insertion Site)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258507003 (Swab of line insertion site)</td>\n          <td>285570007 (Taking of swab)</td>\n          <td/>\n          <td>386144009 (Line insertion site)</td>\n          <td>Prefer to have aspirate of the pus oozing out from cleaned insertion site - if swab is all that can be obtained, then swab after cleaning, otherwise you may get a contaminated specimen and a falsely identified infected central line. Do not just swab the reddened area - that will just collect skin flora       </td>\n        </tr>\n        <tr>\n          <td>CSMY (Fluid,  Cystostomy Tube)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CST (Fluid, Cyst)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258453008 (Cyst fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CSVR (Blood, Cell Saver)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD - may use blood and SPM-6</td>\n        </tr>\n        <tr>\n          <td>CTP (Catheter tip)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>CVPS (Site, CVP)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258507003 (Swab of line insertion site)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>CVPT (Catheter Tip, CVP)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td>445085009 (Tunneled central venous catheter)</td>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>CYN (Nodule, Cystic)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119368000 (Specimen from cyst)</td>\n          <td/>\n          <td/>\n          <td>27925004 (Nodule)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>CYST (Cyst)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119368000 (Specimen from cyst)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>DBITE (Bite, Dog)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Submit for new term with parent 119365002</td>\n        </tr>\n        <tr>\n          <td>DCS (Sputum, Deep Cough)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119335007 (Coughed sputum specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>DEC (Ulcer, Decubitus)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258505006 (Skin ulcer swab)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>DEION (Environmental, Water  (Deionized))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>DIA (Dialysate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119360007 (Dialysis fluid specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>DISCHG (Discharge)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258439008 (Discharge)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>DIV (Diverticulum)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td>31113003 (Diverticulum)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>DRN (Drain)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119306004 (Drain device specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>DRNG (Drainage, Tube)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258455001 (Drainage fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td/>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead: not an acceptable specimen for micro - not specific enough term</td>\n        </tr>\n        <tr>\n          <td>DRNGP (Drainage, Penrose)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td/>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>EARW (Ear wax (cerumen))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122580007 (Cerumen specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EBRUSH (Brush, Esophageal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309210009 (Oesophageal brushings sample)</td>\n          <td>36213007 (Endoscopy and brush biopsy)</td>\n          <td>32849002 (Esophagus)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EEYE (Environmental, Eye Wash)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>EFF (Environmental, Effluent)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>EFFUS (Effusion)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258440005 (Effusion sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EFOD (Environmental, Food)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119320006 (Food specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EISO (Environmental, Isolette)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258536003 (Incubator swab)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ELT (Electrode)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119314005 (Electrode specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ENVIR (Environmental, Unidentified Substance)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119324002 (Specimen of unknown material)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EOTH (Environmental, Other Substance)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>ESOI (Environmental, Soil)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>ESOS (Environmental, Solution (Sterile))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>ETA (Aspirate,  Endotrach)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119307008 (Endotracheal tube specimen)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td>321667001 (Respiratory tract structure)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ETTP (Catheter Tip, Endotracheal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>ETTUB (Tube, Endotracheal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119307008 (Endotracheal tube specimen)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td>321667001 (Respiratory tract structure)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EWHI (Environmental, Whirlpool)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>EXG (Gas, exhaled (=breath))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119336008 (Exhaled air specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>EXS (Shunt, External)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>EXUDTE (Exudate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258441009 (Exudate sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FAW (Environmental, Water  (Well))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>FBLOOD (Blood, Fetal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119297000 (Blood specimen)</td>\n          <td/>\n          <td/>\n          <td>303112003 (Fetal period)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>FGA (Fluid,  Abdomen)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>168139001 (Peritoneal fluid sample)</td>\n          <td/>\n          <td>83670000 (Peritoneal cavity)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FIST (Fistula)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119370009 (Specimen from fistula)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FLD (Fluid, Other)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FLT (Filter)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>FLU (Fluid, Body unsp)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FLUID (Fluid)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258442002 (Fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FOLEY (Catheter Tip, Foley)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>FRS (Fluid, Respiratory)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258442002 (Fluid sample)</td>\n          <td/>\n          <td>272626006 (Respiratory organ)</td>\n          <td/>\n          <td>this term is not specific enough, choose from terms that more accurately describe the specimen</td>\n        </tr>\n        <tr>\n          <td>FSCLP (Scalp, Fetal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309502007 (Fetus specimen)</td>\n          <td/>\n          <td>41695006 (Scalp)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>FUR (Furuncle)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119295008 (Specimen obtained by aspiration)</td>\n          <td/>\n          <td/>\n          <td>59843005 (Furuncle)</td>\n          <td>Further describe the sample as tissue or pus. or by the collection method. The term boil is not specific to a body site - need to indicate source site (spm.8). preferred term is Aspirate_Boil</td>\n        </tr>\n        <tr>\n          <td>GAS (Gas)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119317003 (Gaseous material specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GASA (Aspirate, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>168137004 (Gastric aspirate sample)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td>69695003 (Stomach)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GASAN (Antrum, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119379005 (Specimen from stomach)</td>\n          <td/>\n          <td>66051006 (Pyloric antrum)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GASBR (Brushing, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309213006 (Gastric brushings sample)</td>\n          <td>235157009 (Endoscopic brushings of GIT)</td>\n          <td>69695003 (Stomach)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GASD (Drainage, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258459007 (Gastric fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td>69695003 (Stomach)</td>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>GAST (Fluid/contents, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258459007 (Gastric fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GENV (Genital vaginal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119394009 (Specimen from vagina)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GRAFT (Graft)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440493002 (Graft sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GRANU (Granuloma)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td>45647009 (Granuloma)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>GROSH (Catheter, Groshong)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119311002 (Catheter specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>GSOL (Solution, Gastrostomy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>GSPEC (Biopsy, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309211008 (Gastric biopsy sample)</td>\n          <td>79121003 (Biopsy of stomach)</td>\n          <td>69695003 (Stomach)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>GT (Tube, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>GTUBE (Drainage Tube, Drainage (Gastrostomy))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258459007 (Gastric fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td>69695003 (Stomach)</td>\n          <td>127490009 (Gastrostomy route)</td>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>HBITE (Bite, Human)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Submit for new term with parent 119365002</td>\n        </tr>\n        <tr>\n          <td>HBLUD (Blood, Autopsy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119297000 (Blood specimen)</td>\n          <td/>\n          <td/>\n          <td>303113008 (Postmortem period)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>HEMAQ (Catheter Tip, Hemaquit)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>HEMO (Catheter Tip, Hemovac)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>HERNI (Tissue, Herniated)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>HEV (Drain, Hemovac)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119306004 (Drain device specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>HIC (Catheter, Hickman)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td>445085009 (Tunneled central venous catheter)</td>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>HYDC (Fluid, Hydrocele)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td/>\n          <td/>\n          <td>55434001 (Hydrocele)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>IBITE (Bite, Insect)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Submit for new term with parent 119365002</td>\n        </tr>\n        <tr>\n          <td>ICYST (Cyst, Inclusion)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309075001 (Skin cyst sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>IDC (Catheter Tip, Indwelling)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>IHG (Gas, Inhaled)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119337004 (Inhaled gas specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ILEO (Drainage, Ileostomy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258455001 (Drainage fluid sample)</td>\n          <td/>\n          <td/>\n          <td>419954003 (Ileostomy route)</td>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead: stool is what is expected, should use stool sample</td>\n        </tr>\n        <tr>\n          <td>ILLEG (Source of Specimen Is Illegible)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>IMP (Implant)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>439961009 (Implant submitted as specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>INCI (Site, Incision/Surgical)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>INFIL (Infiltrate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>This describes a morphologic abnormality, not a sample</td>\n        </tr>\n        <tr>\n          <td>INS (Insect)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258614005 (Insect sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>INTRD (Catheter Tip, Introducer)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>IT (Intubation tube)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119307008 (Endotracheal tube specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>IUD (Intrauterine Device)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>pending</td>\n        </tr>\n        <tr>\n          <td>IVCAT (Catheter Tip, IV)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td>255560000 (Intravenous)</td>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>IVFLD (Fluid, IV)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258649003 (Intravenous infusion fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>IVTIP (Tubing Tip, IV)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>JEJU (Drainage, Jejunal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258463000 (Jejunal fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td>21306003 (Jejunum)</td>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead: stool is what is expected, should use stool sample</td>\n        </tr>\n        <tr>\n          <td>JNTFLD (Fluid, Joint)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119332005 (Synovial fluid specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>JP (Drainage, Jackson Pratt)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td/>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>KELOI (Lavage)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440674008 (Wash out specimen)</td>\n          <td>67889009 (Irrigation)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>KIDFLD (Fluid, Kidney)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309051001 (Body fluid sample)</td>\n          <td/>\n          <td>64033007 (Kidney)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LAVG (Lavage, Bronhial)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258607008 (Bronchoalveolar lavage fluid sample)</td>\n          <td>397394009 (Bronchoalveolar lavage)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LAVGG (Lavage, Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>168138009 (Gastric lavage aspirate sample)</td>\n          <td>173830003 (Irrigation of stomach)</td>\n          <td>69695003 (Stomach)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LAVGP (Lavage, Peritoneal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440137008 (Specimen obtained by peritoneal lavage)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LAVPG (Lavage, Pre-Bronch)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440674008 (Wash out specimen)</td>\n          <td>67889009 (Irrigation)</td>\n          <td>44567001 (Trachea)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LENS1 (Contact Lens)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440473005 (Contact lens submitted as specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LENS2 (Contact Lens Case)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>LESN (Lesion)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309049000 (Lesion sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>should be more specific what kind of lesion is observed - be more specific is it a wound, abscess, mass - specify! Ask SNOMED CT to mark it as a grouper term only (309049000)</td>\n        </tr>\n        <tr>\n          <td>LIQ (Liquid, Unspecified)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258442002 (Fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>LIQO (Liquid, Other)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>LSAC (Fluid, Lumbar Sac)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258450006 (Cerebrospinal fluid sample)</td>\n          <td/>\n          <td>303949008 (Lumbar spinal cerebrospinal fluid pathway)</td>\n          <td/>\n          <td>The HL7 term is a historical term Mapped to CSF obtained by lumbar puncture</td>\n        </tr>\n        <tr>\n          <td>MAHUR (Catheter Tip, Makurkour)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>MASS (Mass)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>420548004 (Specimen from mass)</td>\n          <td/>\n          <td/>\n          <td>4147007 (Mass)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>MBLD (Blood, Menstrual)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119345009 (Menstrual blood specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>MUCOS (Mucosa)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td>414781009 (Mucous membrane structure)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>MUCUS (Mucus)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258483004 (Mucus sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>NASDR (Drainage, Nasal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258474009 (Sinus fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td>2095001 (Accessory sinus)</td>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>NEDL (Needle)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>NEPH (Site, Nephrostomy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>NGASP (Aspirate, Nasogastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>302794003 (Nasogastric aspirate)</td>\n          <td>6853008 (Nasogastric tube aspiration)</td>\n          <td>69695003 (Stomach)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>NGAST (Drainage, Nasogastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258459007 (Gastric fluid sample)</td>\n          <td>122462000 (Drainage)</td>\n          <td>69695003 (Stomach)</td>\n          <td>127492001 (Nasogastric route)</td>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>NGS (Site, Naso/Gastric)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>NODUL (Nodule(s))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>pending</td>\n        </tr>\n        <tr>\n          <td>NSECR (Secretion, Nasal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>168141000 (Nasal fluid sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ORH (Other)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>123038009 (Specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ORL (Lesion, Oral)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td>74262004 (Oral cavity)</td>\n          <td/>\n          <td>be more precise use ulcer, tumor, vesicle</td>\n        </tr>\n        <tr>\n          <td>OTH (Source, Other)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>123038009 (Specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PACEM (Pacemaker)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>PCFL (Fluid, Pericardial)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122571007 (Pericardial fluid specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PDSIT (Site, Peritoneal Dialysis)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PDTS (Site, Peritoneal Dialysis Tunnel)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>submitted for code</td>\n        </tr>\n        <tr>\n          <td>PELVA (Abscess, Pelvic)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>12921003 (Pelvis)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PENIL (Lesion, Penile)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td>18911002 (Penis)</td>\n          <td/>\n          <td>need to know what kind of lesion, so map to: UlcerTissue_penile, VesicleFluid_penile, Wound_penile, Mass tissue_penile, Necrotic tissue_penile, AbscessAspirate_penile, Anything else?</td>\n        </tr>\n        <tr>\n          <td>PERIA (Abscess, Perianal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>397158004 (Perianal region structure)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PILOC (Cyst, Pilonidal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119368000 (Specimen from cyst)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PINS (Site, Pin)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PIS (Site, Pacemaker Insetion)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258507003 (Swab of line insertion site)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PLAN (Plant Material)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119301009 (Plant specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PLAS (Plasma)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119361006 (Plasma specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PLB (Plasma bag)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119305000 (Plasma bag specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PLEVS (Serum, Peak Level)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119364003 (Serum specimen)</td>\n          <td/>\n          <td/>\n          <td>255587001 (Peak)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>PND (Drainage, Penile)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258439008 (Discharge)</td>\n          <td>122462000 (Drainage)</td>\n          <td>13648007 (Urethra)</td>\n          <td/>\n          <td>Historical term -though in this case more often used for discharge</td>\n        </tr>\n        <tr>\n          <td>POL (Polyps)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td>41329004 (Polyp)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>POPGS (Graft Site, Popliteal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440493002 (Graft sample)</td>\n          <td/>\n          <td>6902008 (Popliteal region)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>POPLG (Graft, Popliteal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440493002 (Graft sample)</td>\n          <td/>\n          <td>6902008 (Popliteal region)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>POPLV (Site, Popliteal Vein)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>PORTA (Catheter, Porta)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119311002 (Catheter specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>PPP (Plasma, Platelet poor)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119362004 (Platelet poor plasma specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PROST (Prosthetic Device)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PRP (Plasma, Platelet rich)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119363009 (Platelet rich plasma specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PSC (Pseudocyst)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119368000 (Specimen from cyst)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PUNCT (Wound, Puncture)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119365002 (Specimen from wound)</td>\n          <td/>\n          <td/>\n          <td>129300006 (Puncture - action)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>PUS (Pus)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119323008 (Pus specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>PUSFR (Pustule)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119323008 (Pus specimen)</td>\n          <td/>\n          <td/>\n          <td>47002008 (Pustule)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>PUST (Pus)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119323008 (Pus specimen)</td>\n          <td/>\n          <td/>\n          <td>47002008 (Pustule)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>QC3 (Quality Control)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>RANDU (Urine, Random)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>278020009 (Spot urine sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>RBITE (Bite, Reptile)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Submit for new term with parent: 119365002</td>\n        </tr>\n        <tr>\n          <td>RECT (Drainage, Rectal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119339001 (Stool specimen)</td>\n          <td>122462000 (Drainage)</td>\n          <td>34402009 (Rectum)</td>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead: stool is what is expected, should use stool sample</td>\n        </tr>\n        <tr>\n          <td>RECTA (Abscess, Rectal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>34402009 (Rectum)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>RENALC (Cyst, Renal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258420003 (Cyst tissue)</td>\n          <td/>\n          <td>64033007 (Kidney)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>RENC (Fluid, Renal Cyst)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258453008 (Cyst fluid sample)</td>\n          <td/>\n          <td>64033007 (Kidney)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>RES (Respiratory)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258603007 (Respiratory sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SAL (Saliva)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119342007 (Saliva specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SCAR (Tissue, Keloid (Scar))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SCLV (Catheter Tip, Subclavian)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td>9454009 (Subclavian vein)</td>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>SCROA (Abscess, Scrotal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>20233005 (Scrotum)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SECRE (Secretion(s))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>432825001 (Body secretion specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SER (Serum)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119364003 (Serum specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SHU (Site, Shunt)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119295008 (Specimen obtained by aspiration)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td/>\n          <td>257351008 (Shunt)</td>\n          <td>Preferred is aspiration with sterile syringe from inflamed area. Specify body location of shunt site</td>\n        </tr>\n        <tr>\n          <td>SHUNF (Fluid, Shunt)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>446861007 (Cerebrospinal fluid specimen obtained via ventriculoperitoneal shunt)</td>\n          <td>446860008 (Collection of cerebrospinal fluid via ventriculoperitoneal shunt)</td>\n          <td>279107003 (Central nervous system space)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SHUNT (Shunt)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>SITE (Site)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>SKBP (Biopsy, Skin)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309066003 (Skin biopsy sample)</td>\n          <td>240977001 (Biopsy of skin)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SKN (Skin)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119325001 (Skin specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SMM (Mass, Sub-Mandibular)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>420548004 (Specimen from mass)</td>\n          <td/>\n          <td/>\n          <td>4147007 (Mass)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>SNV (Fluid, synovial (Joint fluid))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119332005 (Synovial fluid specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SPRM (Spermatozoa)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119349003 (Spermatozoa specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SPRP (Catheter Tip, Suprapubic)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>SPRPB (Cathether Tip, Suprapubic)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>SPS (Environmental, Spore Strip)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>SPT (Sputum)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119334006 (Sputum specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SPTC (Sputum - coughed)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119335007 (Coughed sputum specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SPTT (Sputum - tracheal aspirate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258609006 (Sputum specimen obtained by aspiration from trachea)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SPUT1 (Sputum, Simulated)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>SPUTIN (Sputum, Inducted)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258610001 (Sputum specimen obtained by sputum induction)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SPUTSP (Sputum, Spontaneous)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119335007 (Coughed sputum specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>STER (Environmental, Sterrad)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>STL (Stool = Fecal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119339001 (Stool specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>STONE (Stone, Kidney)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119350003 (Calculus specimen)</td>\n          <td/>\n          <td>64033007 (Kidney)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SUBMA (Abscess, Submandibular)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>5713008 (Submandibular triangle)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SUBMX (Abscess, Submaxillary)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>4335006 (Upper jaw)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SUMP (Drainage, Sump)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>446562005 (Body fluid specimen obtained via sump drain)</td>\n          <td>122462000 (Drainage)</td>\n          <td/>\n          <td/>\n          <td>Historical term - consider what is being drained and indicate that in SPM-4 instead</td>\n        </tr>\n        <tr>\n          <td>SUP (Suprapubic Tap)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122575003 (Urine specimen)</td>\n          <td>58088002 (Urine specimen collection, suprapubic)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>SUTUR (Suture)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>SWGZ (Catheter Tip, Swan Gantz)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>TASP (Aspirate, Tracheal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122877000 (Upper respiratory fluid specimen obtained by tracheal aspiration)</td>\n          <td>129112001 (Aspiration from trachea)</td>\n          <td>44567001 (Trachea)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TISS (Tissue)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119376003 (Tissue specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TISU (Tissue ulcer)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122593002 (Tissue specimen obtained from ulcer)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TLC (Cathether Tip, Triple Lumen)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>TRAC (Site, Tracheostomy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TRANS (Transudate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258538002 (Transudate sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TSERU (Serum, Trough)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119364003 (Serum specimen)</td>\n          <td/>\n          <td/>\n          <td>255588006 (Trough)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>TSTES (Abscess, Testicular)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119371008 (Specimen from abscess)</td>\n          <td/>\n          <td>279572002 (Testicular structure)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TTRA (Aspirate, Transtracheal)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258480001 (Transtracheal aspirate sample)</td>\n          <td>129112001 (Aspiration from trachea)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TUBES (Tubes)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119310001 (Tube specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TUMOR (Tumor)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258435002 (Tumour tissue)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>TZANC (Smear, Tzanck)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>This is the name of a lab test. A skin sample is examined for viral inclusions.</td>\n        </tr>\n        <tr>\n          <td>UDENT (Source, Unidentified)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>123038009 (Specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>UR (Urine)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122575003 (Urine specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>URC (Urine clean catch)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122880004 (Urine specimen obtained by clean catch procedure)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>URINB (Urine, Bladder Washings)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122575003 (Urine specimen)</td>\n          <td>78533007 (Irrigation of urinary bladder)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>URINC (Urine, Catheterized)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>446846006 (Urine specimen obtained via indwelling urinary catheter)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>URINM (Urine, Midstream)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258574006 (Mid-stream urine sample)</td>\n          <td>225271002 (Collection of mid-stream specimen of urine)</td>\n          <td>431938005 (Structure of urinary tract proper)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>URINN (Urine, Nephrostomy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>446277003 (Urine specimen obtained from nephrostomy tube after percutaneous insertion)</td>\n          <td>225109005 (Collection of nephrostomy urine specimen)</td>\n          <td>25990002 (Renal pelvis)</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>URINP (Urine, Pedibag)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>URT (Urine catheter)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122565001 (Urinary catheter specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>USCOP (Urine, Cystoscopy)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td>176178006 (Diagnostic cystoscopy)</td>\n          <td>89837001 (Urinary bladder)</td>\n          <td/>\n          <td>NEW specimenTERM 7</td>\n        </tr>\n        <tr>\n          <td>USPEC (Source, Unspecified)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>123038009 (Specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>VASTIP (Catheter Tip, Vas)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>VENT (Catheter Tip, Ventricular)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119312009 (Catheter tip specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD in detail</td>\n        </tr>\n        <tr>\n          <td>VITF (Vitreous Fluid)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258438000 (Vitreous humor sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>VOM (Vomitus)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122572000 (Vomitus specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WASH (Wash)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>440674008 (Wash out specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WASI (Washing, e.g. bronchial washing)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122609004 (Specimen from lung obtained by bronchial washing procedure)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WAT (Water)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119318008 (Water specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WB (Blood, Whole)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>Bloodbanking term ONLY now map to blood and the respective preservative</td>\n        </tr>\n        <tr>\n          <td>WEN (Wen)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309075001 (Skin cyst sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WICK (Wick)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>WND (Wound)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119365002 (Specimen from wound)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WNDA (Wound abscess)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119366001 (Specimen from wound abscess)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WNDD (Wound drainage)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122566000 (Fluid specimen from wound)</td>\n          <td>122462000 (Drainage)</td>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WNDE (Wound exudate)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>122568004 (Exudate specimen from wound)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WORM (Worm)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>258618008 (Helminth sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WRT (Wart)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>309068002 (Skin lesion sample)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WWA (Environmental, Water)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#equivalent\">equivalent</a>\n          </td>\n          <td>119318008 (Water specimen)</td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>WWO (Environmental, Water (Ocean))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>WWT (Environmental, Water  (Tap))</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td/>\n          <td>TBD</td>\n        </tr>\n        <tr>\n          <td>CSITE (Catheter Insertion Site)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td>386144009 (Line insertion site)</td>\n          <td>14766002 (Removal by suction)</td>\n          <td>119295008 (Specimen obtained by aspiration)</td>\n          <td>Prefer to have aspirate of the pus oozing out from cleaned insertion site - if swab is all that can be obtained, then swab after cleaning, otherwise you may get a contaminated specimen and a falsely identified infected central line. Do not just swab the reddened area - that will just collect skin flora</td>\n        </tr>\n        <tr>\n          <td>CLIPP (Clippings)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td/>\n          <td/>\n          <td>119326000 (Hair specimen)</td>\n          <td>Be more specific use either: 119326000^hair specimen, or 119327009^nail specimen</td>\n        </tr>\n        <tr>\n          <td>SHU (Site, Shunt)</td>\n          <td>\n            <a href=\"codesystem-concept-map-equivalence.html#unmatched\">unmatched</a>\n          </td>\n          <td/>\n          <td>257351008 (Shunt)</td>\n          <td/>\n          <td>438660002 (Specimen from prosthetic device)</td>\n          <td>assume swab from shunt site for mapping here - clean surface of skin prior to expressing the shunt site - preferred is aspiration with sterile syringe should use SPM.8 to specify body approximate match location of shunt site</td>\n        </tr>\n      </table>\n    </div>"
    },
    "url": "http://hl7.org/fhir/ConceptMap/102",
    "version": "4.0.1",
    "name": "Specimen mapping from v2 table 0487 to SNOMED CT",
    "status": "draft",
    "experimental": false,
    "date": "2013-07-25",
    "publisher": "FHIR project team (original source: LabMCoP)",
    "contact": [
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://hl7.org/fhir"
          }
        ]
      },
      {
        "telecom": [
          {
            "system": "url",
            "value": "http://www.phconnect.org/group/laboratorymessagingcommunityofpractice/forum/attachment/download?id=3649725%3AUploadedFile%3A145786"
          }
        ]
      }
    ],
    "sourceCanonical": "http://terminology.hl7.org/ValueSet/v2-0487",
    "targetCanonical": "http://snomed.info/sct?fhir_vs",
    "group": [
      {
        "source": "http://terminology.hl7.org/CodeSystem/v2-0487",
        "target": "http://snomed.info/sct",
        "element": [
          {
            "code": "ACNE",
            "target": [
              {
                "code": "309068002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ACNFLD",
            "target": [
              {
                "code": "119323008",
                "equivalence": "equivalent",
                "comment": "HL7 term is a historical term. mapped to Pus",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "47002008"
                  }
                ]
              }
            ]
          },
          {
            "code": "AIRS",
            "target": [
              {
                "code": "446302006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ALL",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "7970006"
                  }
                ]
              }
            ]
          },
          {
            "code": "AMP",
            "target": [
              {
                "code": "408654003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "81723002"
                  }
                ]
              }
            ]
          },
          {
            "code": "ANGI",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "ARTC",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "ASERU",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "pending"
              }
            ]
          },
          {
            "code": "ASP",
            "target": [
              {
                "code": "119295008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  }
                ]
              }
            ]
          },
          {
            "code": "ATTE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "AUTOC",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "AUTP",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "This really is not a specimen per se - it is the state of the subject from whom the specimen is collected, so it should be used as a  specimen type modifier ONLY!. Often this is indicated with a special medical record number or other notation on the patient. needs to have specimen type (e.g. SPM-4) and source site (SPM.8) and spatial orientation (SPM.9)"
              }
            ]
          },
          {
            "code": "BBL",
            "target": [
              {
                "code": "119304001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "BCYST",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "submitted (PLR155) with parent of  167874004^knee joint synovial fluid (specimen), with specimen source topography 32361000^Popliteal fossa structure (body structure)",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "32361000"
                  }
                ]
              }
            ]
          },
          {
            "code": "BITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Submit for new term with parent 119365002"
              }
            ]
          },
          {
            "code": "BLEB",
            "target": [
              {
                "code": "309049000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "339008"
                  }
                ]
              }
            ]
          },
          {
            "code": "BLIST",
            "target": [
              {
                "code": "309049000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "339008"
                  }
                ]
              }
            ]
          },
          {
            "code": "BOIL",
            "target": [
              {
                "code": "119295008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "59843005"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  }
                ]
              }
            ]
          },
          {
            "code": "BON",
            "target": [
              {
                "code": "430268003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "BOWL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Don't use this term for human samples - use Stool instead. animal would use small intestinal contents, large intestinal contents"
              }
            ]
          },
          {
            "code": "BPU",
            "target": [
              {
                "code": "119300005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "BRN",
            "target": [
              {
                "code": "119367005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "BRSH",
            "target": [
              {
                "code": "258415003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "439336003"
                  }
                ]
              }
            ]
          },
          {
            "code": "BRTH",
            "target": [
              {
                "code": "119336008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "BRUS",
            "target": [
              {
                "code": "309176002",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "80657008"
                  }
                ]
              }
            ]
          },
          {
            "code": "BUB",
            "target": [
              {
                "code": "302795002",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "11585000"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  }
                ]
              }
            ]
          },
          {
            "code": "BULLA",
            "target": [
              {
                "code": "258482009",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "339008"
                  }
                ]
              }
            ]
          },
          {
            "code": "BX",
            "target": [
              {
                "code": "258415003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "86273004"
                  }
                ]
              }
            ]
          },
          {
            "code": "CALC",
            "target": [
              {
                "code": "119350003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CARBU",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "41570003"
                  }
                ]
              }
            ]
          },
          {
            "code": "CAT",
            "target": [
              {
                "code": "119311002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CBITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Submit for new term with parent 119365002"
              }
            ]
          },
          {
            "code": "CLIPP",
            "target": [
              {
                "code": "119327009",
                "equivalence": "equivalent",
                "comment": "Be more specific use either: 119326000^hair specimen or 119327009^nail specimen"
              }
            ]
          },
          {
            "code": "CNJT",
            "target": [
              {
                "code": "119401005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CNJT",
            "target": [
              {
                "code": "128160006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CNJT",
            "target": [
              {
                "code": "258498002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "COL",
            "target": [
              {
                "code": "119329007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CONE",
            "target": [
              {
                "code": "399713008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "54535009"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "71252005"
                  }
                ]
              }
            ]
          },
          {
            "code": "CSCR",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "submit for new term with parent 119365002^Specimen from wound (specimen)"
              }
            ]
          },
          {
            "code": "CSERU",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "pending"
              }
            ]
          },
          {
            "code": "CSITE",
            "target": [
              {
                "code": "258507003",
                "equivalence": "equivalent",
                "comment": "Prefer to have aspirate of the pus oozing out from cleaned insertion site - if swab is all that can be obtained, then swab after cleaning, otherwise you may get a contaminated specimen and a falsely identified infected central line. Do not just swab the reddened area - that will just collect skin flora       ",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "386144009"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "285570007"
                  }
                ]
              }
            ]
          },
          {
            "code": "CSMY",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CST",
            "target": [
              {
                "code": "258453008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CSVR",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD - may use blood and SPM-6"
              }
            ]
          },
          {
            "code": "CTP",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "CVPS",
            "target": [
              {
                "code": "258507003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "CVPT",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "445085009"
                  }
                ]
              }
            ]
          },
          {
            "code": "CYN",
            "target": [
              {
                "code": "119368000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "27925004"
                  }
                ]
              }
            ]
          },
          {
            "code": "CYST",
            "target": [
              {
                "code": "119368000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "DBITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Submit for new term with parent 119365002"
              }
            ]
          },
          {
            "code": "DCS",
            "target": [
              {
                "code": "119335007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "DEC",
            "target": [
              {
                "code": "258505006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "DEION",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "DIA",
            "target": [
              {
                "code": "119360007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "DISCHG",
            "target": [
              {
                "code": "258439008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "DIV",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "31113003"
                  }
                ]
              }
            ]
          },
          {
            "code": "DRN",
            "target": [
              {
                "code": "119306004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "DRNG",
            "target": [
              {
                "code": "258455001",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead: not an acceptable specimen for micro - not specific enough term",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  }
                ]
              }
            ]
          },
          {
            "code": "DRNGP",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  }
                ]
              }
            ]
          },
          {
            "code": "EARW",
            "target": [
              {
                "code": "122580007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "EBRUSH",
            "target": [
              {
                "code": "309210009",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "36213007"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "32849002"
                  }
                ]
              }
            ]
          },
          {
            "code": "EEYE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "EFF",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "EFFUS",
            "target": [
              {
                "code": "258440005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "EFOD",
            "target": [
              {
                "code": "119320006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "EISO",
            "target": [
              {
                "code": "258536003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ELT",
            "target": [
              {
                "code": "119314005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ENVIR",
            "target": [
              {
                "code": "119324002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "EOTH",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "ESOI",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "ESOS",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "ETA",
            "target": [
              {
                "code": "119307008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "321667001"
                  }
                ]
              }
            ]
          },
          {
            "code": "ETTP",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "ETTUB",
            "target": [
              {
                "code": "119307008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "321667001"
                  }
                ]
              }
            ]
          },
          {
            "code": "EWHI",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "EXG",
            "target": [
              {
                "code": "119336008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "EXS",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "EXUDTE",
            "target": [
              {
                "code": "258441009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "FAW",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "FBLOOD",
            "target": [
              {
                "code": "119297000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "303112003"
                  }
                ]
              }
            ]
          },
          {
            "code": "FGA",
            "target": [
              {
                "code": "168139001",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "83670000"
                  }
                ]
              }
            ]
          },
          {
            "code": "FIST",
            "target": [
              {
                "code": "119370009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "FLD",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "FLT",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "FLU",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "FLUID",
            "target": [
              {
                "code": "258442002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "FOLEY",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "FRS",
            "target": [
              {
                "code": "258442002",
                "equivalence": "equivalent",
                "comment": "this term is not specific enough, choose from terms that more accurately describe the specimen",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "272626006"
                  }
                ]
              }
            ]
          },
          {
            "code": "FSCLP",
            "target": [
              {
                "code": "309502007",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "41695006"
                  }
                ]
              }
            ]
          },
          {
            "code": "FUR",
            "target": [
              {
                "code": "119295008",
                "equivalence": "equivalent",
                "comment": "Further describe the sample as tissue or pus. or by the collection method. The term boil is not specific to a body site - need to indicate source site (spm.8). preferred term is Aspirate_Boil",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "59843005"
                  }
                ]
              }
            ]
          },
          {
            "code": "GAS",
            "target": [
              {
                "code": "119317003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "GASA",
            "target": [
              {
                "code": "168137004",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "GASAN",
            "target": [
              {
                "code": "119379005",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "66051006"
                  }
                ]
              }
            ]
          },
          {
            "code": "GASBR",
            "target": [
              {
                "code": "309213006",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "235157009"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "GASD",
            "target": [
              {
                "code": "258459007",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "GAST",
            "target": [
              {
                "code": "258459007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "GENV",
            "target": [
              {
                "code": "119394009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "GRAFT",
            "target": [
              {
                "code": "440493002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "GRANU",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "45647009"
                  }
                ]
              }
            ]
          },
          {
            "code": "GROSH",
            "target": [
              {
                "code": "119311002",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "GSOL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "GSPEC",
            "target": [
              {
                "code": "309211008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "79121003"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "GT",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "GTUBE",
            "target": [
              {
                "code": "258459007",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "127490009"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "HBITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Submit for new term with parent 119365002"
              }
            ]
          },
          {
            "code": "HBLUD",
            "target": [
              {
                "code": "119297000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "303113008"
                  }
                ]
              }
            ]
          },
          {
            "code": "HEMAQ",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "HEMO",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "HERNI",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "HEV",
            "target": [
              {
                "code": "119306004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "HIC",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "445085009"
                  }
                ]
              }
            ]
          },
          {
            "code": "HYDC",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "55434001"
                  }
                ]
              }
            ]
          },
          {
            "code": "IBITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Submit for new term with parent 119365002"
              }
            ]
          },
          {
            "code": "ICYST",
            "target": [
              {
                "code": "309075001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "IDC",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "IHG",
            "target": [
              {
                "code": "119337004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ILEO",
            "target": [
              {
                "code": "258455001",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead: stool is what is expected, should use stool sample",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "419954003"
                  }
                ]
              }
            ]
          },
          {
            "code": "ILLEG",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "IMP",
            "target": [
              {
                "code": "439961009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "INCI",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "INFIL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "This describes a morphologic abnormality, not a sample"
              }
            ]
          },
          {
            "code": "INS",
            "target": [
              {
                "code": "258614005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "INTRD",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "IT",
            "target": [
              {
                "code": "119307008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "IUD",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "pending"
              }
            ]
          },
          {
            "code": "IVCAT",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "255560000"
                  }
                ]
              }
            ]
          },
          {
            "code": "IVFLD",
            "target": [
              {
                "code": "258649003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "IVTIP",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "JEJU",
            "target": [
              {
                "code": "258463000",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead: stool is what is expected, should use stool sample",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "21306003"
                  }
                ]
              }
            ]
          },
          {
            "code": "JNTFLD",
            "target": [
              {
                "code": "119332005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "JP",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  }
                ]
              }
            ]
          },
          {
            "code": "KELOI",
            "target": [
              {
                "code": "440674008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "67889009"
                  }
                ]
              }
            ]
          },
          {
            "code": "KIDFLD",
            "target": [
              {
                "code": "309051001",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "64033007"
                  }
                ]
              }
            ]
          },
          {
            "code": "LAVG",
            "target": [
              {
                "code": "258607008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "397394009"
                  }
                ]
              }
            ]
          },
          {
            "code": "LAVGG",
            "target": [
              {
                "code": "168138009",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "173830003"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "LAVGP",
            "target": [
              {
                "code": "440137008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "LAVPG",
            "target": [
              {
                "code": "440674008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "67889009"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "44567001"
                  }
                ]
              }
            ]
          },
          {
            "code": "LENS1",
            "target": [
              {
                "code": "440473005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "LENS2",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "LESN",
            "target": [
              {
                "code": "309049000",
                "equivalence": "equivalent",
                "comment": "should be more specific what kind of lesion is observed - be more specific is it a wound, abscess, mass - specify! Ask SNOMED CT to mark it as a grouper term only (309049000)"
              }
            ]
          },
          {
            "code": "LIQ",
            "target": [
              {
                "code": "258442002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "LIQO",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "LSAC",
            "target": [
              {
                "code": "258450006",
                "equivalence": "equivalent",
                "comment": "The HL7 term is a historical term Mapped to CSF obtained by lumbar puncture",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "303949008"
                  }
                ]
              }
            ]
          },
          {
            "code": "MAHUR",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "MASS",
            "target": [
              {
                "code": "420548004",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "4147007"
                  }
                ]
              }
            ]
          },
          {
            "code": "MBLD",
            "target": [
              {
                "code": "119345009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "MUCOS",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "414781009"
                  }
                ]
              }
            ]
          },
          {
            "code": "MUCUS",
            "target": [
              {
                "code": "258483004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "NASDR",
            "target": [
              {
                "code": "258474009",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "2095001"
                  }
                ]
              }
            ]
          },
          {
            "code": "NEDL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "NEPH",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "NGASP",
            "target": [
              {
                "code": "302794003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "6853008"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "NGAST",
            "target": [
              {
                "code": "258459007",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "127492001"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "69695003"
                  }
                ]
              }
            ]
          },
          {
            "code": "NGS",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "NODUL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "pending"
              }
            ]
          },
          {
            "code": "NSECR",
            "target": [
              {
                "code": "168141000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ORH",
            "target": [
              {
                "code": "123038009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "ORL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "be more precise use ulcer, tumor, vesicle",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "74262004"
                  }
                ]
              }
            ]
          },
          {
            "code": "OTH",
            "target": [
              {
                "code": "123038009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PACEM",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "PCFL",
            "target": [
              {
                "code": "122571007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PDSIT",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PDTS",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "submitted for code"
              }
            ]
          },
          {
            "code": "PELVA",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "12921003"
                  }
                ]
              }
            ]
          },
          {
            "code": "PENIL",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "need to know what kind of lesion, so map to: UlcerTissue_penile, VesicleFluid_penile, Wound_penile, Mass tissue_penile, Necrotic tissue_penile, AbscessAspirate_penile, Anything else?",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "18911002"
                  }
                ]
              }
            ]
          },
          {
            "code": "PERIA",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "397158004"
                  }
                ]
              }
            ]
          },
          {
            "code": "PILOC",
            "target": [
              {
                "code": "119368000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PINS",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PIS",
            "target": [
              {
                "code": "258507003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PLAN",
            "target": [
              {
                "code": "119301009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PLAS",
            "target": [
              {
                "code": "119361006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PLB",
            "target": [
              {
                "code": "119305000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PLEVS",
            "target": [
              {
                "code": "119364003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "255587001"
                  }
                ]
              }
            ]
          },
          {
            "code": "PND",
            "target": [
              {
                "code": "258439008",
                "equivalence": "equivalent",
                "comment": "Historical term -though in this case more often used for discharge",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "13648007"
                  }
                ]
              }
            ]
          },
          {
            "code": "POL",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "41329004"
                  }
                ]
              }
            ]
          },
          {
            "code": "POPGS",
            "target": [
              {
                "code": "440493002",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "6902008"
                  }
                ]
              }
            ]
          },
          {
            "code": "POPLG",
            "target": [
              {
                "code": "440493002",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "6902008"
                  }
                ]
              }
            ]
          },
          {
            "code": "POPLV",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "PORTA",
            "target": [
              {
                "code": "119311002",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "PPP",
            "target": [
              {
                "code": "119362004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PROST",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PRP",
            "target": [
              {
                "code": "119363009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PSC",
            "target": [
              {
                "code": "119368000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PUNCT",
            "target": [
              {
                "code": "119365002",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "129300006"
                  }
                ]
              }
            ]
          },
          {
            "code": "PUS",
            "target": [
              {
                "code": "119323008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "PUSFR",
            "target": [
              {
                "code": "119323008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "47002008"
                  }
                ]
              }
            ]
          },
          {
            "code": "PUST",
            "target": [
              {
                "code": "119323008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "47002008"
                  }
                ]
              }
            ]
          },
          {
            "code": "QC3",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "RANDU",
            "target": [
              {
                "code": "278020009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "RBITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Submit for new term with parent: 119365002"
              }
            ]
          },
          {
            "code": "RECT",
            "target": [
              {
                "code": "119339001",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead: stool is what is expected, should use stool sample",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "34402009"
                  }
                ]
              }
            ]
          },
          {
            "code": "RECTA",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "34402009"
                  }
                ]
              }
            ]
          },
          {
            "code": "RENALC",
            "target": [
              {
                "code": "258420003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "64033007"
                  }
                ]
              }
            ]
          },
          {
            "code": "RENC",
            "target": [
              {
                "code": "258453008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "64033007"
                  }
                ]
              }
            ]
          },
          {
            "code": "RES",
            "target": [
              {
                "code": "258603007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SAL",
            "target": [
              {
                "code": "119342007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SCAR",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SCLV",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "9454009"
                  }
                ]
              }
            ]
          },
          {
            "code": "SCROA",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "20233005"
                  }
                ]
              }
            ]
          },
          {
            "code": "SECRE",
            "target": [
              {
                "code": "432825001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SER",
            "target": [
              {
                "code": "119364003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SHU",
            "target": [
              {
                "code": "119295008",
                "equivalence": "equivalent",
                "comment": "Preferred is aspiration with sterile syringe from inflamed area. Specify body location of shunt site",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "257351008"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  }
                ]
              }
            ]
          },
          {
            "code": "SHUNF",
            "target": [
              {
                "code": "446861007",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "446860008"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "279107003"
                  }
                ]
              }
            ]
          },
          {
            "code": "SHUNT",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "SITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "SKBP",
            "target": [
              {
                "code": "309066003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "240977001"
                  }
                ]
              }
            ]
          },
          {
            "code": "SKN",
            "target": [
              {
                "code": "119325001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SMM",
            "target": [
              {
                "code": "420548004",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "4147007"
                  }
                ]
              }
            ]
          },
          {
            "code": "SNV",
            "target": [
              {
                "code": "119332005",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SPRM",
            "target": [
              {
                "code": "119349003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SPRP",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "SPRPB",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "SPS",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "SPT",
            "target": [
              {
                "code": "119334006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SPTC",
            "target": [
              {
                "code": "119335007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SPTT",
            "target": [
              {
                "code": "258609006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SPUT1",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "SPUTIN",
            "target": [
              {
                "code": "258610001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "SPUTSP",
            "target": [
              {
                "code": "119335007",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "STER",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "STL",
            "target": [
              {
                "code": "119339001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "STONE",
            "target": [
              {
                "code": "119350003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "64033007"
                  }
                ]
              }
            ]
          },
          {
            "code": "SUBMA",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "5713008"
                  }
                ]
              }
            ]
          },
          {
            "code": "SUBMX",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "4335006"
                  }
                ]
              }
            ]
          },
          {
            "code": "SUMP",
            "target": [
              {
                "code": "446562005",
                "equivalence": "equivalent",
                "comment": "Historical term - consider what is being drained and indicate that in SPM-4 instead",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  }
                ]
              }
            ]
          },
          {
            "code": "SUP",
            "target": [
              {
                "code": "122575003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "58088002"
                  }
                ]
              }
            ]
          },
          {
            "code": "SUTUR",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "SWGZ",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "TASP",
            "target": [
              {
                "code": "122877000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "129112001"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "44567001"
                  }
                ]
              }
            ]
          },
          {
            "code": "TISS",
            "target": [
              {
                "code": "119376003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "TISU",
            "target": [
              {
                "code": "122593002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "TLC",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "TRAC",
            "target": [
              {
                "code": "438660002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "TRANS",
            "target": [
              {
                "code": "258538002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "TSERU",
            "target": [
              {
                "code": "119364003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "255588006"
                  }
                ]
              }
            ]
          },
          {
            "code": "TSTES",
            "target": [
              {
                "code": "119371008",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "279572002"
                  }
                ]
              }
            ]
          },
          {
            "code": "TTRA",
            "target": [
              {
                "code": "258480001",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "129112001"
                  }
                ]
              }
            ]
          },
          {
            "code": "TUBES",
            "target": [
              {
                "code": "119310001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "TUMOR",
            "target": [
              {
                "code": "258435002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "TZANC",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "This is the name of a lab test. A skin sample is examined for viral inclusions."
              }
            ]
          },
          {
            "code": "UDENT",
            "target": [
              {
                "code": "123038009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "UR",
            "target": [
              {
                "code": "122575003",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "URC",
            "target": [
              {
                "code": "122880004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "URINB",
            "target": [
              {
                "code": "122575003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "78533007"
                  }
                ]
              }
            ]
          },
          {
            "code": "URINC",
            "target": [
              {
                "code": "446846006",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "URINM",
            "target": [
              {
                "code": "258574006",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "225271002"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "431938005"
                  }
                ]
              }
            ]
          },
          {
            "code": "URINN",
            "target": [
              {
                "code": "446277003",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "225109005"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "25990002"
                  }
                ]
              }
            ]
          },
          {
            "code": "URINP",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "URT",
            "target": [
              {
                "code": "122565001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "USCOP",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "NEW specimenTERM 7",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "176178006"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "89837001"
                  }
                ]
              }
            ]
          },
          {
            "code": "USPEC",
            "target": [
              {
                "code": "123038009",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "VASTIP",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "VENT",
            "target": [
              {
                "code": "119312009",
                "equivalence": "equivalent",
                "comment": "TBD in detail"
              }
            ]
          },
          {
            "code": "VITF",
            "target": [
              {
                "code": "258438000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "VOM",
            "target": [
              {
                "code": "122572000",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WASH",
            "target": [
              {
                "code": "440674008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WASI",
            "target": [
              {
                "code": "122609004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WAT",
            "target": [
              {
                "code": "119318008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WB",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Bloodbanking term ONLY now map to blood and the respective preservative"
              }
            ]
          },
          {
            "code": "WEN",
            "target": [
              {
                "code": "309075001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WICK",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "WND",
            "target": [
              {
                "code": "119365002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WNDA",
            "target": [
              {
                "code": "119366001",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WNDD",
            "target": [
              {
                "code": "122566000",
                "equivalence": "equivalent",
                "product": [
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "122462000"
                  }
                ]
              }
            ]
          },
          {
            "code": "WNDE",
            "target": [
              {
                "code": "122568004",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WORM",
            "target": [
              {
                "code": "258618008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WRT",
            "target": [
              {
                "code": "309068002",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WWA",
            "target": [
              {
                "code": "119318008",
                "equivalence": "equivalent"
              }
            ]
          },
          {
            "code": "WWO",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "WWT",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "TBD"
              }
            ]
          },
          {
            "code": "CSITE",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Prefer to have aspirate of the pus oozing out from cleaned insertion site - if swab is all that can be obtained, then swab after cleaning, otherwise you may get a contaminated specimen and a falsely identified infected central line. Do not just swab the reddened area - that will just collect skin flora",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "119295008"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "386144009"
                  },
                  {
                    "property": "http://snomed.info/id/3006873018",
                    "system": "http://snomed.info/sct",
                    "value": "14766002"
                  }
                ]
              }
            ]
          },
          {
            "code": "CLIPP",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "Be more specific use either: 119326000^hair specimen, or 119327009^nail specimen",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "119326000"
                  }
                ]
              }
            ]
          },
          {
            "code": "SHU",
            "target": [
              {
                "equivalence": "unmatched",
                "comment": "assume swab from shunt site for mapping here - clean surface of skin prior to expressing the shunt site - preferred is aspiration with sterile syringe should use SPM.8 to specify body approximate match location of shunt site",
                "product": [
                  {
                    "property": "TypeModifier",
                    "system": "http://snomed.info/sct",
                    "value": "438660002"
                  },
                  {
                    "property": "http://snomed.info/id/246380002",
                    "system": "http://snomed.info/sct",
                    "value": "257351008"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }