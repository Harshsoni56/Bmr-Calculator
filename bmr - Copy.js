
function Bmr()
{
    var age=parseInt(document.getElementById('ages').value);
    var weight=parseInt(document.getElementById('weight').value);
    var heigh=parseInt(document.getElementById('height').value);
    let gende=document.getElementById('male').value;
    let gendes=document.getElementById('female').value;
function male(){


if(male=='male'){

    var calbmr=88.362 + (13.397 *weight) + (4.799 *heigh) - (5.677 *age );
    var calories=calbmr/1;
    
    document.getElementById('bmr').innerHTML="your bmr is="+calories+"in calories.";
}
else if(){

}
      var calbmr= 447.593 + (9.247 * weight) + (3.098 * heigh) - (4.330*age);

      document.getElementById('bmr').innerHTML="your bmr is="+calbmr;

}
  
};