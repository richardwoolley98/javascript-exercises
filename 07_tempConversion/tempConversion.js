const ftoc = function(temp) {
  const c = (temp - 32) * (5/9);
  return parseFloat(c.toFixed(1));
};

const ctof = function(temp) {
 const f = ((9/5) * temp) + 32;
 return parseFloat(f.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};