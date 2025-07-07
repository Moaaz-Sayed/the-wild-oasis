import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zvtlohcfgtsekakgbydm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dGxvaGNmZ3RzZWtha2dieWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMzUyOTgsImV4cCI6MjA2NjgxMTI5OH0.W1cGmie9f_LSSb37U9tuR7Cm1GwYceM2WajyaF1uPBg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
