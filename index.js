function takeANumber(line,name){
  line.push(name)
  var x = line.length + 1
  return `Welcome, ${name}. You are number ${x} in line.`
}