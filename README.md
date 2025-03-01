# PDFForge API: A NestJS-based PDF Generator from Template System

PDFForge API is a RESTful service built with NestJS that allows you to generate PDFs from dynamic templates. This API provides endpoints where you can submit data to be merged into a predefined template, generating a custom PDF document in return.

## Features

- **Template-based PDF Generation**: Create PDFs from templates with dynamic data.
- **RESTful API**: Expose a simple, flexible API for PDF generation.
- **Customizable Templates**: Supports HTML templates, which can include placeholders for dynamic data.
- **Easy Integration**: Use this API in any front-end application or backend service that requires PDF generation.

## Installation

### Prerequisites

Make sure you have Node.js and NestJS installed.

### Clone the Repository

```bash
git clone https://github.com/your-username/pdfforge-api.git
cd pdfforge-api
```

### Install Dependencies

```bash
pnpm i
```

### Start the Server

```bash
pnpm start dev
```