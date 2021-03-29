import React from 'react';
import '../components/style/Landing.scss';

function LandingPage({ onBirthHandler, props }) {
  const startTest = () => {
    const UserYear = document.getElementById('year');

    try {
      if (UserYear.value < 1900 || UserYear.value > 2020 || isNaN(UserYear.value)) throw '1900년 이후 출생자만 지원가능.';

      props.history.push('/question');

      onBirthHandler(UserYear.value);
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <div class="root">
      <form
        class="input"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input class="input__text" type="text" id="year" required="required" placeholder="출생 연도 입력 (예시: 1997)"></input>
        <button class="input__button" onClick={startTest}>
          테스트 시작
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
