# Grid System

## Grid System 이란?

> 그리드 기반의 디자인 시스템을 말한다.

**어제 배운 grid-template-areas 빈공간을 요소가 스스로 채우는데 라인이름을 정해준경우 자동적으로 안채워지는 차이가 신기합니다**

> 🎯 라인 이름을 명시한 경우 (grid-template-columns, grid-template-rows)
> grid-template-columns: [full-start] 1fr [content-start] 8fr [content-end] 1fr [full-end];
> 자동 배치가 일어나지 않음 ❌
> 그냥 "위치 참조용"이라 빈 공간이 있어도 요소가 스스로 채우지 않음.
> 직접 grid-column이나 grid-row를 지정해 배치해야 함.
> 💡 즉, "자동 배치(auto-placement)" 기능이 비활성화됨.

> 🎯 grid-template-areas를 이용한 경우

grid-template-areas:
'item1 item1 item1 item3'
'item1 item1 item1 item6'
'item4 . item5 item6'
'item7 . item5 item2';
여기서는 "배치할 공간"을 명확하게 설정함.
만약 .(빈 칸)이 있으면 그곳은 아무것도 들어가지 않음.
만약 .을 제거하면 요소가 자동으로 확장하여 빈 공간을 채움.
💡 즉, grid-template-areas는 "이미 배치된 요소들의 영역을 확장"할 수 있는 특성을 가짐.

> 🔥 최종 정리
> 설정 방식 자동 배치? 빈 공간 자동 채움? 설명
> grid-template-columns + 라인 이름 ❌ 없음 ❌ 안 채움 라인은 참조용이므로 직접 배치해야 함
> grid-template-areas ✅ 있음 ✅ 요소가 확장 가능 배치된 요소들이 설정된 영역 내에서 빈 공간을 메움
