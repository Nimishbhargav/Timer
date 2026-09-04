const s=new Date("2025-08-17T11:09:00");
const cur=[["years","Years"],["months","Months"],["weeks","Weeks"],["days","Days"],["hours","Hours"],["minutes","Minutes"],["seconds","Seconds"]];
const tot=[["totalWeeks","Total Weeks"],["totalDays","Total Days"],["totalHours","Total Hours"],["totalMinutes","Total Minutes"],["totalSeconds","Total Seconds"]];
function mk(id,l,p){p.innerHTML+=`<div class=box><span id=${id} class=num>0</span><small>${l}</small></div>`}
cur.forEach(x=>mk(x[0],x[1],current));tot.forEach(x=>mk(x[0],x[1],total));
function setv(id,v){let e=document.getElementById(id);if(e.textContent!=v){e.textContent=v;e.classList.remove("flip");void e.offsetWidth;e.classList.add("flip");}}
function u(){let n=new Date();let y=n.getFullYear()-s.getFullYear(),m=n.getMonth()-s.getMonth(),d=n.getDate()-s.getDate();if(d<0){m--;d+=new Date(n.getFullYear(),n.getMonth(),0).getDate()}if(m<0){y--;m+=12}let w=Math.floor(d/7),rd=d%7;let diff=n-s,ts=Math.floor(diff/1000),tm=Math.floor(ts/60),th=Math.floor(tm/60),td=Math.floor(th/24),tw=Math.floor(td/7),h=Math.floor(ts%86400/3600),mi=Math.floor(ts%3600/60),se=ts%60;
[["years",y],["months",m],["weeks",w],["days",rd],["hours",h],["minutes",mi],["seconds",se],["totalWeeks",tw],["totalDays",td],["totalHours",th],["totalMinutes",tm],["totalSeconds",ts]].forEach(x=>setv(x[0],x[1].toLocaleString()));}
u();setInterval(u,1000);