// 방문 세기 (Den 2026-11-01): 페이지를 열 때 한 번. 쿠키 없음, 숫자만 (앱 관리자 탭 "홈페이지").
// n=1 = 이 브라우저의 오늘 첫 방문, r = 어디서 왔는지 (호스트만 남는다)
(function () {
  if (location.hostname !== 'my-agent-office.github.io') return;
  var today = '', first = '1';
  try { today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(new Date()); } catch (e) { today = new Date().toISOString().slice(0, 10); }
  try { first = localStorage.getItem('mao-day') === today ? '0' : '1'; localStorage.setItem('mao-day', today); } catch (e) { /* 없어도 된다 */ }
  var url = 'https://us-central1-my-agent-office.cloudfunctions.net/hit?n=' + first + '&r=' + encodeURIComponent(document.referrer || '');
  try { if (!(navigator.sendBeacon && navigator.sendBeacon(url))) fetch(url, { method: 'POST', mode: 'no-cors', keepalive: true }); } catch (e) { /* 못 세도 된다 */ }
})();
