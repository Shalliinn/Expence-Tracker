const Expenseuser=require('../models/expenseuser')


exports.postexpense=(req,res,next)=>{
    const expence=req.body.expence
    const description=req.body.description
    const category =req.body.category
    Expenseuser.create({
        expence:expence,
        description:description,
        category:category
    })
    .then((data)=>{
        res.json(data)
    }).catch(err=>console.log(err))
}

exports.getexpense=(req,res,next)=>{
    Expenseuser.findAll()
    .then((exp)=>{
     
        res.status(200).json({Allexp:exp})
     })
.catch (error=>{
    console.log(error)
})
 }
 
 exports.deleteexpense=(req,res,next)=>{
   const Eid=req.params.id;
   Expenseuser.destroy({where: {id:Eid}})
   .then((data)=>{
    res.sendStatus(200)
   })
.catch(err=>console.log(err))
}



exports.postEditexpense = (req, res, next) => {
    const id = req.params.id;
    Expenseuser.findByPk(id)
    .then(exp=>{ 
        exp.expence=req.body.expence
        exp.description=req.body.description
        exp.category=  req.body.category
      return  exp.save();
  })
  .then(result=>{
    console.log("updated product");
    res.json(result)
  })
}


// exports.getEditexpence = (req, res, next) => {
//     const prodId = req.params.id;
//     console.log(prodId,'line 39');
//     Expenceuser.findByPk(prodId)
//     .then((exp)=>{
//         console.log(exp);
//         res.json(exp)
//         res.redirect('/edit-expense')
//      })
// .catch (error=>{
//     console.log(error)
// })
//   };


let product=[]
