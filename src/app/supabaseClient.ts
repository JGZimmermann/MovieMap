import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://brjlckhojqacmgbhpsha.supabase.co'; // sua URL do projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyamxja2hvanFhY21nYmhwc2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMzg0NzQsImV4cCI6MjA2NjcxNDQ3NH0.aP8N6Jfjg8cLnem7PtJKhvmC03HXLkD0MepRFhfKHIU';

export const supabase = createClient(supabaseUrl, supabaseKey);
