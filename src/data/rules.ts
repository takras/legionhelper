import dynamic from "next/dynamic";
import { Keyword, RulesDocument } from "@/types";
import { index } from "./catalog";
import { KeywordsA } from "./keyword_a";
import { KeywordsB } from "./keyword_b";
import { KeywordsC } from "./keyword_c";
import { KeywordsD } from "./keyword_d";
import { KeywordsE } from "./keyword_e";
import { KeywordsF } from "./keyword_f";
import { KeywordsG } from "./keyword_g";
import { KeywordsH } from "./keyword_h";
import { KeywordsI } from "./keyword_i";
import { KeywordsJ } from "./keyword_j";
import { KeywordsL } from "./keyword_l";
import { KeywordsM } from "./keyword_m";
import { KeywordsN } from "./keyword_n";
import { KeywordsO } from "./keyword_o";
import { KeywordsP } from "./keyword_p";
import { KeywordsQ } from "./keyword_q";
import { KeywordsR } from "./keyword_r";
import { KeywordsS } from "./keyword_s";
import { KeywordsT } from "./keyword_t";
import { KeywordsU } from "./keyword_u";
import { KeywordsV } from "./keyword_v";
import { KeywordsW } from "./keyword_w";
import { KeywordsOther } from "./keyword_other";

export const rules: RulesDocument = {
  helperVersion: "1.0.1",
  version: "2.6.0",
  validFrom: "2024-07-24T00:00:00Z",
  downloadUrl:
    "https://cdn.svc.asmodee.net/production-amgcom/uploads/2024/07/SWQ_Rulebook_2.6.0-1.pdf",
  documentUrl: "https://www.atomicmassgames.com/swlegiondocs/",
  discussionUrl:
    "https://forums.atomicmassgames.com/forum/165-star-wars-legion-rules-questions/",
  changelog: [],
  index,
  keywords: [
    ...KeywordsOther,
    ...KeywordsA,
    ...KeywordsB,
    ...KeywordsC,
    ...KeywordsD,
    ...KeywordsE,
    ...KeywordsF,
    ...KeywordsG,
    ...KeywordsH,
    ...KeywordsI,
    ...KeywordsJ,
    ...KeywordsL,
    ...KeywordsM,
    ...KeywordsN,
    ...KeywordsO,
    ...KeywordsP,
    ...KeywordsQ,
    ...KeywordsR,
    ...KeywordsS,
    ...KeywordsT,
    ...KeywordsU,
    ...KeywordsV,
    ...KeywordsW,
  ],
};
