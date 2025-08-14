import express from "express";
import { join } from "path";

const app = express();

// Servir la carpeta dist
app.use(express.static(join(import.meta.dirname, "dist")));

// Manejar rutas de SPA
app.get("*", (req, res) => {
  res.sendFile(join(import.meta.dirname, "dist", "index.html"));
});

// Puerto que asigna Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor en puerto ${PORT}`);
});
