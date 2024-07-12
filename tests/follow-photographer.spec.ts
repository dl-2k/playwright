import { test, expect } from '../fixture/page-fixture';
import { account } from '../data/account';

test('follow a photographer successfully', async ({ loginPage, homePage, profilePage, photoPage }) => {
    await loginPage.login(account.email, account.password);

    await homePage.clickImage("2");

    await photoPage.goToPhotographerProfile();

    await profilePage.followUser();

    expect(await profilePage.isFollowed()).toBe(true);
});

test.afterEach(async ({ profilePage }) => {
    await profilePage.unfollowUser();
});

