const getBreackRules = (array, id) => {
  const getTime = array.map((item) => ({
    ...item,
    from: Date.parse(item.from),
    to: Date.parse(item.to),
    interval: array
      .filter((el) => item.employee_id !== el.employee_id)
      .filter(({ from, to }) => from <= item.to && item.to <= to).length,
  }));
  const doctorNum = getTime.find((item) => item.id === id);
  return doctorNum.interval < 3 ? 'danger' : null;
};

const sortName = (array) => {
  const fullName = [];
  const newNameArr = [];
  array.forEach(({ lastName }) => fullName.push(lastName));
  fullName.sort();
  fullName.forEach((item) => {
    newNameArr.push(array.find(({ lastName }) => lastName === item));
  });
  return newNameArr;
};

export { getBreackRules, sortName };
