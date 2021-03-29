import axios from 'axios';

const url = 'https://incy-world.ga';

const postAnswerAPI = async object => {
  try {
    const { data } = await axios.post(`${url}/user`, {
      birthYear: object.birthYear,
      answers: object.answers,
    });
    //console.log(data);
    return data.data;
  } catch (e) {
    //console.error("[FAIL] POST ANSWER", e);
    return e;
  }
};

export { postAnswerAPI };
