const Package = require("../models/Pakages.model");


exports.allPackage = async (req , res)=>{
     const allPackages = await Package.find()

     console.log(allPackages);

    res.status(200).send(allPackages);
}

exports.addPackage = async (req , res) => {

    try {
        const newPackage = new Package({
            name: req.body.name,
            discription: req.body.discription,
            amount: req.body.amount,
            interval: req.body.interval,
        });

        await newPackage.save();

        res.redirect("/all_packages");

    } catch (error) {
        console.log(error);
    }

}