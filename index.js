const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: false }));

app.get('/siswa',(request,response)=>{
    response.end("menampilkan siswa");
})

app.get('/siswa/:nama',(request,response)=>{
    
    let namaSiswa = request.params.nama;
    response.end("menampilkan siswa dengan nama : " + namaSiswa);
})

app.post('/siswa',(request,response)=>{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("siswa baru! nama : " + namaSiswa + ",alamat : " + alamatSiswa);
}) 

app.delete('/siswa/:nama',(request,response)=>{
    let namaSiswa = request.params.nama;

    response.end("Siswa bernama " + namaSiswa + "akan dihapus dari sistem!");
})

app.put('/siswa/:id',(request,response)=>{
    let id = request.params.id;
    let namaSiswa = request.params.nama;
    let alamatSiswa = request.params.alamat;

    response.end("Siswa dengan id " + id + " telah terupdate");
})
app.listen('8080',(e)=>{
    console.log(e)
});
