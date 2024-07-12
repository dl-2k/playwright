import {
  test as baseTest,
  expect as baseExpect,
} from "../core/fixture/base-fixture";
import { EditProfilePage } from "../pages/edit-profile-page";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { PhotoPage } from "../pages/photo-page";
import { ProfilePage } from "../pages/profile-page";
import { PhotoService } from "../service/api/photo-service";
import { UserService } from "../service/api/user-service";

type PageFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  profilePage: ProfilePage;
  photoPage: PhotoPage;
  editProfilePage: EditProfilePage
  userService: UserService
  photoService: PhotoService
};


export const test = baseTest.extend<PageFixtures>({
  loginPage: async ({ }, use) => {
    await use(new LoginPage());
  },
  homePage: async ({ }, use) => {
    await use(new HomePage());
  },
  profilePage: async ({ }, use) => {
    await use(new ProfilePage());
  },
  photoPage: async ({ }, use) => {
    await use(new PhotoPage());
  },
  editProfilePage: async ({ }, use) => {
    await use(new EditProfilePage());
  },
  userService: async ({ }, user) => {
    await user(new UserService());
  },
  photoService: async ({ }, user) => {
    await user(new PhotoService());
  },
});


export const expect = baseExpect;
