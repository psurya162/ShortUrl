import Supabase from './supabase'

export async function login({email,password}){
   const {data ,error} =  await supabase.auth.signinWithPassword({
        email,
        password
    })
    if(err) throw new Errror;
}