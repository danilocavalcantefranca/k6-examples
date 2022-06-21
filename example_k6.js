
import http from 'k6/http';
export const options = {
  // Quando não passa parametro, ele passa apenas um unico usuario
  vus: 10,
  duration: '30s',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  // (export default function) função principal do k6, como se fosse a main em outras linguagens de programação
  http.get('http://test.k6.io');
  // sleep(1);
}
