const emails = {
  tryAlive: 10,
  reignite: 10,
  maxiloss: 0,
  glucotrust: 0,
  beyond: 5,
  dentitox: 5,
  teaburn: 5,
  exipure: 5,
  javaBurn: 3,
};

function calculateSum() {
  let count = 0;
  for (let key in emails) {
    if (emails[key] >= 1) console.log(key);
    count += emails[key];
  }
  let result = Math.round(((count * 3) / 189) * 100);
  console.log(result + "%");
}

calculateSum(emails);
