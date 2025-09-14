import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import SupportedBrowsers from "vite-plugin-browserslist-useragent";
import viteTsconfigPaths from "vite-tsconfig-paths";
import browserslistToEsbuild from "browserslist-to-esbuild";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  const config = {
    base: "/",
    build: {
      target: browserslistToEsbuild([
        "last 2 versions",
        "> 1%",
        "not IE <= 11",
      ]),
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      SupportedBrowsers({
        allowHigherVersions: true,
      }),
    ],
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      port: parseInt(env.PORT, 10) || 3000,
    },
    preview: {
      port: parseInt(env.PORT, 10) || 3000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
  return config;
});
