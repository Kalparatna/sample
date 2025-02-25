import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { mortgageCalculatorSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/users", async (req, res) => {
    try {
      const data = insertUserSchema.parse(req.body);
      const user = await storage.createUser(data);
      res.json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data" });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/calculate", async (req, res) => {
    try {
      const data = mortgageCalculatorSchema.parse(req.body);
      // Store calculation if needed
      res.json({ success: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid calculation data" });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
