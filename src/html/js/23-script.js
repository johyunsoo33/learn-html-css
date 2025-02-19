// DOM 선택 부분
const flipButton = document.querySelector('.flip-button');
const card = document.querySelector('.card');

// 함수 부분
function flipCard() {
	card.classList.toggle('is-flipped');
}

// 이벤트 리스너 추가
flipButton.addEventListener('click', flipCard);
