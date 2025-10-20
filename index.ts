import express, { Request, Response } from "express";
import { PrismaClient } from "./src/generated/prisma";;

const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

// ルートパスへのリクエスト
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

// リッスンするポートの設定
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 本来は登録時のHTTPメソッドはPOSTを使うが、簡易化のためGETで定義
app.get("/create-user", async (req, res) => {
  const { email, name, age } = req.query;

  const newUser = await prisma.user.create({
    data: {
      email: String(email),
      name: String(name),
      age: Number(age),
    },
  });
  res.send(`User created: ${newUser.name}`);
});
