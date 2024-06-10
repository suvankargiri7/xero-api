/**
 * @name Xero balance sheet module
 * @description this module is required for balance sheet data from XERO
 */

import axios from "axios";
import { Response, Request } from "express";

const balanceSheet = {
  getData: async (req: Request, res: Response) => {
    try {
      const response = await axios.get(
        `${process.env.XERO_HOST_URL}${process.env.XERO_BALANCESHEET_ENDPOINT}`
      );
      if (response.data) {
        res.json(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default balanceSheet;
