import Image from "next/image";
import LoginPage from "./loginPage";
import StockPage from "./StockPage/page";
import AddItem from './AddItem/page'


export default function Home() {
  return (
    <>
      {/* <LoginPage /> */}
      <StockPage/>
      {/*<AddItem/>*/}
    </>
  );
}
