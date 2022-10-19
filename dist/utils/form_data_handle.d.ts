/// <reference types="node" />
import fs from 'fs';
import FormData from 'form-data';
export default function formDataHandle(obj: {
    [key: string]: string | Blob;
}, file: File | fs.ReadStream): Promise<{
    data: FormData | string | number;
    headers: {
        [key: string]: string | Blob;
    };
}>;
//# sourceMappingURL=form_data_handle.d.ts.map