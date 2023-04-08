const userDb = require('../model/userSchema')

const user = {
    register: (req, res) => {
        const { name, phone_no, email, city } = req.body;
        if (!name || !phone_no || !email || !city) {
            res.status(400).json({ error: "Fill All Fields" });
        } else {
            const person = new userDb({
                name: name,
                phone_no: phone_no,
                email: email,
                city: city
            })
            person.save().then(() => {
                console.log("data Added");
                res.status(200).json({ success: "User added successfully" });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error: "Internal Server Error" });
            });
        }
    },
    getuser:(req, res) => {
      userDb.find({})
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ error: "Internal Server Error" });
            });
    },
    deleteuser: (req, res) => {
        const id  = req.params.id;
        userDb.deleteOne({ _id: id }).then(() => {
            res.json(`deleted ${id}`)
                 }).catch(error => {
                res.status(500).json({ error: 'Failed to delete user' })
            })

    },
     edituser: (req, res) => {
        const id = req.params.id;
        const { name, phone_no, email, city } = req.body;

        // Check if required fields are provided
        if (!name || !phone_no || !email || !city) {
            res.status(400).json({ error: "Fill All Fields" });
        } else {
            // Find and update the user by id
            userDb.findByIdAndUpdate(id, { name, phone_no, email, city }, { new: true })
                .then(updatedUser => {
                    if (!updatedUser) {
                        res.status(404).json({ error: "User not found" });
                    } else {
                        res.status(200).json({ success: "User updated successfully", user: updatedUser });
                    }
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({ error: "Internal Server Error" });
                });
        }
    }
};

module.exports = user;
