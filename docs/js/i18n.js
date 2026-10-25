'use strict';
// 한/영 전환 — 한국어 원문을 그대로 키로 쓴다. ?lang=en, 고른 언어 기억, 처음엔 브라우저 언어.
(function () {
  const EN = {
    '팀이 같이 쓰는<br><em>AI 에이전트</em> 사무실': 'A shared office<br>for your <em>AI agents</em>',
    '내 맥의 Claude Code · Codex 세션이 픽셀 사무실의 사람이 됩니다.': 'Your Claude Code and Codex sessions become people in a pixel office.',
    '무료 다운로드': 'Download free',
    'macOS 12+ · Apple 칩': 'macOS 12+ · Apple silicon',
    '작업 중': 'Working', '답변 대기': 'Waiting', '쉬는 중': 'Resting', '멈춤': 'Stalled',
    '책상만 보면 세션 상태가 보여요': 'One look at a desk tells you how a session is doing',
    '바쁠수록 불이 커져요': 'The busier, the bigger the fire',
    '물어볼 게 있으면 ? 가 떠요': 'A ? pops up when it has a question',
    '오래 멈추면 이름표 앞 네모가 빨개져요': 'Stuck too long and the square by the name turns red',
    'PR 머지': 'PR merged', '머지되면 폭죽이 터져요': 'Fireworks when it merges',
    '빌드 통과': 'Build passed', '빌드가 통과하면 PASS': 'PASS when the build goes green',
    '빌드 실패': 'Build failed', '깨지면 연기가 나요': 'Smoke when it breaks',
    '책상을 누르면': 'Click a desk',
    '브랜치 · PR · 지금 하는 일을 한눈에': 'Branch, PR and what it is doing right now',
    '세션이 띄운 localhost 페이지 바로 열기': 'Open the localhost pages the session started',
    '에이전트가 만든 파일 열기 · 폴더에서 보기': 'Open files the agent made, or show them in Finder',
    '만든 결과물을 팀에 공개하거나 게시판에 올리기': 'Share results with the team or post them to the board',
    '내 책상 꾸미기': 'Decorate your desk',
    '소품 가게에서 화분 · 램프 · 지구본 같은 소품 사기': 'Buy plants, lamps, globes and more in the shop',
    '끌어서 내 책상 위 원하는 자리에 두기': 'Drag them anywhere on your desk',
    '꾸민 책상은 팀원들에게도 그대로 보여요': 'Your teammates see your desk just as you made it',
    '사무실 게시판': 'Office board',
    '공지 · 사진 · 투표를 올리는 팀 게시판': 'A team board for notices, photos and polls',
    '댓글과 리액션으로 바로 반응': 'Reply with comments and reactions',
    '새 글은 사무실 게시판에 숫자로, 맥 알림으로': 'New posts show as a count on the board and as Mac notifications',
    '책상의 결과물 링크를 그대로 올려 공유': 'Post links to desk results straight from the desk',
    '멀리 있어도 한 사무실': 'Far apart, one office',
    '팀원의 작업 현황': 'See what your team is doing',
    '다른 도시, 다른 나라에 있어도 팀원 세션이 내 사무실 책상에': 'Teammates in other cities or countries work at desks in your office',
    '국기와 달 표시로 그 사람의 현지 시간이 보여요': 'Flags and a moon show each person\'s local time',
    '팀이 여럿이면 팀마다 방이 나뉘어요': 'Several teams get a room each',
    '누가 출근했고 누가 퇴근했는지 맨 위 한 줄로': 'Who is in and who has left, in one line at the top',
    'Figma · Notion 연동': 'Figma and Notion',
    'Figma에서 작업 중이면 그 옆에 Figma 책상이 생겨요': 'Working in Figma adds a Figma desk next to yours',
    'Notion 보드의 진행 중 티켓이 내 책상 위에': 'In-progress tickets from your Notion board sit on your desk',
    '업무 일지의 할 일 진행이 숫자로 보여요': 'Work log to-dos show as a progress count',
    '출퇴근 · 근무 기록': 'Clock in, clock out, work log',
    '출근 · 퇴근은 버튼 한 번': 'Clock in and out with one button',
    '사람별 첫 출근 · 퇴근 · 총 작업 시간': 'First in, last out and total work time per person',
    '하루 막대로 언제 일했는지 한눈에': 'A day bar shows when people worked',
    '날짜별 기록과 CSV 저장': 'Records by date, with CSV export',
    '회의실에 들어가면 바로 회의': 'Walk into the meeting room, start the meeting',
    '화상': 'Video', '보드': 'Board', '플래닝 포커': 'Planning poker',
    '내 맥 밖으로 나가는 것': 'What leaves your Mac',
    '팀에 보이는 것': 'What your team sees',
    '폴더 이름 · 브랜치': 'Folder name, branch', '대화 내용 · 질문': 'Conversations, questions',
    '작업 상태 · 도구 · 파일 이름': 'Status, tool, file names', '코드': 'Code',
    '세션 제목 (끌 수 있음)': 'Session title (can be turned off)', '전체 경로': 'Full paths',
    '출근 · 퇴근 시각': 'Clock-in and clock-out times', '다른 앱 · 화면': 'Other apps, your screen',
    '혼자 쓰면 아무것도 나가지 않습니다.': 'Used alone, nothing leaves your Mac.',
    '곧 나와요 · 1인 사무실': 'Coming soon · Solo office',
    '쉬는 시간은 탕비실에서': 'Breaks happen in the break room',
    '오락기': 'Arcade', '크레인': 'Claw machine', '럭키박스': 'Lucky box',
    '출근하기': 'Clock in',
    '최신 버전 받기 (.dmg)': 'Get the latest version (.dmg)',
    'dmg를 열고 앱을 응용 프로그램 폴더로 끌어 놓기': 'Open the dmg and drag the app into Applications',
    '처음 열 때 “확인할 수 없음” 창이 뜨면 완료 →<br>시스템 설정 → 개인정보 보호 및 보안 → <b>그래도 열기</b>':
      'If the first launch says Apple could not verify the app, click Done,<br>then System Settings → Privacy &amp; Security → <b>Open Anyway</b>',
    '그래도 안 열리면 터미널에서 <code>xattr -cr "/Applications/My Agent Office.app"</code>': 'Still blocked? Run <code>xattr -cr "/Applications/My Agent Office.app"</code> in Terminal',
    'My Agent Office · 무료 · macOS': 'My Agent Office · Free · macOS',
    'GitHub 릴리스': 'GitHub releases',
    '내려받아 열기': "Download and open",
    '내 Claude Code · Codex 세션이 바로 책상에': "Your Claude Code and Codex sessions show up at desks right away",
    '방장이 사무실을 만들고 참가자를 부르면 한 사무실': "The host makes an office, invites members, and you share one office",
    '설정 없음 · API 키 없음 · 추가 비용 없음': "No setup · No API key · No extra cost",
    '? 가 뜨고 맥 알림이 와요': "A ? pops up and your Mac notifies you",
    'PR 머지 · 빌드 통과 · 빌드 실패도 책상에서 터져요': "PR merges, passing builds and broken builds show up at the desk too",
    '책상 모니터에서 바로 터미널': "A terminal right on the desk monitor",
    '소품을 사서 책상 위 원하는 자리에': "Buy props and put them anywhere on your desk",
    '공지 · 사진 · 투표, 댓글과 리액션': "Notices, photos and polls, with comments and reactions",
    '책상의 결과물을 그대로 올려 공유': "Share results straight from your desk",
    '사무실 채팅, 회의실 · 탕비실로 부르기': "Office chat, and call people to the meeting room or break room",
    '사람별 출퇴근 · 작업 시간을 날짜별로': "Clock-in, clock-out and work time per person, by date",
    '화상 · 화면 공유': "Video and screen sharing",
    '말을 받아 적고 내 Claude Code · Codex로 요약': "Transcribes the talk and summarizes it with your own Claude Code or Codex",
    '보드 · 플래닝 포커 · 투표': "Board, planning poker and votes",
    '앱 없는 사람도 링크로 브라우저에서 참여': "Guests without the app join from a browser link",
    "노션 티켓이 올라간 책상": "A desk with Notion tickets",
    "Figma 책상": "A Figma desk",
    "팀마다 나뉜 방이 나란히 있는 사무실": "An office with a room for each team, side by side",
    "팀마다 방이 나뉘고, 우리 팀 방만 따로 볼 수도": "Each team gets its own room, and you can view just yours",
    "회의실에 들어가면 바로 화상 회의": "Walk into the meeting room and the video call starts",
    "화면 공유, 말하는 사람 채팅은 자막으로": "Screen sharing, with the presenter's chat as captions",
    "포스트잇으로 아이디어 모으기": "Collect ideas on sticky notes",
    "끌어서 묶고, 같은 내용은 겹쳐서 정리": "Drag to group, and duplicates stack up",
    "모두의 화면에 바로 같이 보여요": "Everyone sees the same board live",
    "주제를 올리고 각자 카드 고르기": "Post a topic and everyone picks a card",
    "다 고르면 한꺼번에 공개": "Reveal all cards at once",
    "정한 점수는 회의 기록에 남아요": "Agreed points are saved in the meeting log",
    "업적을 달성해 사무실을 더 풍성하게": "Earn achievements, grow your office",
    "처음": "Day one",
    "같이 키운 사무실": "Grown together",
    "책상만 있는 처음 사무실": "A new office with only desks",
    "회의실 · 탕비실 · 게시판 · 고양이가 생긴 사무실": "An office with a meeting room, break room, board and cat",
    "처음엔 책상만 있는 빈 사무실": "You start with an empty office with just desks",
    "업적과 일하며 모은 코인을 사무실 금고에 함께": "Coins from achievements and work go into the office safe together",
    "회의실 · 탕비실 · 게시판 · 고양이 · 오락기 게임이 하나씩 열려요": "Meeting rooms, the break room, the board, the cat and arcade games open one by one",
    "혼자 쓰거나, 팀 사무실을 만들어 참가자 부르기": "Use it alone, or make a team office and invite members",
    "혼자 쓰면 작업 내용은 아무것도 나가지 않습니다.": "Used alone, none of your work leaves your Mac.",
    "혼자 쓰는 1인 사무실": "A solo office for one person",
    "혼자 쓰기 · 1인 사무실": "Solo office",
    "로그인하면 기다리지 않고 바로 내 사무실": "Sign in and your office is ready, no waiting",
    "세션 현황 · 근무 기록은 내 맥에만": "Session status and work logs stay on your Mac",
    "회의실 · 휴게공간도 혼자 쓰는 크기로": "A meeting room and break area sized for one",
    // 그림 설명 (alt · aria-label)
    '에이전트들이 일하는 픽셀 사무실 (움직이는 그림)': 'A pixel office with agents at work (animated)',
    '책상 상세 창': 'Desk detail window', '소품을 올린 내 책상': 'A desk with props on it', '소품 가게': 'Prop shop',
    '팀별로 나뉜 사무실과 나라별 국기': 'An office split by team, with country flags',
    '노션 티켓과 Figma 책상': 'Notion tickets and a Figma desk', '근무 기록 창': 'Work log window',
    '픽셀 캐릭터 넷이 참여한 화상 회의': 'A video meeting with four pixel characters',
    '팀이 같이 쓰는 AI 에이전트 사무실. 내 맥의 Claude Code · Codex 세션이 픽셀 사무실의 사람이 된다.':
      'A shared office for your AI agents. Your Claude Code and Codex sessions become people in a pixel office.',
  };
  const KO = {};
  const ATTRS = ['alt', 'aria-label'];
  const els = [];
  // 글자만 든 요소 (자식 요소가 있어도 통째로 사전에 있으면 바꾼다)
  for (const el of document.body.querySelectorAll('*')) {
    if (el.tagName === 'SCRIPT' || el.tagName === 'CANVAS' && !el.getAttribute('aria-label')) continue;
    const k = el.innerHTML.trim();
    const hit = EN[k] !== undefined;
    const attrs = ATTRS.filter((a) => EN[el.getAttribute(a)] !== undefined);
    if (hit || attrs.length) els.push({ el, html: hit ? k : null, attrs: attrs.map((a) => [a, el.getAttribute(a)]) });
  }
  const meta = document.querySelector('meta[name=description]');
  const btn = document.getElementById('lang');
  function set(lang) {
    const en = lang === 'en';
    for (const x of els) {
      if (x.html !== null) x.el.innerHTML = en ? EN[x.html] : x.html;
      for (const [a, ko] of x.attrs) x.el.setAttribute(a, en ? EN[ko] : ko);
    }
    if (meta) meta.content = en ? EN[KO.meta || (KO.meta = meta.content)] || meta.content : KO.meta || meta.content;
    document.documentElement.lang = en ? 'en' : 'ko';
    if (btn) { btn.textContent = en ? '한국어' : 'EN'; btn.setAttribute('aria-label', en ? '한국어로 보기' : 'View in English'); }
    window.SITE_LANG = lang;
    window.dispatchEvent(new Event('sitelang'));
  }
  let lang = new URLSearchParams(location.search).get('lang');
  if (lang !== 'en' && lang !== 'ko') {
    try { lang = localStorage.getItem('lang'); } catch (e) { lang = null; }
    if (lang !== 'en' && lang !== 'ko') lang = /^ko\b/i.test(navigator.language || 'ko') ? 'ko' : 'en';
  }
  if (lang === 'en') set('en'); else window.SITE_LANG = 'ko';
  if (btn) btn.addEventListener('click', () => {
    const next = window.SITE_LANG === 'en' ? 'ko' : 'en';
    try { localStorage.setItem('lang', next); } catch (e) { /* 저장 못 해도 이번 화면은 바뀐다 */ }
    set(next);
  });
})();
