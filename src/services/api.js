
const API_DELAY = 800;

function mockApiRequest(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, API_DELAY);
  });
}

export default mockApiRequest;
