const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

app.get("/getUser", (req, res) => {
    const user = {
        username: "SomeUser",
        password: "Password123",
        email: "someuser@example.com",
        courses: {
            course: {
                courseId: "CSE 0001",
                courseName: "course",
                startDate: "01/16/23",
                endDate: "05/12/23"
            },
            course1: {
                courseId: "CSE 0002",
                courseName: "course1",
                startDate: "01/16/23",
                endDate: "05/12/23"
            },
            course2: {
                courseId: "CSE 0003",
                courseName: "course2",
                startDate: "01/16/23",
                endDate: "05/12/23"
            }
        }
    }

    res.status(200).send(user);
});

app.post("/addUser", (req, res) => {
    const {user} = req.body;

    if (!user || user == undefined) {
        res.status(400).send("Missing user");
    } else {
        res.status(201).send(`Added user ${user.username} successfully`);
    }
});