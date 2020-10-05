btnGo.onclick=function(){
  let homePrinc = Number(inptPrincipleh.value)
  let homeInt = Number(inptMonthinth.value)/12
  let homeMonths = Number(inptyears.value)*12

    function homepayment(P, R, n) {
      return (P * (R * ((1 + R)**n)) / (((1 + R)**n)-1)) 
      lblpayment.textContent = "  A home loan for $${P} over ${n} months at ${n}% interest would have a monthly payment of $542.00the lsit."
      }
  
  let monthlyhomepayment = homepayment(homePrinc, homeInt, homeMonths)
  lblhome.hidden = false
  lblhome.value =   ("A home loan for" + homePrinc +"over" + homeMonths + " months at" + homeInt + "interest would have a monthly payment of" + monthlyhomepayment)
}

btnNewhome.onclick=function(){
  homePrinc.value = ""
  homeInt.value = ""
  homeMonths.value = ""
  lblhome.value = ""
}