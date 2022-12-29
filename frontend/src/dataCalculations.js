const findTotal = (dataArray, key) => {
  const result = dataArray.reduce((total, obj) => parseInt(obj[key]) + total, 0)
  return result;
}

const findMaxRepeatedValue = (array, key) => {
  const valueCounts = new Map();

  array.forEach(obj => {
    const value = obj[key];
    if (!valueCounts.has(value)) {
      valueCounts.set(value, 1);
    } else {
      valueCounts.set(value, valueCounts.get(value) + 1);
    }
  });

  const maxCount = Math.max(...valueCounts.values());

  for (const [value, count] of valueCounts.entries()) {
    if (count === maxCount) {
      return value;
    }
  }
}

const dateFormatter = (dateString) => {
  const year = dateString.substring(2, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  return `${day}/${month}/${year}`
}

// const array = [
//   { date: '20221210', activeUsers: '3', city: 'Guwahati', session: '3' },
//   { date: '20221211', activeUsers: '1', city: 'Delhi', session: '1' },
//   { date: '20221211', activeUsers: '2', city: 'Delhi', session: '4' },
//   { date: '20221212', activeUsers: '1', city: 'Bengaluru', session: '3' },
//   { date: '20221212', activeUsers: '4', city: 'Chandigarh', session: '6' },
//   { date: '20221213', activeUsers: '1', city: 'Chandigarh', session: '1' },
//   { date: '20221213', activeUsers: '3', city: 'Kochi', session: '4' },
//   { date: '20221213', activeUsers: '5', city: 'Guwahati', session: '7' },
//   { date: '20221214', activeUsers: '1', city: 'Delhi', session: '1' },
//   { date: '20221215', activeUsers: '1', city: 'Guwahati', session: '2' }
// ];

const aggregateData = (array, key1, key2) => {

  const selected = array.map(obj => ({ [key1]: obj[key1], [key2]: parseInt(obj[key2]) }));

  const newData = selected.reduce((acc, obj) => {
    acc[obj[key1]] = (acc[obj[key1]] || 0) + obj[key2];
    return acc;
  }, {});

  const result = Object.entries(newData).map(([key, value]) => ({ [key1]: key1 === 'date' ? dateFormatter(key) : key, [key2]: value }));
  console.log(result)
  return result;
}

module.exports = {
  findTotal,
  findMaxRepeatedValue,
  dateFormatter,
  aggregateData
}
