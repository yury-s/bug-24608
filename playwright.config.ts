import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 1000,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'sleep 10 && npx http-server -p 6006',
    port: 6006,
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // even though there is a 2 minute timeout here, test will fail after 30s (default test timeout)
  }
});
