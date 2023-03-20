import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hdvbxytiunfggwfctvdm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdmJ4eXRpdW5mZ2d3ZmN0dmRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NzQ0NDMsImV4cCI6MTk5MzM1MDQ0M30.eBI4ti9p_Dvqz25Bt0r098RGISDlZ7R1xUFhhqeFjqw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase