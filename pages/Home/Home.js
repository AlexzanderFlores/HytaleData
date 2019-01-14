import Head from "next/head";
import MainNavigation from "../Navigation/MainNavigation";
import AboveTheFold from "./AboveTheFold/AboveTheFold";
import IncomeStats from "./PlannedSolutions/IncomeStats";
import GameStats from "./PlannedSolutions/GameStats";
import ABTesting from "./PlannedSolutions/ABTesting";
import Footer from "../Footer/Footer";
import "./Home.css";

export default () => (
  <>
    <Head>
      <title>
        Hytale Data - The tools &amp; metrics you need to grow your Hytale
        server.
      </title>
    </Head>
    <MainNavigation />
    <div id="content">
      <AboveTheFold />
      <IncomeStats />
      <GameStats />
      <ABTesting />
    </div>
    <Footer />
  </>
);
