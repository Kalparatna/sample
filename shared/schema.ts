import { pgTable, text, serial, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const mortgageCalculations = pgTable("mortgage_calculations", {
  id: serial("id").primaryKey(),
  homePrice: numeric("home_price").notNull(),
  downPayment: numeric("down_payment").notNull(),
  loanTerm: numeric("loan_term").notNull(),
  interestRate: numeric("interest_rate").notNull(),
  propertyTax: numeric("property_tax"),
  insurance: numeric("insurance"),
  zipCode: text("zip_code"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const mortgageCalculatorSchema = createInsertSchema(mortgageCalculations).pick({
  homePrice: true,
  downPayment: true,
  loanTerm: true,
  interestRate: true,
  propertyTax: true,
  insurance: true,
  zipCode: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type MortgageCalculation = typeof mortgageCalculations.$inferSelect;
export type InsertMortgageCalculation = z.infer<typeof mortgageCalculatorSchema>;
