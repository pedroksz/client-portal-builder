# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

### Deploy no Apache2 (Ubuntu)

#### 1. Instale o Apache2

```sh
sudo apt update
sudo apt install apache2
```

#### 2. Gere o build de produção

```sh
npm run build
```

Isso criará uma pasta `dist/` com os arquivos estáticos.

#### 3. Copie os arquivos para o Apache

```sh
sudo cp -r dist/* /var/www/html/
```

Ou, se preferir criar um diretório específico:

```sh
sudo mkdir -p /var/www/portal-cliente
sudo cp -r dist/* /var/www/portal-cliente/
```

#### 4. Configure o Virtual Host (opcional, para diretório específico)

Crie um arquivo de configuração:

```sh
sudo nano /etc/apache2/sites-available/portal-cliente.conf
```

Adicione o conteúdo:

```apache
<VirtualHost *:80>
    ServerName seu-dominio.com
    DocumentRoot /var/www/portal-cliente

    <Directory /var/www/portal-cliente>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/portal-cliente-error.log
    CustomLog ${APACHE_LOG_DIR}/portal-cliente-access.log combined
</VirtualHost>
```

#### 5. Habilite o mod_rewrite (necessário para React Router)

```sh
sudo a2enmod rewrite
```

#### 6. Configure o .htaccess para SPA

Crie um arquivo `.htaccess` na pasta do projeto (antes do build) ou diretamente no servidor:

```sh
sudo nano /var/www/portal-cliente/.htaccess
```

Adicione:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

#### 7. Ative o site e reinicie o Apache

```sh
sudo a2ensite portal-cliente.conf
sudo systemctl restart apache2
```

#### 8. (Opcional) Configure HTTPS com Let's Encrypt

```sh
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d seu-dominio.com
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
