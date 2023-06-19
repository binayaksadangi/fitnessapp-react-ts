import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
//import comp from "../../../src/componets/comp"
//import comp from "@/components/comp"
//path helps to find the folder when we use @
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '@',replacement: path.resolve(__dirname, "src")}]
  }
})
