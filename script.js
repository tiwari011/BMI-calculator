const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#result')

    if(height===''||height<0||isNaN(height)  ){
        results.innerHTML=`Please give a vaild height ${height}`

    }
    else if(weight===''||weight<0||isNaN(weight)  ){
        results.innerHTML=`Please give a vaild weight ${weight}`

    }
    else{
      const bmi=  (weight/((height)/100)**2).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi<=20){
            results.innerHTML=`<span>under weight-${bmi}</span>`
        }
        else if(bmi>20&&bmi<=25){
            results.innerHTML=`<span>normal weight-${bmi}</span>`
        }
        else{
            results.innerHTML=`<span>over weight-${bmi}</span>`
        }
    }
});