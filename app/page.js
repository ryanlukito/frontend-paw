"use client";

import StockPage from "./StockPage/page";
import dotenv from "dotenv";

dotenv.config();

export default function Home() {
  return (
    <>
      <StockPage />
    </>
  );
}
