import type { NextConfig } from "next";
import withRspack from "next-rspack";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
};

export default withRspack(nextConfig);
