import { APIRequestContext, request } from "@playwright/test";

export class APIRequest {
    private apiRequestContext: APIRequestContext;

    constructor(){
        this.init();
    }

    async init() {
        this.apiRequestContext = await request.newContext();
    }

    async dispose() {
        if (this.apiRequestContext) {
            await this.apiRequestContext.dispose();
            // this.apiRequestContext = null;
        }
    }
}