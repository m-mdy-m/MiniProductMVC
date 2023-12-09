exports.getProducts =  (req,res)=>{
    res.render('products', {title : "products"})
}
exports.postProducts =(req,res)=>{
    res.redirect('/')
}