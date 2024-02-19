const express=require("express");
const router=express.Router();
const {loginUser,registerUser,getAllUsers,getUserById,updateUser,forgetPassword,deleteUser}=require("../controllers/userController");


//-------- configure all apis ----------
router.route("/").get(getAllUsers).post(registerUser);
router.post("/login",loginUser);
router.post("/reset/:email",forgetPassword);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports=router;