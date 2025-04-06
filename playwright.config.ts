import { defineConfig, devices } from '@playwright/test';

export const setupDir = 'playwright/.setup';
export const setupFile = `${setupDir}/user.json`;

export default defineConfig({
  testDir: './tests',
  //Define default timeout for all tests
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  //Run tests in parallel
  fullyParallel: true,
  workers: 4,
  //Retries for failed tests
  retries: 1,
  //Report test results
  reporter: [['html', { open: 'on-failure' }]],
  use: {
    baseURL: 'http://localhost:8080',
    //Enable tracing and screenshots on failure
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testDir: './test-setup/',
      testMatch: '*',
    },
    {
      name: 'chromium',
      testDir: './tests/',
      use: {
        ...devices['Desktop Chrome'],
        // Use "database" with existing accounts
        storageState: setupFile,
      },
      dependencies: ['setup'],
    },
    // Uncomment the following lines to enable tests on other browsers
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
