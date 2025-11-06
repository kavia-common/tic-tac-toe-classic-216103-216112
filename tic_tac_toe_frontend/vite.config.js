import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');

  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    preview: {
      port: 3000,
      host: '0.0.0.0'
    },
    define: {
      // Expose only REACT_APP_* vars as import.meta.env.REACT_APP_*
      'import.meta.env.REACT_APP_API_BASE': JSON.stringify(env.REACT_APP_API_BASE || ''),
      'import.meta.env.REACT_APP_BACKEND_URL': JSON.stringify(env.REACT_APP_BACKEND_URL || ''),
      'import.meta.env.REACT_APP_FRONTEND_URL': JSON.stringify(env.REACT_APP_FRONTEND_URL || ''),
      'import.meta.env.REACT_APP_WS_URL': JSON.stringify(env.REACT_APP_WS_URL || ''),
      'import.meta.env.REACT_APP_NODE_ENV': JSON.stringify(env.REACT_APP_NODE_ENV || ''),
      'import.meta.env.REACT_APP_NEXT_TELEMETRY_DISABLED': JSON.stringify(env.REACT_APP_NEXT_TELEMETRY_DISABLED || ''),
      'import.meta.env.REACT_APP_ENABLE_SOURCE_MAPS': JSON.stringify(env.REACT_APP_ENABLE_SOURCE_MAPS || ''),
      'import.meta.env.REACT_APP_PORT': JSON.stringify(env.REACT_APP_PORT || ''),
      'import.meta.env.REACT_APP_TRUST_PROXY': JSON.stringify(env.REACT_APP_TRUST_PROXY || ''),
      'import.meta.env.REACT_APP_LOG_LEVEL': JSON.stringify(env.REACT_APP_LOG_LEVEL || ''),
      'import.meta.env.REACT_APP_HEALTHCHECK_PATH': JSON.stringify(env.REACT_APP_HEALTHCHECK_PATH || ''),
      'import.meta.env.REACT_APP_FEATURE_FLAGS': JSON.stringify(env.REACT_APP_FEATURE_FLAGS || ''),
      'import.meta.env.REACT_APP_EXPERIMENTS_ENABLED': JSON.stringify(env.REACT_APP_EXPERIMENTS_ENABLED || '')
    },
    envPrefix: 'REACT_APP_'
  };
});
