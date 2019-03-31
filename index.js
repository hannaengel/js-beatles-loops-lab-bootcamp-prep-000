function theBeatlesPlay (musicians, instruments){
  newArray= []
  for (i=0;i<=musicians.length-1; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}.`)
}
}
return newArray
}
