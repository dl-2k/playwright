import { BrowserManager } from "../browser/browser-manager";
 import { test as baseTest, expect as baseExpect} from '@playwright/test';

 export const test =baseTest.extend<{browserFixture:string}>({
     browserFixture: [async ({ browser, context, page, request }, use) => {
        BrowserManager.initializeBrowser(browser, context, page);
         await use('');
       }, { scope: 'test',  auto: true }],

 })
 export const expect = baseExpect;
