import { test, expect } from '../fixture/page-fixture';
import { account } from '../data/account';
import { Utils } from '../utilities/utils';

test('update profile successfully', async ({ loginPage, homePage, profilePage, editProfilePage }) => {
    await loginPage.login(account.email, account.password);

    await homePage.viewUserProfile();

    await profilePage.goToEditProfile();

    const username = Utils.generateUsername("NEWUSER");

    await editProfilePage.updateUsername(username);

    await profilePage.goToUrl(`https://unsplash.com/@${username}`);

    expect(await profilePage.isFullNameCorrect(account.fullName)).toBeTruthy();

});
