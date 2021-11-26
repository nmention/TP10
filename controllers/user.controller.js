exports.accessAll = (req,res) =>{
    res.status(200).send({message:"Contenu Public."})
}
exports.accessUser = (req,res)=>{
    res.status(200).send({message: "Contenu Utilisateur"})
}