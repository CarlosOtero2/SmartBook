/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MODE: string
    // Agrega otras variables de entorno que necesites
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }