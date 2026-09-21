const characters = [
  {
    id: "tom", name: "Tom Forsythe", role: "핵심 설계인력 / 고성과자", image: "assets/tom.png", definition: "성장한 고성과자와 조직의 적합성 변화",
    tags: ["성취", "내재적 동기", "개인–조직 적합성 변화", "정서적 이탈"],
    speech: "이 회사가 많은 기회를 준 건 맞아. 그런데 이제 더 성장하려면 여기에서 다음 단계가 어디인지 잘 보이지 않아.",
    emotions: ["조직에 대한 애착", "성과와 인정", "Marko의 한계 체감", "성장경로 의문", "기대 약화", "정서적 이탈"],
    fact: "여러 설계상을 받은 고성과자였고 높은 자율성을 가졌다. 퇴사 면담에서는 행복했다고 말하며 큰 불만을 직접 언급하지 않았다. 이후 아내 Alyson과의 대화에서는 의도적으로 말을 아꼈다는 태도를 보인다.",
    analysis: "침묵의 이유를 ‘말해도 바뀌지 않아서’ 하나로 단정할 수는 없다. 관계를 망치지 말라는 Alyson의 조언도 있었다. 다만 회사의 미래가 더 이상 자신의 문제가 아니라는 태도는 상당한 정서적 이탈을 보여준다.",
    takeaway: "Tom은 혁신과 자율성 자체보다, 그 가치를 실제 성과와 자신의 다음 성장단계로 연결하는 조직체계에 한계를 느꼈을 가능성이 있다."
  },
  {
    id: "helen", name: "Helen Gasbarian", role: "CEO / Architect", image: "assets/helen.png", definition: "내부 원인보다 인재 유지에 먼저 반응한 경영진",
    tags: ["자부심", "상호성 기대", "상실회피", "방어적 대응"],
    speech: "우리는 사람들이 아직 신입일 때부터 큰 프로젝트와 기회를 줬어. 그런데 왜 이제 와서 다른 회사로 떠나는 거지?",
    emotions: ["창업철학에 대한 자부심", "이탈에 당혹", "경쟁사 원인 해석", "상실 불안", "즉흥 유지 행동", "원인 탐색 약화"],
    fact: "직원을 아끼고 회사가 좋은 기회를 제공했다고 믿는다. Adrienne의 이탈 가능성을 듣고 즉시 승진 방안을 생각한다. Bob이 문제의 일부인지 잠시 의심하지만 오래 충성했다는 이유로 더 깊이 확인하지 않는다.",
    analysis: "‘우리가 먼저 믿고 기회를 줬다’는 상호성 기대가 있었을 수 있다. Peter의 기회→성취→몰입 공식은 초기 성공의 원천이었지만, 성숙한 조직에는 경력경로·리더십·승계·협업이 더 필요했다.",
    takeaway: "무관심이 아니라, 문제 정의가 ‘왜 떠나는가?’에서 ‘어떻게 빼앗기지 않을까?’로 이동한 것이 핵심이다."
  },
  {
    id: "mary", name: "Mary Donillo", role: "인사책임자", image: "assets/mary.png", definition: "문제를 읽었지만 행동으로 전환하지 못한 HR",
    tags: ["원칙주의", "조심성", "데이터 의존", "불확실성 회피"],
    speech: "문제가 있다는 건 알겠어. 그런데 정확한 근거 없이 먼저 움직여도 되는 걸까?",
    emotions: ["이상징후 감지", "원인 확신 부족", "추가 조사 요구", "행동 유보", "공정성 우려", "주도력 부족"],
    fact: "Helen의 즉흥 승진이 다른 직원에게 미칠 메시지와 절차적 공정성을 걱정한다. 문제를 판단할 더 많은 조사와 데이터를 요구한다.",
    analysis: "근거 중심 판단은 장점이지만, 사람의 문제를 관계 속에서 직접 확인하기보다 조사 결과가 나와야 판단할 문제로 보는 경향이 있었다. 정보가 부족할수록 사람 사이로 들어가야 했다.",
    takeaway: "문제를 읽는 능력은 있지만, 그 판단을 전략적인 인사 행동으로 전환하는 힘은 약했다."
  },
  {
    id: "adrienne", name: "Adrienne Perle", role: "Engineering 핵심인재", image: "assets/adrienne.png", definition: "말해도 달라지지 않는 조직을 경험한 핵심인재",
    tags: ["답답함", "직원 의견제시", "무력감", "방향 상실"],
    speech: "문제가 있다는 건 알고 있어. 이미 말해봤어. 그런데 달라지는 건 없고, 혼자 해결할 수도 없어.",
    emotions: ["조직문제 인식", "의견 제시", "반응 없음", "답답함", "Tom의 상실", "경력 방향성 혼란"],
    fact: "조직이 잘못된 방향으로 간다고 윗선에 이야기했지만 ‘아무도 듣지 않는다’고 느낀다. Tom을 비공식적 멘토에 가깝게 생각했고, Bob이 멘토가 되는 제안에는 불편한 반응을 보인다.",
    analysis: "문제는 멘토 한 명의 부재보다 지원·방향성·조직 연결의 상실이다. Bob이 이미 신뢰받는 멘토였다면 제안이 그렇게 낯설지 않았을 수 있다. 영업이 혁신가치를 이해하고 Engineering의 의견이 위로 전달되는지도 의문이었다.",
    takeaway: "Adrienne에게 필요한 것은 승진 하나가 아니라 ‘문제를 말하면 조직이 실제로 움직인다’는 경험이었다."
  },
  {
    id: "bob", name: "Bob Wortham", role: "VP of Engineering", image: "assets/bob.png", definition: "성과는 알았지만 구성원의 상태는 놓친 관리자",
    tags: ["성과 인지", "사람관리 리더십 가설", "사후 대응"],
    speech: "Adrienne이 얼마나 중요한 사람인지는 알아. 그런데 왜 떠나려 할 수 있는지는 제대로 알고 있었나?",
    emotions: ["높은 성과 평가", "이탈 가능성에 위기감", "원인 이해 부족", "CEO에게 도움 요청"],
    fact: "회사가 Adrienne을 왜 필요로 하는지는 잘 안다. 이탈 가능성을 듣자 Helen에게 즉시 도움을 요청할 접근권한도 있었다.",
    analysis: "가장 강한 1차 가설은 사람관리 역량 부족이다. 다만 실무 과부하나 현재 관리직과의 개인–직무 적합성 문제도 진단해야 한다. 조직구조상 전혀 권한이 없었다는 가설은 상대적으로 약하다.",
    takeaway: "악의보다 경청 → 후속조치 → 팀의 의견 대변으로 이어지는 사람관리 리더십이 부족했을 가능성이 있다."
  },
  {
    id: "savannah", name: "Savannah Dorsey", role: "동료 / 관찰자", image: "assets/savannah.png", definition: "공식 지표보다 먼저 변화를 감지한 동료",
    tags: ["공감", "관찰", "Marko 전환점"],
    speech: "Tom은 프로젝트 하나를 놓쳐서만 낙담한 것 같지는 않아. Marko를 겪으면서 이 회사의 한계를 본 것 같아.",
    emotions: ["높은 몰입 관찰", "Marko 이후 변화 감지", "전문가로서의 실망 이해", "인간적 걱정"],
    fact: "Marko 프로젝트 수주 실패 이후 Tom의 업무 몰입이 눈에 띄게 떨어진 것처럼 보였다고 말한다. 퇴사 면담보다 훨씬 전부터 동료가 변화를 감지했다.",
    analysis: "Marko는 퇴사 원인 전체가 아니라, 좋은 설계를 조직이 실제 성과로 연결하지 못할 수 있다는 한계를 Tom이 체감한 전환점이었을 가능성이 있다.",
    takeaway: "조직은 공식 퇴사 신호보다 훨씬 앞서 나타나는 동료의 관찰과 몰입 변화를 놓쳤다."
  },
  {
    id: "hal", name: "Hal Pope", role: "동료 / 조직구조 관찰자", image: "assets/hal.png", definition: "개인의 노력보다 경력 병목을 본 관찰자",
    tags: ["현실감각", "경력 병목", "상위직급 정체"],
    speech: "Tom이 더 열심히 해야 하는 문제가 아니야. 이미 충분히 잘하고 있어. 그런데 다음 단계는 어디지?",
    emotions: ["Tom의 성과 인식", "상위 조직 병목 인식", "노력–보상 연결 회의", "경력체계 냉소"],
    fact: "Tom의 문제를 개인의 동기 부족보다 ‘어디까지 성장할 수 있는가?’라는 구조적 문제로 본다. 상위직급 이동이 적고 자리가 정체되어 있다.",
    analysis: "Sambian은 초기 경력을 빠르게 키우지만, 다음 목적지가 없으면 장기적 경력의 종착지가 되기 어렵다. 아래에는 혁신을 요구하면서 상층부는 같은 자리를 유지하는 모순도 보인다.",
    takeaway: "인재 이탈의 원인을 개인의 욕심보다 조직 상층부의 경력 병목에서 본다."
  },
  {
    id: "paul", name: "Paul Bonney", role: "Architecture Sales", image: "assets/paul.png", definition: "설계와 고객가치 사이의 협업 단절을 보여준 인물",
    tags: ["영업 관점", "수주 압박", "부서 간 협업 부족"],
    speech: "설계부문과 영업부문이 ‘좋은 프로젝트’를 바라보는 기준부터 다르다면, 마지막 발표만 잘한다고 해결될까?",
    emotions: ["수주 책임", "서로 다른 성공기준", "상호 오해", "부서 간 거리 증가"],
    fact: "영업은 고객 요구·가격·위험·일정·수주 가능성을 중시한다. 설계는 혁신·품질·창의성·완성도를 중시한다.",
    analysis: "Paul을 Marko 실패의 단독 원인이나 무능한 영업책임자로 볼 수 없다. 두 관점을 프로젝트 초기에 연결하는 구조가 약했고, Paul은 그 협업 실패가 가장 선명하게 드러나는 위치에 있었다.",
    takeaway: "마지막 발표능력보다, 고객가치와 설계가치를 초기에 공동 정의하는 조직체계가 필요했다."
  }
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

function manualStageGroups(scene) {
  const elements = [...scene.querySelectorAll(".manual-stage")];
  const stages = [...new Set(elements.map((element) => Number(element.dataset.stage) || 1))].sort((a, b) => a - b);
  return stages.map((stage) => elements.filter((element) => (Number(element.dataset.stage) || 1) === stage));
}

function setManualGroupVisible(group, visible) {
  group.forEach((element, index) => {
    element.style.setProperty("--stage-delay", `${visible ? index * 65 : 0}ms`);
    element.classList.toggle("is-visible", visible);
    element.setAttribute("aria-hidden", visible ? "false" : "true");
  });
}

function resetManualStages(scene) {
  manualStageGroups(scene).forEach((group) => setManualGroupVisible(group, false));
}

function revealNextManualStage(scene) {
  const nextGroup = manualStageGroups(scene).find((group) => group.some((element) => !element.classList.contains("is-visible")));
  if (!nextGroup) return false;
  setManualGroupVisible(nextGroup, true);
  return true;
}

function hideLastManualStage(scene) {
  const visibleGroups = manualStageGroups(scene).filter((group) => group.some((element) => element.classList.contains("is-visible")));
  const lastGroup = visibleGroups.at(-1);
  if (!lastGroup) return false;
  setManualGroupVisible(lastGroup, false);
  return true;
}

function resetAutoReveals(scene) {
  scene.querySelectorAll(".reveal").forEach((element) => {
    element.classList.remove("is-visible");
    element.style.removeProperty("transition-delay");
  });
}

function playAutoReveals(scene) {
  const elements = [...scene.querySelectorAll(".reveal:not(.manual-stage)")];
  elements.forEach((element) => element.classList.remove("is-visible"));
  requestAnimationFrame(() => {
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 55, 330)}ms`;
      element.classList.add("is-visible");
    });
  });
}

function updatePresentationState(index) {
  const previousScene = currentScene;
  currentScene = index;
  if (previousScene !== index) {
    scenes[previousScene]?.classList.remove("is-current");
    resetAutoReveals(scenes[previousScene]);
    resetManualStages(scenes[previousScene]);
    scenes[index].classList.add("is-current");
    playAutoReveals(scenes[index]);
  }
  const chapter = scenes[index].dataset.chapter;
  if (sceneCount) sceneCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  if (progressBar) progressBar.style.width = `${((index + 1) / scenes.length) * 100}%`;
  chapterLinks.forEach((link) => link.classList.toggle("is-active", link.querySelector("b").textContent === chapter));
}

chapterLinks.forEach((link) => {
  link.addEventListener("click", () => document.querySelector(`#${link.dataset.target}`).scrollIntoView({ behavior: "smooth" }));
});

document.querySelector("#prev-slide")?.addEventListener("click", () => scrollToScene(currentScene - 1));
document.querySelector("#next-slide")?.addEventListener("click", () => scrollToScene(currentScene + 1));
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
    if (revealNextManualStage(scenes[currentScene])) return;
    scrollToScene(currentScene + 1);
  }
  if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    if (hideLastManualStage(scenes[currentScene])) return;
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

const tabs = document.querySelector(".character-tabs");
const panel = document.querySelector("#character-panel");
let characterTransitionToken = 0;

function renderCharacter(index, shouldFocus = false) {
  const person = characters[index];
  [...tabs.children].forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", tabIndex === index ? "true" : "false");
    tab.tabIndex = tabIndex === index ? 0 : -1;
  });
  const updatePanel = () => {
    panel.innerHTML = `
    <div class="character-portrait">
      <img src="${person.image}" alt="${escapeHtml(person.name)} 캐릭터">
      <div class="character-role"><strong>${escapeHtml(person.name)}</strong><small>${escapeHtml(person.role)}</small></div>
    </div>
    <div class="character-content">
      <div class="character-heading"><div><h3>${escapeHtml(person.name)}</h3><p class="character-definition">${escapeHtml(person.definition)}</p></div><div class="character-tags">${person.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div></div>
      <blockquote class="speech-card"><span>[해석에 기반한 속마음]</span><p>“${escapeHtml(person.speech)}”</p></blockquote>
      <div class="emotion-line" aria-label="감정선">${person.emotions.map((emotion) => `<span class="emotion-step">${escapeHtml(emotion)}</span>`).join("")}</div>
      <div class="character-evidence">
        <div class="evidence fact"><span>[사례 사실]</span><p>${escapeHtml(person.fact)}</p></div>
        <div class="evidence analysis"><span>[분석적 해석]</span><p>${escapeHtml(person.analysis)}</p></div>
      </div>
      <p class="character-takeaway"><strong>TAKEAWAY</strong> · ${escapeHtml(person.takeaway)}</p>
    </div>`;
    panel.classList.remove("is-switching-out");
    panel.classList.add("is-switching-in");
    window.setTimeout(() => panel.classList.remove("is-switching-in"), 420);
    if (shouldFocus) tabs.children[index].focus();
  };

  const token = ++characterTransitionToken;
  if (!panel.hasChildNodes() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    updatePanel();
    return;
  }
  panel.classList.add("is-switching-out");
  window.setTimeout(() => {
    if (token === characterTransitionToken) updatePanel();
  }, 120);
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

const diagnosticTabs = [...document.querySelectorAll(".s05-diagnostic-tabs [role='tab']")];
const diagnosticAnswer = document.querySelector("#s05-diagnostic-answer");

function selectDiagnosticQuestion(index, shouldFocus = false) {
  diagnosticTabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.tabIndex = selected ? 0 : -1;
  });
  if (diagnosticAnswer) diagnosticAnswer.textContent = `“${diagnosticTabs[index].dataset.question}”`;
  if (shouldFocus) diagnosticTabs[index].focus();
}

diagnosticTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectDiagnosticQuestion(index));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.stopPropagation();
    event.preventDefault();
    const forward = event.key === "ArrowRight";
    const nextIndex = forward ? (index + 1) % diagnosticTabs.length : (index - 1 + diagnosticTabs.length) % diagnosticTabs.length;
    selectDiagnosticQuestion(nextIndex, true);
  });
});

const aiCaseTabs = [...document.querySelectorAll(".ai-case-tabs [role='tab']")];
const aiCasePanels = [...document.querySelectorAll(".ai-case-card[role='tabpanel']")];
const aiCasesPanel = document.querySelector(".ai-cases-panel");
let aiTransitionToken = 0;

function selectAiCase(index, shouldFocus = false) {
  aiCaseTabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.tabIndex = selected ? 0 : -1;
  });
  const updatePanel = () => {
    aiCasePanels.forEach((casePanel, panelIndex) => {
      casePanel.hidden = panelIndex !== index;
      casePanel.classList.toggle("is-entering", panelIndex === index);
    });
    aiCasesPanel?.classList.remove("is-switching-out");
    window.setTimeout(() => aiCasePanels[index].classList.remove("is-entering"), 360);
    if (shouldFocus) aiCaseTabs[index].focus();
  };

  const token = ++aiTransitionToken;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    updatePanel();
    return;
  }
  aiCasesPanel?.classList.add("is-switching-out");
  window.setTimeout(() => {
    if (token === aiTransitionToken) updatePanel();
  }, 100);
}

aiCaseTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectAiCase(index));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.stopPropagation();
    event.preventDefault();
    const nextIndex = event.key === "ArrowRight" ? (index + 1) % aiCaseTabs.length : (index - 1 + aiCaseTabs.length) % aiCaseTabs.length;
    selectAiCase(nextIndex, true);
  });
});

scenes.forEach((scene) => {
  resetAutoReveals(scene);
  resetManualStages(scene);
});
scenes[0]?.classList.add("is-current");

window.addEventListener("load", () => {
  updatePresentationState(0);
  playAutoReveals(scenes[0]);
});
