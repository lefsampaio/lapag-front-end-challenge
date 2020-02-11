import { professionalMocks, servicesMocks, clientsMocks } from "./mocks";

const apiMocks = () =>{
 const returnProfessionals = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(professionalMocks);
    }, 100);
  });

 const returnServices = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(servicesMocks);
    }, 200);
  });

 const returnClients = clientName => {
  if (!clientName) {
    clientName = "";
  }
  const filteredClients = clientsMocks.filter(e =>
    e.name.toUpperCase().includes(clientName.toUpperCase())
  );
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(filteredClients);
    }, 300);
  });
};
}
export default apiMocks;