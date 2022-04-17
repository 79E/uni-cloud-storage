declare class uniCloudStorage {
    #private;
    spaceId: string;
    clientSecret: string;
    constructor(spaceId: string, clientSecret: string);
    upload(file: File, fileName?: string): Promise<{
        success: boolean;
        status?: number | undefined;
        error?: {
            code: string;
            message: string;
        } | undefined;
        data?: {
            accessKeyId: string;
            cdnDomain: string;
            host: string;
            id: string;
            ossPath: string;
            policy: string;
            signature: string;
            target: string;
        } | undefined;
    }>;
}
export default uniCloudStorage;
//# sourceMappingURL=index.d.ts.map