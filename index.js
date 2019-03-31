function theBeatlesPlay (musicians, instruments){
  var newArray = [];
  for (var i=0;i<=musicians.length-1; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}.`)
  }
  return newArray
}
