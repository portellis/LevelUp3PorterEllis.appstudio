btnEnter.onclick=function(){
  let carPrinc = Number(inptPrinciplec.value)
  let carInt = Number(inptMonthintc.value)
  let carMonths = Number(inptmonthsc.value)

    function carpayment(P, R, n) {
      return (P * (R * ((1 + R)**n)) / (((1 + R)**n)-1)) 
      lblpayment.textContent = "  A car loan for $${P} over ${n} months at ${n}% interest would have a monthly payment of $542.00the lsit."
      }
  
  let monthlycarpayment = carpayment(carPrinc, carInt, carMonths)
  lblcar.hidden = false
  lblcar.value =   ("A car loan for" + carPrinc +"over" + carMonths + " months at" + carInt + "interest would have a monthly payment of" + monthlycarpayment)
}

btnNewcar.onclick=function(){
  carPrinc.value = ""
  carInt.value = ""
  carMonths.value = ""
  lblcar.value = ""
}
