
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://btfznrlugnmgsicvuzmc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0Znpucmx1Z25tZ3NpY3Z1em1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNTc0MTIsImV4cCI6MjA0MjczMzQxMn0.BfMyrcIF9OG9Y3AiZr4hGCyJoyffTWtLS8COuOlKGgc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;