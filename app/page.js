import Image from "next/image";
import LoginPage from "./loginPage";
import StockPage from "./StockPage/page";
import AddItem from "./AddItem/page";
import dotenv from "dotenv";

dotenv.config();

export default function Home() {
  return (
    <>
      {/* <LoginPage /> */}
      <StockPage/>
      {/*<AddItem/>*/}
    </>
  );
}
