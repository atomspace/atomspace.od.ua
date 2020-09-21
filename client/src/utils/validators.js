export default {
  phone: (val) => val.match(/^[0-9]{12}$/),
  email: (val) => val.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/),
  birth: (val) => {
    const [y, m, d] = val.split("-");
    let result = val;
    if (y.length === 4) {
      result = [d, m, y].join("-");
    }
    return /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/i.test(result);
  },
};
