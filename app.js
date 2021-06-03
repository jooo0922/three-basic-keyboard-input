'use strict';

// DOM에 있는 canvas요소를 전부 가져온 뒤, 그러면 캔버스 요소가 담긴 배열이 되겠지?
// 그 배열안에 들어있는 각각의 캔버스 요소에 대하여 forEach에서 처리해주는거임.
document.querySelectorAll('canvas').forEach((canvas) => {
  // 각각의 캔버스 요소에 대해 각각 2d context를 만들어주고
  const ctx = canvas.getContext('2d');

  // 캔버스를 전체적으로 싹 한번 지워주고 나서 캔버스 정 가운데에 파라미터로 전달받은 string을 텍스트로 렌더링해주는 함수
  function draw(str) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 한 번씩 전체적으로 지워주고 시작함
    ctx.textAlign = 'center' // 렌더링하는 텍스트의 정렬을 캔버스의 가운데로 맞춤
    ctx.textBaseline = 'middle' // 베이스라인은 가만히 있고 베이스라인의 종류를 뭐로 할당하는지에 따라 텍스트만 위아래로 움직이는거임.
    ctx.fillText(str, canvas.width / 2, canvas.height / 2); // 전달한 인자들은 각각 렌더링할 text, x, y값임. x, y값으로 보아 텍스트의 정 가운데에 렌더링하려는 거지?
  }
  draw(canvas.id) // 처음 텍스트를 렌더링할때는 각 캔버스의 id로 할당한 문자열들을 전달해 줌.

  /**
   * focus & blur event 정리
   * 
   * 사용자가 폼 요소 또는 어떤 요소를 클릭하거나, Tab 키를 눌러 해당 요소로 이동하면, 해당 요소가 포커스(focus)된다.
   * 이렇게 요소가 포커스를 받을 때 focus 이벤트가 발생한다.
   * 
   * 반면에, 요소가 포커스를 받은 상태에서 Tab키를 눌러 다른 요소로 이동하거나 다른 요소를 클릭해서 포커스가 이동하면
   * 해당 요소는 포커스를 잃게 됨. 
   * 이렇게 포커스를 잃은 상태에서 blur 이벤트가 발생한다.
   */
  canvas.addEventListener('focus', () => {
    draw('has focus press a key');
  });

  canvas.addEventListener('blur', () => {
    draw('lost focus');
  });

  canvas.addEventListener('keydown', (e) => {
    // KeyboardEvent.keyCode는 입력한 키보드에 부여되는 고유한 아스키코드값이 담겨있음.
    // 그러나 현재 mdn에서는 해당 attribute의 사용을 권장하지 않고 있으며, 대신 가급적 keyboardEvent.code 를 대신 사용할 것을 권장하고 있음.
    // draw(`keyCode: ${e.keyCode}`);
    draw(`keyCode: ${e.code}`);
  });
});