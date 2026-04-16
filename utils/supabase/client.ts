import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://szmfxbcvcumnzbxffmro.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWZ4YmN2Y3VtbnpieGZmbXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNjQzNjYsImV4cCI6MjA5MTk0MDM2Nn0.ACiZUqAVpn2m4tSt2uwFK-asxSaho0iRkoqagZjK9-g'
)
