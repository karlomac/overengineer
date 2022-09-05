
// this auth specific routes
import { Client, Account } from 'appwrite';

console.log('api-url',  import.meta.env.VITE_API_URL);
console.log('api-project',  import.meta.env.VITE_API_PROJECT);

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://appwrite.lithiumteck.com/v1')
    .setProject('630cf7a4d97237496a42')
    ;

/**
 * @param {{ email: string; password: string; }} cl
 */
export async function logIn(cl) {
    return await account.createEmailSession(cl.email, cl.password)
    .then(res=>{
        console.log('res-done - ', res)
        return res
    })
    .catch(err=>{
        console.log('res-err-', err)
        return err
    })
}

/**
 * @param {{ email: string; password: string; name: string;}} cl
 */
export async function createAccount(cl){
    return await account.create('unique()', cl.email, cl.password, cl.name)
    .then(res=>{
        return res;
    })
    .catch(err=>{
        return err;
    })
}