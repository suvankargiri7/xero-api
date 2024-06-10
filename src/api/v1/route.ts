/**
 * @name v1 Router module
 * @description Import required modules
 */
import { Router } from "express";
import balanceSheet from "./components/balance-sheet";

const v1Routes = Router();

v1Routes.get("/balance-sheet", balanceSheet.getData);

export default v1Routes;
