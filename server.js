import express from "express";
import { join } from "path";

const app = express();

app.use(express.static(join(import.meta.dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(join(import.meta.dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor en puerto ${PORT}`);
});
