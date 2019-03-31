function theBeatlesPlay (musicians, instruments){
  var newArray = [];
  for (var i=0;i<=musicians.length-1; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts (facts){
  for (var i=0; i<facts.length; i++){
    facts[i] = `${facts[i]}!!!`
  }
return facts
}
function iLoveTheBeatles (num){
  var array = []
  for (i = 0; num >15;i++){
    array.push("I love the Beatles!")
  }
}
function iLoveTheBeatles (num){
  var array = []
  for (i = num; num <15;i++){
    array.push("I love the Beatles!")
  }
return array 
}