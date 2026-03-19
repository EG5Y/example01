import type { NextConfig } from "next";
import withRspack from "next-rspack";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/example01/",
  /* config options here */
};

export default withRspack(nextConfig);
