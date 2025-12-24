import { db } from "../configs/db.js";

export const Register = async (req, res) => {
    try {
      const { userName, email } = req.body;
  
      // ✅ PARAMETERIZED QUERY
      const query = `SELECT userName FROM students WHERE userName = ?`;
  
      const checkUser = await db.get(query, [userName]);
  
      if (checkUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // INSERT user
      await db.run(
        `INSERT INTO students (userName, email) VALUES (?, ?)`,
        [userName, email]
      );
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Unable To Register User");
    }
  };
  