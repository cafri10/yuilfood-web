import { HeroBand } from "@/components/sections/HeroBand";
import { SummaryCards } from "@/components/sections/SummaryCards";
import { FermentationProcess } from "@/components/sections/FermentationProcess";
import { ProductLines } from "@/components/sections/ProductLines";
import { ValueChain } from "@/components/sections/ValueChain";
import { VirtuousCycle } from "@/components/sections/VirtuousCycle";
import { ProofNumbers } from "@/components/sections/ProofNumbers";
import { CertLogos } from "@/components/sections/CertLogos";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* §1 히어로 */}
      <HeroBand />
      {/* §2 Executive Summary 3카드 */}
      <SummaryCards />
      {/* §3 이중발효 공정 */}
      <FermentationProcess />
      {/* §4 제품 라인 B2B/B2C */}
      <ProductLines />
      {/* §5 6차산업 밸류체인 */}
      <ValueChain />
      {/* §6 공공민간 선순환 (다크 패널) */}
      <VirtuousCycle />
      {/* §7 데이터 박스 */}
      <ProofNumbers />
      {/* §8 인증·파트너 */}
      <CertLogos />
      {/* §9 최종 CTA */}
      <FinalCTA />
    </>
  );
}
