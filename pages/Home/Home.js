import Head from "next/head";
import NavFooter from "../NavFooter";
import AboveTheFold from "./AboveTheFold/AboveTheFold";
import IncomeStats from "./PlannedSolutions/IncomeStats";
import GameStats from "./PlannedSolutions/GameStats";
import ABTesting from "./PlannedSolutions/ABTesting";
import BetaTesting from "../BetaTesting/BetaTesting";
import "./Home.css";

export default () => (
  <NavFooter>
    <Head>
      <title>
        Hytale Data - The tools &amp; metrics you need to grow your Hytale
        server.
      </title>
    </Head>
    <div id="content">
      <AboveTheFold />
      <IncomeStats />
      <GameStats />
      <ABTesting />
      <BetaTesting noNav={true} />
    </div>
  </NavFooter>
);
