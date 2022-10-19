'use strict';
import fs from 'fs';
import environment from './environment'
import FormData from 'form-data'

export default async function formDataHandle (
    obj: {[key:string]: string | Blob} ,
    file : File | fs.ReadStream,
):Promise<{ data: FormData | string | number;headers:{[key:string]: string | Blob} }>{
    if(environment().environment === 'web'){
        const formData = new FormData()
        Object.keys(obj).forEach(key => {
            formData.append(key, obj[key])
        })
        try{
            formData.append('file', file)
        }catch (err) {
            return {
                data: 0,
                headers: {}
            }
        }
        return {
            data: formData,
            headers: {}
        }
    }else if(environment().environment === 'node'){
        const formData = new FormData()
        Object.keys(obj).forEach(key => {
            formData.append(key, obj[key])
        })
        try{
            formData.append('file', file)
        }catch (err) {
            return {
                data: 0,
                headers: {}
            }
        }
        return {
            data: formData,
            headers: {
                ...formData.getHeaders()
            }
        }
    }
    return {
        data: 0,
        headers: {}
    }
}
