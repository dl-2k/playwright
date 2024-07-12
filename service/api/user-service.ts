import { APIRequestContext, request } from "@playwright/test";
import { account } from "../../data/account";
import { UrlConstant } from "../../constants/url-constant";

export class UserService {
    private apiRequestContext: APIRequestContext | null = null;
    constructor() {
        this.apiRequestContext = null;
    }
    async init() {
        this.apiRequestContext = await request.newContext();
    }
    async dispose() {
        if (this.apiRequestContext) {
            await this.apiRequestContext.dispose();
        }
    }

    async getUsername(): Promise<string> {
        if (!this.apiRequestContext) {
            await this.init();
        }

        const response = await this.apiRequestContext!.get(`${UrlConstant.api_url}/me`, {
            headers: {
                Authorization: `Bearer ${account.token}`
            }
        });

        if (response.ok()) {
            const data = await response.json();
            return data.username;
        } else {
            console.error('Failed to fetch user data:', response.status(), response.statusText());
            throw new Error('Failed to fetch user data');
        }
    }
    async getLikedPhotos(): Promise<string[]> {
        if (!this.apiRequestContext) {
            await this.init();
        }
        let username = await this.getUsername();
        const response = await this.apiRequestContext!.get(`${UrlConstant.api_url}/users/${username}/likes`, {
            headers: {
                Authorization: `Bearer ${account.token}`
            }
        });

        if (response.ok()) {
            const data = await response.json();
            const photoIds: string[] = data.map((photo: any) => photo.id);
            return photoIds;
        } else {
            console.error('Failed to fetch user data:', response.status(), response.statusText());
            throw new Error('Failed to fetch user data');
        }
    }
}