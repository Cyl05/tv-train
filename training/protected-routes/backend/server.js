import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(session({
    secret: 'chi-tv-training',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}));

function isAuthenticated(req, res, next) {
    if (req.session.userId) return next();
    return res.status(401).json({message: "User not authenticated"});
}

const users = [];

app.get("/", (req, res) => {
    res.json({message: "Welcome to home page!"});
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const matchingUser = users.find((u) => (u.username === username));

    if (!matchingUser) return res.status(404).json({message: "User not found"});

    const isMatch = await bcrypt.compare(password, matchingUser.password);
    if (!isMatch) return res.status(401).json({message: "Invalid Credentials"});

    req.session.userId = matchingUser.id;

    return res.status(200).json({message: "Logged in successfully!"});
});

app.post("/register", async(req, res) => {
    const { username, password } = req.body;

    const matchingUser = users.find((u) => (u.username === username));
    if (matchingUser) return res.json(400).json({message: "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        username: username,
        password: hashedPassword
    };

    users.push(newUser);
    req.session.userId = newUser.id;

    res.json({message: "User registered and logged in successfully"});
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({message: "Logout Failed"});
        res.clearCookie('connect.sid');
        res.status(200).json({message: "Logged out successfully!"});
    });
});

app.get("/profile", isAuthenticated, (req, res) => {
    const { userId } = req.session;
    const matchingUser = users.find((u) => (u.id == userId));

    res.json({message: `Welcome to your profile, ${matchingUser.username}`});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});