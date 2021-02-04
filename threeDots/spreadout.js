const ages = [12,14,16,13,17];
const ages2 = [15, 16,12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2);
console.log(allAges);
const allAges2 = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges2)

const allAges3 = [...ages, ...ages2, 50, ...ages3]
console.log(allAges3)

const maximum = [230, 400, 440]
const maximumValue = Math.max(...maximum)
console.log(maximumValue);