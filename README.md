# demo-playwright
Learning Playwright

## Usage

Run tests (Chromium, headless mode)

```
npx playwright test
```

Run tests in headed mode

```
HEADLESS=false npx playwright test
```

Run tests against custom url (there is a default Prod url, but a custom url allows running against dev environments)

```
