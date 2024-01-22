function firstRule(
  c1,
  c4,
  c5,
  c6,
  c7,
  c8,
  c10,
  c11,
  c15,
  c16,
  crule
) {
  if (
    c1 === 0 ||
    c4 === 0 ||
    c6 === 0 ||
    c7 === 0 ||
    c5 === 0 ||
    c8 === 0 ||
    c10 === 0 ||
    c11 === 0 ||
    c15 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c4, c5, c6, c7, c8, c10, c11, c15, c16);
  const result = minCf * crule;

  return result;
}
function secondRule(c1, c4, c6, c7, crule) {
  if (c1 === 0 || c4 === 0 || c6 === 0 || c7 === 0) {
    return 0;
  }
  const minCf = Math.min(c1, c4, c6, c7);
  const result = minCf * crule;

  return result;
}
function thirdRule(c1, c5, c6, c8, c10, c11, c15, crule) {
  if (
    c1 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c8 === 0 ||
    c10 === 0 ||
    c11 === 0 ||
    c15 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c5, c6, c8, c10, c11, c15);
  const result = minCf * crule;

  return result;
}
function fourthRule(c1, c4, c7, c10, c11, c15, c16, crule) {
  if (
    c1 === 0 ||
    c4 === 0 ||
    c7 === 0 ||
    c10 === 0 ||
    c11 === 0 ||
    c15 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c4, c7, c10, c11, c15, c16);
  const result = minCf * crule;

  return result;
}
function fifthRule(c1, c5, c8, c9, crule) {
  if (c1 === 0 || c5 === 0 || c8 === 0 || c9 === 0) {
    return 0;
  }
  const minCf = Math.min(c1, c5, c8, c9);
  const result = minCf * crule;

  return result;
}
function sixthRule(c1, c5, c8, c10, c11, c16, crule) {
  if (
    c1 === 0 ||
    c5 === 0 ||
    c8 === 0 ||
    c10 === 0 ||
    c11 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c5, c8, c10, c11, c16);
  const result = minCf * crule;

  return result;
}
function seventhRule(c1, c4, c5, c6, c7, c10, c11, c14, c16, crule) {
  if (
    c1 === 0 ||
    c4 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c7 === 0 ||
    c10 === 0 ||
    c11 === 0 ||
    c14 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c4, c5, c6, c7, c10, c11, c14, c16);
  const result = minCf * crule;

  return result;
}
function eighthRule(c1, c4, c5, c6, c7, c13, crule) {
  if (
    c1 === 0 ||
    c4 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c7 === 0 ||
    c13 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c4, c5, c6, c7, c13);
  const result = minCf * crule;

  return result;
}
function ninthRule(c1, c10, c11, c13, c16, crule) {
  if (c1 === 0 || c10 === 0 || c11 === 0 || c16 === 0 || c13 === 0) {
    return 0;
  }
  const minCf = Math.min(c1, c10, c11, c13, c16);
  const result = minCf * crule;

  return result;
}
function tenthRule(c1, c6, c7, c10, c11, c13, crule) {
  if (
    c1 === 0 ||
    c7 === 0 ||
    c10 === 0 ||
    c11 === 0 ||
    c6 === 0 ||
    c13 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c6, c7, c10, c11, c13);
  const result = minCf * crule;

  return result;
}
function eleventhRule(c1, c2, c3, c5, c6, c9, c11, c12, c15, crule) {
  if (
    c1 === 0 ||
    c2 === 0 ||
    c3 === 0 ||
    c11 === 0 ||
    c6 === 0 ||
    c5 === 0 ||
    c9 === 0 ||
    c12 === 0 ||
    c15 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c2, c3, c5, c6, c9, c11, c12, c15);
  const result = minCf * crule;

  return result;
}
function twelfthRule(c1, c2, c3, c5, c6, c9, crule) {
  if (
    c1 === 0 ||
    c2 === 0 ||
    c3 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c9 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c2, c3, c5, c6, c9);
  const result = minCf * crule;

  return result;
}
function thirteenthRule(c1, c3, c6, c9, c11, c12, c15, crule) {
  if (
    c1 === 0 ||
    c11 === 0 ||
    c3 === 0 ||
    c15 === 0 ||
    c6 === 0 ||
    c9 === 0 ||
    c12 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c3, c6, c9, c11, c12, c15);
  const result = minCf * crule;

  return result;
}
function fourteenthRule(c1, c2, c3, c11, c15, crule) {
  if (c1 === 0 || c11 === 0 || c3 === 0 || c15 === 0 || c2 === 0) {
    return 0;
  }
  const minCf = Math.min(c1, c2, c3, c11, c15);
  const result = minCf * crule;

  return result;
}
function fifteenthRule(c3, c5, c9, c12, c14, crule) {
  if (c3 === 0 || c5 === 0 || c9 === 0 || c12 === 0 || c14 === 0) {
    return 0;
  }
  const minCf = Math.min(c3, c5, c9, c12, c14);
  const result = minCf * crule;

  return result;
}
function sixteenthRule(c3, c5, c9, c12, crule) {
  if (c3 === 0 || c5 === 0 || c9 === 0 || c12 === 0) {
    return 0;
  }
  const minCf = Math.min(c3, c5, c9, c12);
  const result = minCf * crule;

  return result;
}
function seventeenthRule(c3, c5, c9, c14, crule) {
  if (c3 === 0 || c5 === 0 || c9 === 0 || c14 === 0) {
    return 0;
  }
  const minCf = Math.min(c3, c5, c9, c14);
  const result = minCf * crule;

  return result;
}
function eighteenthRule(c5, c9, c12, c14, crule) {
  if (c14 === 0 || c5 === 0 || c9 === 0 || c12 === 0) {
    return 0;
  }
  const minCf = Math.min(c5, c9, c12, c14);
  const result = minCf * crule;

  return result;
}
function nineteenthRule(c3, c9, c12, c14, crule) {
  if (c3 === 0 || c14 === 0 || c9 === 0 || c12 === 0) {
    return 0;
  }
  const minCf = Math.min(c3, c9, c12, c14);
  const result = minCf * crule;

  return result;
}
function twentiethRule(
  c1,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c11,
  c15,
  c16,
  crule
) {
  if (
    c1 === 0 ||
    c3 === 0 ||
    c4 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c7 === 0 ||
    c8 === 0 ||
    c11 === 0 ||
    c15 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c3, c4, c5, c6, c7, c8, c11, c15, c16);
  const result = minCf * crule;

  return result;
}
function twentyFirstRule(c1, c3, c5, c6, c11, c15, c16, crule) {
  if (
    c1 === 0 ||
    c3 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c11 === 0 ||
    c15 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c3, c5, c6, c11, c15, c16);
  const result = minCf * crule;

  return result;
}
function twentySecondRule(c1, c4, c5, c6, c7, c8, c11, c16, crule) {
  if (
    c1 === 0 ||
    c4 === 0 ||
    c5 === 0 ||
    c6 === 0 ||
    c7 === 0 ||
    c8 === 0 ||
    c11 === 0 ||
    c16 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c1, c4, c5, c6, c7, c8, c11, c16);
  const result = minCf * crule;

  return result;
}
function twentyThirdRule(c1, c3, c6, crule) {
  if (c1 === 0 || c3 === 0 || c6 === 0) {
    return 0;
  }
  const minCf = Math.min(c1, c3, c6);
  const result = minCf * crule;

  return result;
}
function twentyFourthRule(c1, c3, c6, c15, c16, crule) {
  if (c1 === 0 || c3 === 0 || c6 === 0 || c15 === 0 || c16 === 0) {
    return 0;
  }
  const minCf = Math.min(c1, c3, c6, c15, c16);
  const result = minCf * crule;

  return result;
}
function twentyFifthRule(c10, c11, c17, c18, c19, c20, crule) {
  if (
    c10 === 0 ||
    c11 === 0 ||
    c17 === 0 ||
    c18 === 0 ||
    c19 === 0 ||
    c20 === 0
  ) {
    return 0;
  }
  const minCf = Math.min(c10, c11, c17, c18, c19, c20);
  const result = minCf * crule;

  return result;
}
function twentySixthRule(c10, c17, c18, c19, crule) {
  if (c10 === 0 || c17 === 0 || c18 === 0 || c19 === 0) {
    return 0;
  }
  const minCf = Math.min(c10, c17, c18, c19);
  const result = minCf * crule;

  return result;
}
function twentySeventhRule(c6, c10, c11, c17, crule) {
  if (c6 === 0 || c10 === 0 || c17 === 0 || c11 === 0) {
    return 0;
  }
  const minCf = Math.min(c6, c10, c11, c17);
  const result = minCf * crule;

  return result;
}
function CFCombine(CFold, CFnew) {
  const CFcombine = CFold + CFnew * (1 - CFold);

  return CFcombine;
}

const sample = {
  c1: 0.5,
  c2: 0.4,
  c3: 0.7,
  c4: 0.6,
  c5: 0.7,
  c6: 0.6,
  c7: 0.7,
  c8: 0,
  c9: 0,
  c10: 0.7,
  c11: 0.5,
  c12: 0.7,
  c13: 0.6,
  c14: 0.8,
  c15: 0.5,
  c16: 0.7,
  c17: 0.6,
  c18: 0.6,
  c19: 0.6,
  c20: 0.8,
};
function hipotesisOne(indicatorValue) {
  const {
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
  } = indicatorValue;
  const ruleOne = firstRule(
    c1,
    c4,
    c5,
    c6,
    c7,
    c8,
    c10,
    c11,
    c15,
    c16,
    1
  );

  const ruleTwo = secondRule(c1, c4, c5, c6, c7, 0.7);

  const ruleThree = thirdRule(c1, c5, c6, c8, c10, c11, c15, 0.9);

  const ruleFour = fourthRule(c1, c4, c7, c10, c11, c15, c16, 0.6);

  const ruleFive = fifthRule(c1, c5, c8, c10, 0.5);

  const ruleSix = sixthRule(c1, c5, c6, c8, c10, c11, c16, 0.8);

  const H01 = [
    ruleOne,
    ruleTwo,
    ruleThree,
    ruleFour,
    ruleFive,
    ruleSix,
  ];
  let CFold = CFCombine(ruleOne, ruleTwo);

  CFold = CFCombine(CFold, ruleThree);

  CFold = CFCombine(CFold, ruleFour);

  CFold = CFCombine(CFold, ruleFive);

  CFold = CFCombine(CFold, ruleSix);

  console.log('Hipotesa: ', CFold);
}

function hipotesisTwo(indicatorValue) {
  const {
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
  } = indicatorValue;

  const ruleSeven = seventhRule(
    c1,
    c4,
    c5,
    c6,
    c7,
    c10,
    c11,
    c14,
    c16,
    1
  );

  const ruleEight = eighthRule(c1, c4, c5, c6, c7, c13, 0.8);

  const ruleNine = ninthRule(c1, c10, c11, c13, c16, 0.5);

  const ruleTen = tenthRule(c1, c6, c7, c10, c11, c13, 0.7);

  const H02 = [ruleSeven, ruleEight, ruleNine, ruleTen];

  let CFold = CFCombine(ruleSeven, ruleEight);

  CFold = CFCombine(CFold, ruleNine);
  CFold = CFCombine(CFold, ruleTen);
  console.log(CFold);
}

function hipotesisThree(indicatorValue) {
  const {
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
  } = indicatorValue;

  const ruleEleven = eleventhRule(
    c1,
    c2,
    c3,
    c5,
    c6,
    c9,
    c11,
    c12,
    c15,
    1
  );

  const ruleTwelve = twelfthRule(c1, c2, c3, c5, c6, c9, 0.7);

  const ruleThirteen = thirteenthRule(
    c1,
    c3,
    c6,
    c9,
    c11,
    c12,
    c15,
    0.8
  );

  const ruleFourteen = fourteenthRule(c1, c2, c3, c11, c15, 0.5);

  const H03 = [ruleEleven, ruleTwelve, ruleThirteen, ruleFourteen];

  let CFold = CFCombine(ruleEleven, ruleTwelve);

  CFold = CFCombine(CFold, ruleThirteen);

  CFold = CFCombine(CFold, ruleFourteen);

  console.log(CFold);
}

function hipotesisFour(indicatorValue) {
  const {
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
  } = indicatorValue;
}
hipotesisThree(sample);