// vamos exportar todo nossocontroler Home
exports.paginaInicial = (req, res)=>{
    res.render('index')
}

/// vamos exportar nosso controller home tratar post
exports.recebePost = (req, res) =>{
    res.send("Post enviado")
}