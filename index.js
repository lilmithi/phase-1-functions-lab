const conv = 264;
const street = 42;
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - street);
}
function distanceFromHqInFeet(feet) {
  return Math.abs((feet - street) * conv);
}
function distanceTravelledInFeet(foot1, foot2) {
  return Math.abs((foot1 - foot2) * conv);
}
function calculatesFarePrice(start, destination) {
  let dist = Math.abs(start - destination);
  let distInFeet = dist * conv;
  if (dist === 1) {
    return 0;
  } else if (distInFeet >= 400 && distInFeet <= 2000) {
    return (distInFeet - 400) * 0.02;
  } else if (distInFeet > 2500) {
    return "cannot travel that far";
  } else if (distInFeet > 2000) {
    return 25;
  }
}
