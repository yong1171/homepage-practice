import { ArrowRight, Check, Sparkles } from 'lucide-react';

const services = [
  ['브랜드 웹사이트', '작은 브랜드의 이야기를 한눈에 이해되는 화면으로 만듭니다.'],
  ['제품 랜딩 페이지', '방문자가 망설이지 않고 다음 행동을 선택하게 설계합니다.'],
  ['콘텐츠 디자인', '오래 쓰이는 글과 이미지 시스템을 함께 정리합니다.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="모아 스튜디오 홈"><span>MOA</span> STUDIO</a>
        <nav aria-label="주요 메뉴">
          <a href="#work">서비스</a><a href="#about">소개</a>
          <a className="nav-cta" href="mailto:hello@example.com">문의하기</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> 작지만 선명한 디지털 스튜디오</p>
          <h1>좋은 생각이<br /><em>보이는 순간.</em></h1>
          <p className="lede">모아 스튜디오는 브랜드의 본질을 발견하고, 사람들이 기억하는 웹 경험으로 바꿉니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:hello@example.com">프로젝트 시작하기 <ArrowRight size={18} /></a>
            <a className="text-link" href="#work">우리가 하는 일</a>
          </div>
        </div>
        <div className="hero-art" aria-label="모아 스튜디오의 작업 방식을 표현한 그래픽">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="art-card">
            <span>01 — 발견</span><strong>당신다운<br />한 가지를 찾습니다.</strong>
            <div className="art-line"><i /><i /><i /></div>
          </div>
          <p className="scribble">clear &amp; warm</p>
        </div>
      </section>

      <section className="marquee" aria-label="스튜디오 핵심 가치">
        <span>STRATEGY</span><i>✦</i><span>DESIGN</span><i>✦</i><span>STORY</span><i>✦</i><span>EXPERIENCE</span>
      </section>

      <section className="services" id="work">
        <div className="section-intro"><p className="eyebrow">What we do</p><h2>필요한 만큼,<br />제대로 만듭니다.</h2></div>
        <div className="service-list">
          {services.map(([title, description], index) => (
            <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight aria-hidden="true" /></article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">Our approach</p>
        <h2>복잡한 것을 덜어내고,<br />당신다운 것만 남깁니다.</h2>
        <div className="about-grid">
          <p>유행보다 오래가는 기준을 세웁니다. 전략, 문장, 화면을 하나의 팀처럼 연결해 작은 브랜드도 자신 있게 이야기할 수 있도록 돕습니다.</p>
          <ul><li><Check size={18} /> 분명한 목표와 일정</li><li><Check size={18} /> 모바일까지 섬세한 디자인</li><li><Check size={18} /> 직접 수정하기 쉬운 구조</li></ul>
        </div>
      </section>

      <section className="contact">
        <p>새로운 이야기를 준비하고 있나요?</p><h2>우리, 같이<br />만들어볼까요?</h2>
        <a className="button light" href="mailto:hello@example.com">hello@example.com <ArrowRight size={18} /></a>
      </section>
      <footer><span>© 2026 MOA STUDIO</span><span>SEOUL · AVAILABLE WORLDWIDE</span></footer>
    </main>
  );
}
