# Security Guidelines

## Overview

This document outlines security practices for the Next Layer Consulting website project.

## Git Security

### GPG Commit Signing

All commits are automatically signed with GPG to verify authenticity.

**Your GPG Key ID**: `B5578DB81F2C2596`

Commits will show a "Verified" badge on GitHub, proving they came from you.

### Credentials

- **GitHub credentials** are stored securely in macOS Keychain
- **GPG private key** is protected by your passphrase
- Never share your GPG private key or passphrase

## Environment Variables

### Protected Files

The following files are ignored by Git and will never be committed:

- `.env`
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

### Using Environment Variables

1. **Copy the template**:
   ```bash
   cp .env.example .env.local
   ```

2. **Add your secrets** to `.env.local` (never commit this file)

3. **For production**, set environment variables in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

### Vite Environment Variables

Variables must be prefixed with `VITE_` to be accessible in client-side code:

```bash
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=hello@nextlayerconsulting.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Protected Files (.gitignore)

The following sensitive files are protected from being committed:

### Credentials & Keys
- `*.pem` - Private keys
- `*.key` - Encryption keys
- `*.p12`, `*.pfx` - Certificate files
- `*.gpg`, `*.asc` - GPG keys
- `id_rsa`, `id_dsa`, `id_ecdsa`, `id_ed25519` - SSH keys
- `.secrets`, `secrets.json`, `credentials.json` - Secret files

### Environment Files
- All `.env*` files (except `.env.example`)

### Build Artifacts
- `node_modules/`
- `dist/`, `build/`
- `.cache`, `.parcel-cache`

## Daily Workflow

### Making Changes

```bash
# 1. Make your changes to files

# 2. Stage and commit (automatically GPG signed)
git add .
git commit -m "Feat: Description of your changes"

# 3. Push to GitHub
git push
```

Your commits will automatically be signed and show as "Verified ✅" on GitHub.

## Security Checklist

- ✅ GPG commit signing enabled
- ✅ GitHub credentials cached securely
- ✅ `.env` files protected from commits
- ✅ Private keys and certificates excluded
- ✅ `.env.example` template created
- ✅ Security documentation in place

## Best Practices

1. **Never commit secrets** - Use environment variables
2. **Keep dependencies updated** - Run `npm audit` regularly
3. **Review changes before committing** - Use `git diff`
4. **Use meaningful commit messages** - Follow conventional commits format
5. **Keep GPG passphrase secure** - Store in password manager

## Questions?

If you're unsure whether something should be committed, check `.gitignore` or ask before committing.

## Updating Environment Variables

When adding new environment variables:

1. Add to `.env.local` for local development
2. Add to `.env.example` (with placeholder/example values)
3. Update production environment variables in hosting platform
4. Document in this file if needed
