<div align="center">
  <img width="1000" alt="image" src="https://user-images.githubusercontent.com/6225588/211916659-567751d1-0225-402b-9141-4145c18b0834.png">

  <br />
  <br />
  <a href="https://caido.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://dashboard.caido.io/">Dashboard</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/roadmap">Roadmap</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/caido/caido/tree/main/brand">Branding</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/www-discord" target="_blank">Discord</a>
  <br />
  <hr />
</div>

# Workflows Store
Browse and install various workflows from our collection of pre-built workflows with a single click

## Installation

1. Open Caido
2. Navigate to the plugins page
3. Go to community store
4. Install workflows store

## Contributing

To contribute a new workflow to the store, follow these steps:

1. Fork the repository
2. Create a new branch for your workflow
3. Download your workflow in Caido
4. Create a new directory in `packages/workflows/src` with your workflow name (directory name must be the same as workflow ID)
5. Inside your workflow directory, add the following files:

   - `definition.json` - Your workflow file from Caido (rename the downloaded file)
   - `manifest.json` - Workflow metadata file (see example below)
   - `README.md` - Documentation for your workflow

   Example `manifest.json`:
   ```json
   {
     "author": {
       "name": "Your Name",
       "email": "your.email@example.com"
     },
     "url": "https://github.com/caido-community/workflows/packages/workflows/your-workflow/README.md",
     "description": "Brief description of your workflow",
     "id": "your-workflow-id",
     "name": "Your Workflow Name",
     "version": "0.0.1"
   }
   ```

   Your `README.md` should include:
   - Author information
   - Brief description of the workflow
   - Any additional usage instructions

6. Commit your changes
7. Push to your fork
8. Open a pull request with your changes
