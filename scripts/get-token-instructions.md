# How to Get Your Sanity Token

## Step-by-Step Instructions

### 1. Go to Sanity Manage
Visit: https://www.sanity.io/manage/personal/project/tx8g7o6u

### 2. Navigate to API Section
- Click on your project "Heavy Metal Tested Blog"
- Look for "API" in the left sidebar
- Click on "API"

### 3. Create a New Token
- Scroll down to "Tokens" section
- Click "Add API token"
- Give it a name like "Content Import Token"
- Select "Editor" permissions (not "Viewer" or "Write")
- Click "Create token"

### 4. Copy the Token
- The token will start with `sk...`
- Copy the entire token
- **Important**: This is the only time you'll see the full token

### 5. Add to Your Environment
Create or edit your `.env.local` file in your project root:

```
SANITY_TOKEN=sk_your_actual_token_here
```

### 6. Run the Import
```bash
npm run import-content
```

## 🔒 Security Note
- Never commit your token to git
- The `.env.local` file should already be in your `.gitignore`
- If you accidentally expose your token, you can revoke it in Sanity Manage

## ✅ Verification
To verify your token works:
1. Make sure your `.env.local` file exists
2. Make sure it contains `SANITY_TOKEN=sk...`
3. Run the import script
4. You should see "Starting content import..." in the console 