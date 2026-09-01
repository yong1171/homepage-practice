'use client';

import { useState } from 'react';
import Bell from 'lucide-react/dist/esm/icons/bell.mjs';
import Building2 from 'lucide-react/dist/esm/icons/building-2.mjs';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right.mjs';
import CircleAlert from 'lucide-react/dist/esm/icons/circle-alert.mjs';
import Gavel from 'lucide-react/dist/esm/icons/gavel.mjs';
import Heart from 'lucide-react/dist/esm/icons/heart.mjs';
import Home from 'lucide-react/dist/esm/icons/home.mjs';
import LandPlot from 'lucide-react/dist/esm/icons/land-plot.mjs';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.mjs';
import Search from 'lucide-react/dist/esm/icons/search.mjs';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.mjs';
import Store from 'lucide-react/dist/esm/icons/store.mjs';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up.mjs';

const auctionItems = [
  { id: 1, type: '아파트', icon: Building2, area: '경기 성남시 분당구', distance: '8.4km', title: '정자동 느티마을 84㎡', appraisal: '9억 2,000만', minimum: '6억 4,400만', discount: '30%', failures: 1, score: 88, risk: '보통', bid: 'D-12', color: '#dfeedd' },
  { id: 2, type: '근린상가', icon: Store, area: '경기 용인시 수지구', distance: '13.7km', title: '풍덕천동 상가 1층 42㎡', appraisal: '5억 1,000만', minimum: '2억 4,990만', discount: '51%', failures: 2, score: 81, risk: '확인 필요', bid: 'D-7', color: '#efe3cf' },
  { id: 3, type: '토지', icon: LandPlot, area: '경기 광주시 오포읍', distance: '26.1km', title: '계획관리지역 답 1,240㎡', appraisal: '3억 8,600만', minimum: '1억 8,914만', discount: '51%', failures: 2, score: 76, risk: '주의', bid: 'D-19', color: '#e2e8d7' },
];

const types = ['전체', '아파트', '주택', '상가', '토지', '공장·창고'];

export default function Home() {
  const [address, setAddress] = useState('');
  const [selectedType, setSelectedType] = useState('전체');
  const [searchedAddress, setSearchedAddress] = useState('우리 집');
  const [favorites, setFavorites] = useState<number[]>([]);

  function searchAuctions(event: React.FormEvent) {
    event.preventDefault();
    setSearchedAddress(address.trim() || '우리 집');
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="logo" href="#top" aria-label="집근처 경매 홈"><span><Gavel size={19} /></span>집근처 경매</a>
        <nav aria-label="주요 메뉴"><a className="active" href="#search">매물 찾기</a><a href="#saved">관심 매물</a><a href="#guide">분석 가이드</a></nav>
        <button type="button" className="alert-button"><Bell /> 새 매물 알림</button>
      </header>

      <section className="search-zone" id="search">
        <div className="search-heading">
          <p className="kicker"><span /> 우리 집에서 30km, 놓치면 아까운 경매</p>
          <h1>가까운 경매물건을<br /><em>한눈에 비교하세요.</em></h1>
          <p>가격 경쟁력, 주변 시세, 권리 위험을 쉬운 점수로 정리합니다.</p>
        </div>
        <form className="finder" onSubmit={searchAuctions}>
          <label><span><Home size={16} /> 기준 주소</span><input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="집 주소를 입력하세요" aria-label="집 주소" /></label>
          <label><span><MapPin size={16} /> 검색 반경</span><select defaultValue="30" className="select-wide" aria-label="검색 반경"><option value="10">10km 이내</option><option value="20">20km 이내</option><option value="30">30km 이내</option><option value="50">50km 이내</option></select></label>
          <label><span><TrendingUp size={16} /> 최대 최저가</span><select defaultValue="all" className="select-wide" aria-label="최대 최저가"><option value="all">제한 없음</option><option value="10000">1억 이하</option><option value="30000">3억 이하</option><option value="50000">5억 이하</option><option value="100000">10억 이하</option></select></label>
          <button type="submit" className="search-button"><Search /> 경매물건 찾기</button>
        </form>
        <p className="privacy-note"><ShieldCheck size={14} /> 입력한 집 주소는 공개하지 않고 검색 기준으로만 사용합니다.</p>
      </section>

      <section className="workspace" id="top">
        <div className="results-panel">
          <div className="result-head">
            <div><p className="section-label">AUCTION RADAR</p><h2>{searchedAddress} 반경 30km</h2><p>조건에 맞는 예시 경매물건 <strong>24건</strong></p></div>
            <select className="sort-select" defaultValue="score" aria-label="정렬"><option value="score">추천순</option><option value="price">최저가순</option><option value="date">입찰일순</option></select>
          </div>
          <div className="type-tabs" role="group" aria-label="물건 종류">
            {types.map((type) => <button key={type} className={selectedType === type ? 'selected' : ''} onClick={() => setSelectedType(type)}>{type}</button>)}
          </div>
          <div className="notice"><CircleAlert size={16} /><span>현재 화면은 기능 확인용 <strong>예시 매물</strong>입니다. 실제 법원경매 데이터 연결은 다음 단계에서 진행합니다.</span></div>
          <div className="auction-list">
            {auctionItems.filter((item) => selectedType === '전체' || selectedType === item.type).map((item) => {
              const Icon = item.icon;
              const liked = favorites.includes(item.id);
              return <article className="auction-card" key={item.id}>
                <div className="property-mark" style={{ background: item.color }}><Icon size={28} /><span>{item.type}</span></div>
                <div className="property-info">
                  <div className="meta"><span>{item.area}</span><span><MapPin size={13} /> {item.distance}</span><b>{item.bid}</b></div>
                  <h3>{item.title}</h3>
                  <div className="price-row"><div><small>감정가</small><span>{item.appraisal}원</span></div><ChevronRight /><div><small>최저매각가</small><strong>{item.minimum}원</strong></div></div>
                  <div className="tags"><span>감정가 대비 {item.discount}↓</span><span>유찰 {item.failures}회</span><span className={`risk risk-${item.risk}`}>권리 {item.risk}</span></div>
                </div>
                <div className="score-box"><button aria-label={liked ? '관심 매물 해제' : '관심 매물 저장'} onClick={() => setFavorites((current) => liked ? current.filter((id) => id !== item.id) : [...current, item.id])}><Heart fill={liked ? 'currentColor' : 'none'} /></button><small>추천 점수</small><strong>{item.score}</strong><span>/100</span><a href="#guide">분석 보기 <ChevronRight size={14} /></a></div>
              </article>;
            })}
            {selectedType !== '전체' && !auctionItems.some((item) => item.type === selectedType) && <div className="empty-state">이 종류의 예시 매물은 아직 준비 중입니다.</div>}
          </div>
        </div>

        <aside className="map-panel" aria-label="검색 반경 지도 미리보기">
          <div className="map-toolbar"><span><MapPin size={15} /> {searchedAddress}</span><b>반경 30km</b></div>
          <div className="map-canvas">
            <div className="road road-a" /><div className="road road-b" /><div className="road road-c" />
            <div className="radius-ring"><span className="home-pin"><Home size={17} /></span></div>
            <button className="map-pin pin-one" aria-label="추천 점수 88점 아파트">88</button>
            <button className="map-pin pin-two" aria-label="추천 점수 81점 상가">81</button>
            <button className="map-pin pin-three" aria-label="추천 점수 76점 토지">76</button>
            <span className="place place-a">분당구</span><span className="place place-b">수지구</span><span className="place place-c">광주시</span>
          </div>
          <div className="map-summary"><div><strong>24</strong><span>검색 물건</span></div><div><strong>7</strong><span>추천 80점 이상</span></div><div><strong>11</strong><span>유찰 2회 이상</span></div></div>
        </aside>
      </section>

      <section className="guide" id="guide"><div><p className="section-label">HOW IT WORKS</p><h2>숫자는 쉽게,<br />위험은 꼼꼼하게.</h2></div><div className="guide-grid"><article><b>01</b><h3>거리와 입지</h3><p>집에서 이동 거리와 주변 생활권을 함께 확인합니다.</p></article><article><b>02</b><h3>가격 경쟁력</h3><p>감정가·최저가·주변 시세 차이를 비교합니다.</p></article><article><b>03</b><h3>권리 위험 신호</h3><p>확인해야 할 문서와 위험 항목을 체크리스트로 보여줍니다.</p></article></div><p className="legal-note">※ 제공되는 분석은 투자 및 법률 자문이 아닙니다. 입찰 전 매각물건명세서, 현황조사서, 등기사항증명서를 직접 확인하고 필요시 전문가와 상담하세요.</p></section>
    </main>
  );
}
