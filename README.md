# TRANSFORM-X React Prototype

A frontend-first SIH prototype for **TRANSFORM-X — GenAI Platform for Automated Content Transformation**.

## Included
- Source ingestion UI (PDF/DOCX/TXT + paste text)
- Audience intelligence
- Communication objective / tone / detail controls
- Multi-output selection
- Source Understanding dashboard
- Generated Outputs dashboard
- Claim → Evidence verification workflow
- Human review actions
- Audit trail + SHA-256 / permissioned blockchain concept UI
- Responsive design

## Run in an existing Vite React project
Copy the `src` folder into your project and ensure `src/main.jsx` imports `./styles.css`.

If creating from scratch:

```bash
npm install
npm run dev
```

The current UI uses React only and does not require an icon/component library.

## Next backend integration
Suggested API endpoints:
- `POST /api/sources/upload`
- `POST /api/sources/understand`
- `POST /api/transform`
- `GET /api/outputs/:id`
- `POST /api/verify`
- `POST /api/review`
- `POST /api/export`
- `POST /api/integrity/hash`
- `GET /api/audit/:documentId`
