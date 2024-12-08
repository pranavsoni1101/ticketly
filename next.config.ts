import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "esnext"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext",
    "allowSyntheticDefaultImports": true,
    "incremental": true,
    "customConditions": ["source"],
    "plugins": [{ "name": "next" }],
    "paths": {
      "@chakra-ui/react": ["../../packages/react/src"]
    }
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
}

export default nextConfig;
