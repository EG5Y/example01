import type { NextConfig } from "next";
import withRspack from "next-rspack";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "https://eg5y.github.io/example01/",
  /* config options here */
};

export default withRspack(nextConfig);
