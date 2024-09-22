import Image from "next/image";
import LoginPage from "./loginPage";
import StockPage from "./StockPage/page";
import AddItem from './AddItem/page';
import OutStockPage from "./OutStockPage/page";
import InStockPage from "./InStockPage/page";

dotenv.config();

export default function Home() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <StockPage/> */}
      <AddItem/>
      {/* <OutStockPage/> */}
      {/* <InStockPage/> */}
    </>
  );
}
