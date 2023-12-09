exports.err404 = (req,res)=>{
    res.status(404).render('404', {title: "Page Not Found-404",path:req.path})
}