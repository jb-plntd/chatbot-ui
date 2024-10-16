-- supabase/migrations/<timestamp>_add_is_public_to_assistants.sql
ALTER TABLE assistants
ADD COLUMN is_public BOOLEAN DEFAULT false;