function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!"
  } 
  else{
    var x = currentLine[0]
    currentLine.shift()
    return `Currently serving ${x}.`
  }
}