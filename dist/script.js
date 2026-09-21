const characters = [
  {
    id: "tom", name: "Tom Forsythe", role: "핵심 설계인력 / 고성과자", image: "assets/tom.png",
    tags: ["성취", "내재적 동기", "개인–조직 적합성 변화", "정서적 이탈"],
    speech: "이 회사가 많은 기회를 준 건 맞아. 그런데 이제 더 성장하려면 여기에서 다음 단계가 어디인지 잘 보이지 않아.",
    emotions: ["조직에 대한 애착", "성과와 인정", "Marko의 한계 체감", "성장경로 의문", "기대 약화", "정서적 이탈"],
    fact: "여러 설계상을 받은 고성과자였고 높은 자율성을 가졌다. 퇴사 면담에서는 행복했다고 말하며 큰 불만을 직접 언급하지 않았다. 이후 아내 Alyson과의 대화에서는 의도적으로 말을 아꼈다는 태도를 보인다.",
    analysis: "침묵의 이유를 ‘말해도 바뀌지 않아서’ 하나로 단정할 수는 없다. 관계를 망치지 말라는 Alyson의 조언도 있었다. 다만 회사의 미래가 더 이상 자신의 문제가 아니라는 태도는 상당한 정서적 이탈을 보여준다.",
    takeaway: "Tom은 혁신과 자율성 자체보다, 그 가치를 실제 성과와 자신의 다음 성장단계로 연결하는 조직체계에 한계를 느꼈을 가능성이 있다."
  },
  {
    id: "helen", name: "Helen Gasbarian", role: "CEO / Architect", image: "assets/helen.png",
    tags: ["자부심", "상호성 기대", "상실회피", "방어적 대응"],
    speech: "우리는 사람들이 아직 신입일 때부터 큰 프로젝트와 기회를 줬어. 그런데 왜 이제 와서 다른 회사로 떠나는 거지?",
    emotions: ["창업철학에 대한 자부심", "이탈에 당혹", "경쟁사 원인 해석", "상실 불안", "즉흥 유지 행동", "원인 탐색 약화"],
    fact: "직원을 아끼고 회사가 좋은 기회를 제공했다고 믿는다. Adrienne의 이탈 가능성을 듣고 즉시 승진 방안을 생각한다. Bob이 문제의 일부인지 잠시 의심하지만 오래 충성했다는 이유로 더 깊이 확인하지 않는다.",
    analysis: "‘우리가 먼저 믿고 기회를 줬다’는 상호성 기대가 있었을 수 있다. Peter의 기회→성취→몰입 공식은 초기 성공의 원천이었지만, 성숙한 조직에는 경력경로·리더십·승계·협업이 더 필요했다.",
    takeaway: "무관심이 아니라, 문제 정의가 ‘왜 떠나는가?’에서 ‘어떻게 빼앗기지 않을까?’로 이동한 것이 핵심이다."
  },
  {
    id: "mary", name: "Mary Donillo", role: "인사책임자", image: "assets/mary.png",
    tags: ["원칙주의", "조심성", "데이터 의존", "불확실성 회피"],
    speech: "문제가 있다는 건 알겠어. 그런데 정확한 근거 없이 먼저 움직여도 되는 걸까?",
    emotions: ["이상징후 감지", "원인 확신 부족", "추가 조사 요구", "행동 유보", "공정성 우려", "주도력 부족"],
    fact: "Helen의 즉흥 승진이 다른 직원에게 미칠 메시지와 절차적 공정성을 걱정한다. 문제를 판단할 더 많은 조사와 데이터를 요구한다.",
    analysis: "근거 중심 판단은 장점이지만, 사람의 문제를 관계 속에서 직접 확인하기보다 조사 결과가 나와야 판단할 문제로 보는 경향이 있었다. 정보가 부족할수록 사람 사이로 들어가야 했다.",
    takeaway: "문제를 읽는 능력은 있지만, 그 판단을 전략적인 인사 행동으로 전환하는 힘은 약했다."
  },
  {
    id: "adrienne", name: "Adrienne Perle", role: "Engineering 핵심인재", image: "assets/adrienne.png",
    tags: ["답답함", "직원 의견제시", "무력감", "방향 상실"],
    speech: "문제가 있다는 건 알고 있어. 이미 말해봤어. 그런데 달라지는 건 없고, 혼자 해결할 수도 없어.",
    emotions: ["조직문제 인식", "의견 제시", "반응 없음", "답답함", "Tom의 상실", "경력 방향성 혼란"],
    fact: "조직이 잘못된 방향으로 간다고 윗선에 이야기했지만 ‘아무도 듣지 않는다’고 느낀다. Tom을 비공식적 멘토에 가깝게 생각했고, Bob이 멘토가 되는 제안에는 불편한 반응을 보인다.",
    analysis: "문제는 멘토 한 명의 부재보다 지원·방향성·조직 연결의 상실이다. Bob이 이미 신뢰받는 멘토였다면 제안이 그렇게 낯설지 않았을 수 있다. 영업이 혁신가치를 이해하고 Engineering의 의견이 위로 전달되는지도 의문이었다.",
    takeaway: "Adrienne에게 필요한 것은 승진 하나가 아니라 ‘문제를 말하면 조직이 실제로 움직인다’는 경험이었다."
  },
  {
    id: "bob", name: "Bob Wortham", role: "VP of Engineering", image: "assets/bob.png",
    tags: ["성과 인지", "사람관리 리더십 가설", "사후 대응"],
    speech: "Adrienne이 얼마나 중요한 사람인지는 알아. 그런데 왜 떠나려 할 수 있는지는 제대로 알고 있었나?",
    emotions: ["높은 성과 평가", "이탈 가능성에 위기감", "원인 이해 부족", "CEO에게 도움 요청"],
    fact: "회사가 Adrienne을 왜 필요로 하는지는 잘 안다. 이탈 가능성을 듣자 Helen에게 즉시 도움을 요청할 접근권한도 있었다.",
    analysis: "가장 강한 1차 가설은 사람관리 역량 부족이다. 다만 실무 과부하나 현재 관리직과의 개인–직무 적합성 문제도 진단해야 한다. 조직구조상 전혀 권한이 없었다는 가설은 상대적으로 약하다.",
    takeaway: "악의보다 경청 → 후속조치 → 팀의 의견 대변으로 이어지는 사람관리 리더십이 부족했을 가능성이 있다."
  },
  {
    id: "savannah", name: "Savannah Dorsey", role: "동료 / 관찰자", image: "assets/savannah.png",
    tags: ["공감", "관찰", "Marko 전환점"],
    speech: "Tom은 프로젝트 하나를 놓쳐서만 낙담한 것 같지는 않아. Marko를 겪으면서 이 회사의 한계를 본 것 같아.",
    emotions: ["높은 몰입 관찰", "Marko 이후 변화 감지", "전문가로서의 실망 이해", "인간적 걱정"],
    fact: "Marko 프로젝트 수주 실패 이후 Tom의 업무 몰입이 눈에 띄게 떨어진 것처럼 보였다고 말한다. 퇴사 면담보다 훨씬 전부터 동료가 변화를 감지했다.",
    analysis: "Marko는 퇴사 원인 전체가 아니라, 좋은 설계를 조직이 실제 성과로 연결하지 못할 수 있다는 한계를 Tom이 체감한 전환점이었을 가능성이 있다.",
    takeaway: "조직은 공식 퇴사 신호보다 훨씬 앞서 나타나는 동료의 관찰과 몰입 변화를 놓쳤다."
  },
  {
    id: "hal", name: "Hal Pope", role: "동료 / 조직구조 관찰자", image: "assets/hal.png",
    tags: ["현실감각", "경력 병목", "상위직급 정체"],
    speech: "Tom이 더 열심히 해야 하는 문제가 아니야. 이미 충분히 잘하고 있어. 그런데 다음 단계는 어디지?",
    emotions: ["Tom의 성과 인식", "상위 조직 병목 인식", "노력–보상 연결 회의", "경력체계 냉소"],
    fact: "Tom의 문제를 개인의 동기 부족보다 ‘어디까지 성장할 수 있는가?’라는 구조적 문제로 본다. 상위직급 이동이 적고 자리가 정체되어 있다.",
    analysis: "Sambian은 초기 경력을 빠르게 키우지만, 다음 목적지가 없으면 장기적 경력의 종착지가 되기 어렵다. 아래에는 혁신을 요구하면서 상층부는 같은 자리를 유지하는 모순도 보인다.",
    takeaway: "인재 이탈의 원인을 개인의 욕심보다 조직 상층부의 경력 병목에서 본다."
  },
  {
    id: "paul", name: "Paul Bonney", role: "Architecture Sales", image: "assets/paul.png",
    tags: ["영업 관점", "수주 압박", "부서 간 협업 부족"],
    speech: "설계부문과 영업부문이 ‘좋은 프로젝트’를 바라보는 기준부터 다르다면, 마지막 발표만 잘한다고 해결될까?",
    emotions: ["수주 책임", "서로 다른 성공기준", "상호 오해", "부서 간 거리 증가"],
    fact: "영업은 고객 요구·가격·위험·일정·수주 가능성을 중시한다. 설계는 혁신·품질·창의성·완성도를 중시한다.",
    analysis: "Paul을 Marko 실패의 단독 원인이나 무능한 영업책임자로 볼 수 없다. 두 관점을 프로젝트 초기에 연결하는 구조가 약했고, Paul은 그 협업 실패가 가장 선명하게 드러나는 위치에 있었다.",
    takeaway: "마지막 발표능력보다, 고객가치와 설계가치를 초기에 공동 정의하는 조직체계가 필요했다."
  }
];

const actions = [
  { timing: "DAY 1", title: "Helen → Mary", purpose: "문제 정의부터 다시 설정", first: "Mary, 이번에는 누굴 어떻게 붙잡을지보다 왜 우리가 사람들의 생각을 이렇게 늦게 알아차리는지부터 같이 봅시다.", focus: ["직원들이 충분히 말하지 않는 이유", "성장한 직원에게 다음 경력단계가 보이는지", "부서 사이 정보가 어디서 끊기는지"], output: "2주 진단과제. 결론은 미리 정하지 않는다." },
  { timing: "DAY 2–5", title: "Mary → Bob", purpose: "리더십 경청 진단", first: "개인의 잘잘못을 판단하려는 자리가 아니라, 팀의 목소리가 어디에서 막히는지 확인하려는 대화입니다.", focus: ["최근 3개월 1:1 빈도", "Adrienne의 2년 경력목표", "Engineering의 영업 관련 문제", "전달 이후 후속조치"], output: "경청 · 후속조치 · 팀 의견 대변의 세 축으로 진단." },
  { timing: "WEEK 1", title: "Engineering 소그룹", purpose: "관리자 없이 반복 패턴 확인", first: "특정 관리자를 평가하는 자리가 아닙니다. 일을 잘하려 할 때 조직의 어디에서 막히는지 알고 싶습니다.", focus: ["제기했지만 해결되지 않은 문제", "누구에게 말했고 이후 무슨 일이 있었는지", "다른 부서와 충돌할 때 누가 대변하는지", "부정적 이야기를 해도 안전한지"], output: "개인 이름이 아닌 익명의 반복 패턴으로 정리." },
  { timing: "WEEK 1", title: "중립 진행자 → Adrienne", purpose: "잔류 설득이 아닌 경험 이해", first: "오늘은 떠날지 여부를 확인하려는 자리가 아니에요. 어떤 부분이 가장 잘 작동하지 않는지를 듣고 싶습니다.", focus: ["길을 잃은 느낌의 구체적 의미", "Tom과 함께 있을 때 받았던 지원과 연결", "윗선에 말한 내용과 이후 반응"], output: "회사 입장 변명·즉각 승진 제안 없이 경청하고 반복 문제 기록." },
  { timing: "WEEK 2", title: "직원 의견 흐름 진단", purpose: "문제가 끊기는 정확한 지점 확인", first: "구성원 → 직속관리자 → 부서장 → 타 부서 → 경영진의 흐름을 실제 사례로 추적합니다.", focus: ["A: 경청 자체의 문제", "B: 후속조치의 문제", "C: 부서 간 리더십 문제", "D: 경영체계 문제"], output: "Bob의 리더십 부족이 1차 가설이지만 진단 전에는 확정하지 않는다." },
  { timing: "MONTH 1–3", title: "Bob 리더십 개선", purpose: "진단에 맞춘 행동 변화", first: "팀은 업무 성과는 잘 안다고 느끼지만, 문제를 말한 뒤 어떤 조치가 이루어지는지는 잘 보이지 않는다고 느끼고 있습니다.", focus: ["격주 핵심인재 1:1", "매월 팀 경청 세션", "Paul과 월간 협업회의", "중요 이슈 2주 내 진행상황 공유", "분기 경력대화"], output: "일반 강의가 아니라 적극적 경청·갈등조정·부서 간 영향력·후속조치 중심." },
  { timing: "MONTH 1", title: "Marko 사후 검토", purpose: "개인이 아닌 프로세스 검토", first: "책임자를 찾는 회의가 아닙니다. 좋은 설계가 왜 고객가치와 수주로 연결되지 못했는지 확인하겠습니다.", focus: ["무엇을 예상했는가", "실제로 무엇이 일어났는가", "왜 차이가 발생했는가", "다음 프로젝트에서 바꿀 것은 무엇인가"], output: "개인의 성과평가와 사후 검토를 분리." },
  { timing: "NEXT MAJOR BID", title: "부서 간 협업팀 시범", purpose: "첫 고객 미팅부터 공동 가치 제안", first: "설계·Engineering·영업·프로젝트 관리가 고객가치를 같은 언어로 정의합니다.", focus: ["설계: 무엇이 혁신적인가", "Engineering: 실제 구현 가능한가", "영업: 고객은 왜 비용을 지불하는가", "프로젝트 관리: 비용·일정·위험을 감당할 수 있는가"], output: "순차 전달에서 초기 공동 설계로 전환." },
  { timing: "MONTH 2–4", title: "경력경로 재설계", purpose: "고성과자의 다음 목적지 설계", first: "관리자가 되는 것 외에 어떤 역할이 있다면 계속 성장한다고 느낄 수 있나요?", focus: ["관리직 경로", "프로젝트 리더 경로", "전문가 경로", "보상·권한·프로젝트 범위·외부 대표성"], output: "인사부서 단독 설계가 아니라 고성과자 심층면담에서 출발." },
  { timing: "MONTH 2–4", title: "승계·의존 위험 관리", purpose: "한 사람에게 집중된 역할 분산", first: "Tom을 대신할 또 다른 Tom 한 명을 찾는 것이 목표가 아닙니다.", focus: ["설계 전문성", "프로젝트 리더십", "고객관계", "비공식 멘토링", "조직 내부 영향력"], output: "핵심직무에만 승계계획을 적용하고 멘토링은 선택형으로 운영." },
  { timing: "QUARTERLY", title: "직원 의견제시 체계", purpose: "구성원이 말한 것 → 회사가 바꾼 것", first: "짧은 정기 설문과 익명 자유응답을 실제 조치와 결과 공유로 연결합니다.", focus: ["2년 경력경로 이해", "문제 제기 후 실제 조치", "관리자의 성장 관심", "부서 간 목적 이해", "2년 잔류 의향"], output: "의견제시 → 조치 → 결과 공유 → 신뢰의 폐쇄 고리 구축." },
  { timing: "MONTH 3", title: "Bob 재평가", purpose: "같은 지표로 역할 적합성 재확인", first: "처음 합의한 행동목표를 바탕으로 개선기회를 제공했습니다. VP 역할과 현재 강점의 적합성을 다시 논의하겠습니다.", focus: ["직원 의견이 행동으로 연결된다는 인식", "후속조치 비율", "팀 신뢰", "미해결 부서 갈등", "경력대화 실시 여부"], output: "개선 시 유지·코칭. 미개선 시 Principal Engineer 등 개인–직무 적합성 재검토." },
  { timing: "ONGOING", title: "승진 의사결정 체계", purpose: "불안과 승진 기준을 분리", first: "떠날 것 같다는 이유만으로 승진하지 않습니다. 동일한 기준과 여러 관점으로 판단합니다.", focus: ["성과", "역량", "리더십 잠재력", "준비도", "조직 필요성"], output: "Helen·Mary·해당 부서장·타 부서 senior leader가 참여하는 인재검토위원회 운영." }
];

const presentation = document.querySelector("#presentation");
const scenes = [...document.querySelectorAll(".scene")];
const chapterLinks = [...document.querySelectorAll(".chapter-link")];
const sceneCount = document.querySelector("#scene-count");
const progressBar = document.querySelector("#progress-bar");
let currentScene = 0;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function scrollToScene(index) {
  const safeIndex = Math.max(0, Math.min(index, scenes.length - 1));
  scenes[safeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

function updatePresentationState(index) {
  currentScene = index;
  const chapter = scenes[index].dataset.chapter;
  sceneCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  progressBar.style.width = `${((index + 1) / scenes.length) * 100}%`;
  chapterLinks.forEach((link) => link.classList.toggle("is-active", link.querySelector("b").textContent === chapter));
}

chapterLinks.forEach((link) => {
  link.addEventListener("click", () => document.querySelector(`#${link.dataset.target}`).scrollIntoView({ behavior: "smooth" }));
});

document.querySelector("#prev-slide").addEventListener("click", () => scrollToScene(currentScene - 1));
document.querySelector("#next-slide").addEventListener("click", () => scrollToScene(currentScene + 1));
document.querySelector("[data-scroll-next]").addEventListener("click", () => scrollToScene(1));
document.querySelector("#fullscreen").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (_) {
    // Fullscreen can be blocked by the browser; the presentation remains usable.
  }
});

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  if (tag === "TEXTAREA" || tag === "INPUT") return;
  if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    scrollToScene(currentScene + 1);
  }
  if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    scrollToScene(currentScene - 1);
  }
  if (event.key === "Home") scrollToScene(0);
  if (event.key === "End") scrollToScene(scenes.length - 1);
});

const sceneObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) updatePresentationState(scenes.indexOf(visible.target));
}, { threshold: [0.35, 0.55, 0.7] });
scenes.forEach((scene) => sceneObserver.observe(scene));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll(":scope > .reveal")];
      const order = Math.max(0, siblings.indexOf(entry.target));
      entry.target.style.transitionDelay = `${Math.min(order * 70, 280)}ms`;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const tabs = document.querySelector(".character-tabs");
const panel = document.querySelector("#character-panel");

function renderCharacter(index, shouldFocus = false) {
  const person = characters[index];
  [...tabs.children].forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", tabIndex === index ? "true" : "false");
    tab.tabIndex = tabIndex === index ? 0 : -1;
  });
  panel.innerHTML = `
    <div class="character-portrait">
      <img src="${person.image}" alt="${escapeHtml(person.name)} 캐릭터">
      <div class="character-role"><strong>${escapeHtml(person.name)}</strong><small>${escapeHtml(person.role)}</small></div>
    </div>
    <div class="character-content">
      <div class="character-heading"><h3>${escapeHtml(person.name)}</h3><div class="character-tags">${person.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div></div>
      <blockquote class="speech-card"><span>[해석에 기반한 속마음]</span><p>“${escapeHtml(person.speech)}”</p></blockquote>
      <div class="emotion-line" aria-label="감정선">${person.emotions.map((emotion) => `<span class="emotion-step">${escapeHtml(emotion)}</span>`).join("")}</div>
      <div class="character-evidence">
        <div class="evidence fact"><span>[사례 사실]</span><p>${escapeHtml(person.fact)}</p></div>
        <div class="evidence analysis"><span>[분석적 해석]</span><p>${escapeHtml(person.analysis)}</p></div>
      </div>
      <p class="character-takeaway"><strong>TAKEAWAY</strong> · ${escapeHtml(person.takeaway)}</p>
    </div>`;
  if (shouldFocus) tabs.children[index].focus();
}

characters.forEach((person, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "character-tab";
  button.id = `tab-${person.id}`;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-controls", "character-panel");
  button.innerHTML = `<img src="${person.image}" alt=""><span>${person.name.split(" ")[0]}</span>`;
  button.addEventListener("click", () => renderCharacter(index));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.stopPropagation();
    event.preventDefault();
    const nextIndex = event.key === "ArrowRight" ? (index + 1) % characters.length : (index - 1 + characters.length) % characters.length;
    renderCharacter(nextIndex, true);
  });
  tabs.append(button);
});
renderCharacter(0);

const actionTimeline = document.querySelector("#action-timeline");
const actionDetail = document.querySelector("#action-detail");

function renderAction(index, shouldFocus = false) {
  const action = actions[index];
  [...actionTimeline.children].forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", buttonIndex === index ? "true" : "false");
    button.tabIndex = buttonIndex === index ? 0 : -1;
  });
  actionDetail.innerHTML = `
    <span class="timing">STEP ${String(index + 1).padStart(2, "0")} · ${escapeHtml(action.timing)}</span>
    <h3>${escapeHtml(action.title)}</h3>
    <p class="action-purpose">${escapeHtml(action.purpose)}</p>
    <blockquote class="first-words"><span>FIRST WORDS</span><p>“${escapeHtml(action.first)}”</p></blockquote>
    <div class="action-body">
      <div><b>확인할 내용</b><ul>${action.focus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
      <div><b>실행 결과</b><p>${escapeHtml(action.output)}</p></div>
    </div>`;
  if (shouldFocus) actionTimeline.children[index].focus();
}

actions.forEach((action, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "action-step";
  button.setAttribute("role", "tab");
  button.setAttribute("aria-controls", "action-detail");
  button.innerHTML = `<b>STEP ${String(index + 1).padStart(2, "0")}</b><span>${escapeHtml(action.title)}</span><small>${escapeHtml(action.timing)}</small>`;
  button.addEventListener("click", () => renderAction(index));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.stopPropagation();
    event.preventDefault();
    const forward = ["ArrowDown", "ArrowRight"].includes(event.key);
    const nextIndex = forward ? (index + 1) % actions.length : (index - 1 + actions.length) % actions.length;
    renderAction(nextIndex, true);
  });
  actionTimeline.append(button);
});
renderAction(0);

window.addEventListener("load", () => updatePresentationState(0));
