

function ok() {
    

let Name=document.getElementById('input1').value;
let name= Name.toLowerCase()
// console.log(name);
let result=[];
if (name=="sheebu" || name=='shibu' || name=='tahir') {result=["Searching....................!!!..Bhkkk Sale PANAUTY"


]
    
}else  if(name=="faiz"){result=" Searching....................!!!..Sirf or Sirf Dawate Khane K Records hai..."}
else if (name=="minhaj"){result="Searching....................!!!..Yhaa Chey Chkke Khane Walo k Records nhee likhe jate "}
else if (name=="asad"){result=["Searching....................!!!..Tum Pehle J/S pr dhyaan do"]}
else if (name=="intezaar" || name=='intezar'){result=['Searching....................!!!..Right Arm full toss bowler']}
else if (name=='zain'){result=['bumarah with speed 40km/hr']}
else if(name=='rashid'){result=['abba nhee manege']}
else if (name=='osama'){result=['6 ball pr 6 run to mar dete km se km']}
else if (name=='idrees' || name=='edris' || name=='edrees' || name=='idris'){result=['buddhon k records nhee milege yhaa']}
else{result=["abe jahil middle name likh bss"]}

document.getElementById('answer').innerHTML=result;

}


