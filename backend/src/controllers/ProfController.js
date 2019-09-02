const axios = require('axios')
const Prof = require('../models/profile')

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

         const loggedProf = await Prof.findById(user);
        console.log(loggedProf);
        // const users = await Prof.find({
        //     $and: [
        //         { _id: { $ne: user } },
        //         { _id: { $ne: loggedProf.name } },
        //     ],
        // })
        // return res.json(users);
    },

    
    async store(req, res) {

        const { username } = req.body;

        const userExists = await Prof.findOne({ user: username });
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name } = response.data;

        const prof = await Prof.create({
            name,
            user: username,
        })


        return res.json(prof);
    }

    // async show(req, res) {
    //     const user = await Prof.findById(req.params.id)

    //     return res.json(user);
    // }
};