# My Agent Office — 릴리스

맥에서 돌고 있는 Claude Code · Codex 세션을 픽셀아트 사무실로 보여 주는 앱의 **설치 파일만** 두는 공개 저장소다.

## 설치

1. 오른쪽 **Releases** 에서 가장 새 버전의 `My Agent Office-X.Y.Z-arm64.dmg` 를 받는다 (애플 실리콘 맥).
2. dmg 를 열고 `My Agent Office.app` 을 **응용 프로그램**에 끌어 넣는다.
3. 앱을 한 번 연다. 서명이 없어서 **"열 수 없습니다"** 창이 뜬다 — 창은 닫는다.
4. **시스템 설정 → 개인정보 보호 및 보안** 으로 가서 아래로 내리면
   *"My Agent Office"이(가) 차단되었습니다* 옆에 **그래도 열기** 가 있다. 누르고, 다시 한 번 **열기** 를 누른다.
5. 그 뒤로는 그냥 열린다.

- 옛 맥OS에서 **"확인되지 않은 개발자"** 만 뜨면 앱을 우클릭 → **열기**.
- **"손상되었기 때문에 열 수 없습니다"** 가 뜨면 격리 표시 때문이다. 터미널에서 한 줄:
  `xattr -dr com.apple.quarantine "/Applications/My Agent Office.app"`

## 업데이트

새 버전이 나오면 앱 위쪽에 띠가 뜨고 **지금 업데이트** 가 여기서 코드 묶음(`my-agent-office-X.Y.Z.asar` + `.sig`)만 받아 다시 켠다.
dmg 로 다시 깔 필요가 있는 버전은 릴리스 노트에 적는다.

## 파일

| 파일 | 쓰임 |
| --- | --- |
| `My Agent Office-X.Y.Z-arm64.dmg` | 처음 설치, 또는 dmg 재설치가 필요한 버전 |
| `my-agent-office-X.Y.Z.asar` | 앱 안 자동 업데이트가 받는 코드 묶음 |
| `my-agent-office-X.Y.Z.asar.sig` | 코드 묶음 서명 — 앱은 서명이 맞는 묶음만 받는다 |
