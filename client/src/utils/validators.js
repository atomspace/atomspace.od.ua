export default {
  phone: (val) => val.match(/^[0-9]{10}$/),
  email: (val) => val.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/),
};