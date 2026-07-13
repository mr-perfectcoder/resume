# Ashish Ranjan - Resume

Recruiter-focused resume website and ATS-friendly PDF for frontend-led full-stack roles.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

The website and PDF share the content in `src/data/resume.json`. After changing that file, regenerate the PDF with Python and ReportLab installed:

```bash
npm run pdf
```

This updates both `public/Ashish_Ranjan_Resume.pdf` for the website and `output/pdf/Ashish_Ranjan_Resume.pdf` for direct review.
