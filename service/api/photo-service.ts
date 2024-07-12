import { APIRequestContext, request } from "@playwright/test";
import { account } from "../../data/account";
import { UrlConstant } from "../../constants/url-constant";

export class PhotoService {
    private apiRequestContext: APIRequestContext | null = null;
    constructor() {
        this.apiRequestContext = null;
    }
    async init() {
        this.apiRequestContext = await request.newContext();
    }


    async unlikePhoto(id:string): Promise<void> {
        if (!this.apiRequestContext) {
            await this.init();
        }

        const response = await this.apiRequestContext!.delete(`${UrlConstant.api_url}/photos/${id}/like`, {
            headers: {
                Authorization: `Bearer ${account.token}`
            }
        });

        if (response.ok()) {
            console.log(response.ok);
        } else {
            console.error('Failed to unlike photo:', response.status(), response.statusText());
            throw new Error('Failed to unlike photo');
        }
    }
}