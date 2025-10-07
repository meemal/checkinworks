/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `reason` (text) - reason for contact
      - `name` (text) - submitter name
      - `organisation` (text, nullable) - optional organisation
      - `email` (text) - contact email
      - `phone` (text, nullable) - optional phone number
      - `message` (text) - the message content
      - `consent` (boolean) - consent checkbox value
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their own submissions
    - No public read access (only admins can view via dashboard)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reason text NOT NULL,
  name text NOT NULL,
  organisation text,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);