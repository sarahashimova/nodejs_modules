const fs = require('fs');

fs.readFile('textim.txt','utf8', (err, data) => {
     if  (err) console.log(err);
     console.log(data);
     console.log('dosyayi okudum');
})

// fs.writeFile('example.txt','icindeki textler','utf-8',(err,data)=>{
//     if(err) console.log(err)
//     console.log('exaple dosyasini olushturdum')
// })

// fs.writeFile('nese.json','{"name":"Sara"}','utf8',(err,data) => {{
//     if(err) console.log(err)
//     console.log('file acildi')
// }})

// fs.appendFile('example.txt','\n 2cisetirimi elave etdim','utf8',(err)=>{
//     if(err) console.log(err)
//     console.log('yazimi elave etdim')
// })
// fs.unlink('nese.json', (err)=>{
//     if (err) console.log(err)
//     console.log('silinidi filem')
// })


//Home TASK (CREATE READ DELETE )

fs.writeFile('employees.json',"{name: 'Employee 1 Name, 'salary': '2000'}",'utf8',(err,data)=>{
    if(err) console.log(err)
    console.log('json filen elave etdim')
})

fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err)
    console.log(data);
    console.log('oxudum file')
})

fs.appendFile('employees.json','\n Teze yazilar elave etdim','utf8',(err)=>{
    if(err) console.log(err)
    console.log('bashqa birseylerde elave etdim')
})
