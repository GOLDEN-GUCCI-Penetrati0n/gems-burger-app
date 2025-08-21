
const express = require("express");
const app = express();
app.use(express.json());
app.get("/api/user/:id", (req,res)=>res.json({coins:500,energy:1000}));
app.get("/api/leaders",(req,res)=>res.json([{name:"Alice",coins:1500},{name:"Bob",coins:1200},{name:"Charlie",coins:800}]));
app.get("/api/referrals/:id",(req,res)=>res.json({users:[{name:"ref1",profit:100},{name:"ref2",profit:50}],totalProfit:150}));
app.listen(3000,()=>console.log("Backend running on 3000"));
