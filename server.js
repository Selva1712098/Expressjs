const express = require("express");
const app = express()

app.listen(3000, () => {
    console.log('Listening on Port 3000');

})


app.get('/',(req,res) => {
    res.json({message: "API is Working "})
})

app.get('/api/students', (req,res) => {
    res.json(students)
})

app.post('/api/students',(req,res) => {


    if(!req.body.email){
        res.status(400)
        return res.json({error : "email is required..."})
    }
    const user = {
        id : students.length + 1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
        
    }

    students.push(user)
    res.send("user")
})

app.put('/api/students',(req,res) => {
    const id : students.length + 1,
    const first_name : req.body.first_name,
    const last_name : req.body.last_name,
    const email : req.body.email

    const index = students.findIndex((student) => {
        return (student.id == id))
    })

    app.delete('/api/students',(req,res) => {
        let std =students[index]
        students.spilce(index,1)
        res.json(std)
    }else {
        res.status(404)
    }
    }
    ppppppppppppppppppppp
