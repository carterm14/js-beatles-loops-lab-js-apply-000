// add solution here
function theBeatlesPlay(musicians, instruments) {
  const output = [];
  for (let counter = 0; counter < musicians.length; counter++){
    output.push(musician[counter] + " plays " + instruments[0])
  }
  return output
}

function johnLennonFacts(facts) {
  let counter = 0
  while(counter < facts.length) {
    facts[counter] += "!!!"
    counter++
  }
}

function iLoveTheBeatles(num) {
  let output = []
  do {
    output.push("I love the Beatles!")
    output++
  } while(num < 15)
  return output
}