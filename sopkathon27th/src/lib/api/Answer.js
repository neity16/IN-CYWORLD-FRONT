import axios from 'axios';

// const url = 'http://127.0.0.1:5000/api/members';
const url = 'http://15.165.86.166:3000';

const postAnswerAPI = async object => {
  try {
    const { data } = await axios.post(`${url}/user`, {
      birthYear: object.birthYear,
      answers: object.answers,
    });
    return data.data;
  } catch (e) {
    // console.error('[FAIL] POST ANSWER', e);
    return e;
  }
};

export { postAnswerAPI };
