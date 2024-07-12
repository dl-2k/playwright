import { test, expect } from '../fixture/page-fixture';
import { account } from '../data/account';

test('like random photos successfully', async ({ loginPage, homePage, profilePage }) => {
    await loginPage.login(account.email, account.password);
    
    const likedPhotos :string[] = await homePage.likeRandomPhotos(3);
    await homePage.viewUserProfile();
    expect (await profilePage.isPhotoLiked(likedPhotos)).toBe(true);
});

test.afterEach(async ({ userService, photoService }) => {
    let photoIDs = await userService.getLikedPhotos();
    console.log(photoIDs);
    for (const id of photoIDs){
        await photoService.unlikePhoto(id);
    }
});

