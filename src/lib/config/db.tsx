import { createClient } from '@supabase/supabase-js';

const url:string=process.env.SUPABASE_URL||""
const key:string=process.env.SUPABASE_KEY||""

console.log("SUPABASE_URL:", url);
console.log("SUPABASE_KEY exists:", !!key);

if(!url||!key){
      throw new Error("Missing Supabase environment variables");

}

const supabase = createClient(url, key);

export default supabase;


