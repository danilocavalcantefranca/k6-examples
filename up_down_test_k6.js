import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Em 30 segundos sobe para 20 vus
    { duration: '1m30s', target: 10 }, // Em 1m30s diminui para 10
    { duration: '20s', target: 0 }, // Em 20s ele zera
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
