const student=[
    {id:21,name:"sabana"},
    {id:22,name:'vobita'},
    {id:23,name:'dipjol'},
]
const names=student.map(s=>s.name);
const id=student.map(s=>s.id);
const ids=student.filter(s=>s.id>21)
const idn=student.find(s=>s.id>21)
console.log(idn);
